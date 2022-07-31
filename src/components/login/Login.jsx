import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Login({ goToSignup, onLoginSubmit, loginMessage, errorMessageLogin }) {
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    // 1. create the data  object
    // 2. call the onLoginSubmit with data
    // 3. e. prevent default to prevent submit
    e.preventDefault();
    const data = { userId, password };
    onLoginSubmit(data);
    setUserId(" ");
    setPassword(" ");
  };

  return (
    <div className="container-md bg-danger m-2 p-3 d-flex justify-content-center align-items-center">
      <form onSubmit={handleSubmit}>
        <h1 className="text-center text-light p-3"> Login</h1>

        <input
          type="text"
          className="form-control input-group m-3"
          placeholder="User Id"
          style={{ width: "21vw", height: "7vh" }}
          onChange={(e) => setUserId(e.target.value)}
        />

        <input
          type="password"
          className="form-control input-group m-3"
          placeholder="Password"
          style={{ width: "21vw", height: "7vh" }}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />

        <input
          type="submit"
          className="form-control input-group m-3 btn btn-dark"
          value="LOGIN"
          style={{ width: "21vw", height: "7vh", fontSize: "21px" }}
        />

        <hr style={{ color: "white" }} />

        <p style={{ color: "white", textDecoration: "none" }}>
          Don't have an account?{" "}
          <a href="#" onClick={goToSignup}>
            Signup here!
          </a>
        </p>
        <div className="error-msg text-danger m-1">{errorMessageLogin}</div>
        <div className="text-success m-1">{loginMessage}</div>
      </form>
    </div>
  );
}

export default Login;
