import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../assests/logo.png";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";

function Header({ filterMoviesBySearch, showSearch }) {
  const [searchText, setSearchText] = useState("");

  const navigate = useNavigate();
  const loginFn = () => {
    navigate("/login");
  };
  const logoutFn = () => {
    localStorage.clear();
    navigate("/home");
  };

  const searchFn = (e) => {
    // console.log(searchText);
    e.preventDefault();
    filterMoviesBySearch(searchText);
  };

  const isUserLoggedIn = localStorage.getItem("accessToken");

  return (
    <div>
      <nav
        className="navbar navbar-expand-lg"
        style={{ height: "10vh", backgroundColor: "#333545" }}
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img src={logo} style={{ width: "12vw", marginLeft: "65px" }} />
          </a>

          {showSearch && (
            <form onSubmit={searchFn}>
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search for Movies, Events, Plays, Sports and Activities "
                aria-label="Search"
                value={searchText}
                onChange={(e) => {
                  setSearchText(e.target.value);
                }}
                style={{ height: "5.5vh", width: "35vw", fontSize: "12px" }}
              />
            </form>
          )}

          <div
            className="collapse navbar-collapse"
            id="navbarSupportedContent"
            style={{
              display: "flex",
              justifyContent: "end",
              marginRight: "7%",
            }}
          >
            {isUserLoggedIn ? (
              <Button
                className="btn btn-danger "
                onClick={logoutFn}
                style={{
                  height: "5.5vh",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                Logout
              </Button>
            ) : (
              <Button
                className="btn btn-danger "
                onClick={loginFn}
                style={{
                  height: "5.5vh",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                Sign in
              </Button>
            )}
          </div>
        </div>
      </nav>
      <div
        style={{
          backgroundColor: "#222539",
          width: "100%",
          height: "5vh",
          color: "white",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "12px",
        }}
      >
        <div
          style={{
            backgroundColor: "#222539",
            width: "100%",
            height: "5vh",
            color: "white",
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: "center",
            marginLeft: "91px",
            marginRight: "215px",
          }}
        >
          <div>Movies</div>
          <div>Streams</div>
          <div>Events</div>
          <div>Plays</div>
          <div>Sports</div>
          <div>Activities</div>
          <div>Buzz</div>
        </div>
        <div
          style={{
            backgroundColor: "#222539",
            width: "100%",
            height: "5vh",
            color: "white",
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: "center",
            marginLeft: "265px",
            marginRight: "82px",
          }}
        >
          <div>ListYourShow</div>
          <div>Corporates</div>
          <div>Offers</div>
          <div>Gift Cards</div>
        </div>
      </div>
      <div
        style={{
          backgroundColor: "white",
          width: "100%",
          height: "1.5vh",
        }}
      ></div>
    </div>
  );
}

export default Header;
