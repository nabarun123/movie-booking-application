import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "mdb-ui-kit/css/mdb.min.css";
import { footer } from "mdb-ui-kit";

function Footer() {
  return (
    <div
      style={{
        backgroundColor: "#313035",
        width: "100%",
        height: "5vh",
        color: "white",
        marginTop: "35%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "12px",
      }}
    >
      <div className="my-auto p-2">BookMyShow, &copy; All Right Reserved.</div>
    </div>
  );
}

export default Footer;
