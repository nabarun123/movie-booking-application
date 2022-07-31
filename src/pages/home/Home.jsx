import React, { useEffect, useState } from "react";
import Header from "../../components/header/Header";
import { getAllMovies } from "../../api/movies";
import Footer from "../../components/footer/Footer";
import Loader from "../../components/loader/Loader";
import "bootstrap/dist/css/bootstrap.min.css";
import img1 from "../../assests/1.avif";
import img2 from "../../assests/2.avif";
import img3 from "../../assests/3.avif";
import img4 from "../../assests/4.avif";
import img5 from "../../assests/5.avif";
import img6 from "../../assests/6.avif";
import img7 from "../../assests/7.avif";
import ImageCarousel from "../../components/image-carousel/ImageCarousel";

function Home() {
  const [movies, setMovies] = useState([]);
  const [allMovies, setAllMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getAllMovies()
      .then((response) => {
        const { status, data } = response;
        console.log(response);
        if (status === 200) {
          setMovies(data);
          setAllMovies(data);
          setLoading(false);
        }
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  const filterMoviesBySearch = (searchText) => {
    const filterMovies = allMovies.filter((movie) => {
      return movie.name.toLowerCase().includes(searchText.toLowerCase());
    });
    setMovies(filterMovies);
  };

  return (
    <div>
      <Header filterMoviesBySearch={filterMoviesBySearch} showSearch={true} />
      <ImageCarousel images={[img1, img2, img3, img4, img5, img6, img7]} />
      <div>
        <h4
          style={{
            color: "#333333",
            fontWeight: "bold",
            marginTop: "35px",
            display: "flex",
            justifyContent: "flex-start",
            marginLeft: "7.5%",
          }}
        >
          Recomended Movies
        </h4>
      </div>
      {loading ? (
        <Loader />
      ) : (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-evenly",
            marginLeft: "75px",
            marginRight: "75px",
          }}
        >
          {movies.map((movie) => {
            return (
              <div className="movies" style={{ cursor: "pointer" }}>
                <img
                  src={movie.posterUrl}
                  alt="poster"
                  className="image-tile"
                  style={{ width: "15vw", height: "50vh", borderRadius: "8px" }}
                />
                <h6
                  style={{
                    width: "15vw",
                    color: "black",
                    marginTop: "6%",
                    display: "flex",
                    justifyContent: "flex-start",
                    fontWeight: "bold",
                  }}
                >
                  {movie.name}
                </h6>
                <div
                  style={{
                    fontSize: "15.5px",
                    color: "grey",
                    display: "flex",
                    justifyContent: "flex-start",
                  }}
                >
                  <span>{movie.language}</span> /{" "}
                  <span>{movie.description}</span>
                </div>
              </div>
            );
          })}
        </div>
      )}

      <Footer />
    </div>
  );
}

export default Home;
