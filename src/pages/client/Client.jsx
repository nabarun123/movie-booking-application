import { margin } from "@mui/system";
import React from "react";
import Header from "../../components/header/Header";
import TheatresList from "../../components/theatres-list/TheatresList";

//client01/ Password1
//admin/Password1

function Client() {
  return (
    <div className="bg-light">
      <Header />

      <h2 style={{ color: "black", marginTop: "5px" }}>Welcome</h2>
      <hr />
      <p>Take your quick look at your stats below!</p>
      <TheatresList />
    </div>
  );
}

export default Client;
