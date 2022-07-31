import React from "react";
import loagingImg from "../../assests/load.gif";

function Loader() {
  return (
    <div>
      <img src={loagingImg} alt="Page is loading" />
    </div>
  );
}

export default Loader;
