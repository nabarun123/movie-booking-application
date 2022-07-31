import React, { useState } from "react";
import { ROLES } from "../../constants/userRoles";
import "bootstrap/dist/css/bootstrap.min.css";
import { Dropdown, DropdownButton } from "react-bootstrap";

function Signup({ goToLogin, onSignupSubmit, errorMessageSignup }) {
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [userType, setUserType] = useState(ROLES.CUSTOMER);

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = { userId, password, name: username, email, userType };
    onSignupSubmit(data);
    // console.log(data);
  };

  return (
    <div className="container-md bg-danger m-2 p-3  d-flex justify-content-center align-items-center">
      <form onSubmit={handleSubmit}>
        <h1 className="text-center text-light p-3">Signup</h1>

        <input
          type="text"
          className="form-control input-group m-3"
          placeholder="User Id"
          value={userId}
          style={{ width: "21vw", height: "7vh" }}
          onChange={(e) => setUserId(e.target.value)}
        />

        <input
          type="password"
          className="form-control input-group m-3"
          placeholder="Password"
          value={password}
          style={{ width: "21vw", height: "7vh" }}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          type="text"
          className="form-control input-group m-3"
          placeholder="Usename"
          value={username}
          style={{ width: "21vw", height: "7vh" }}
          onChange={(e) => setUsername(e.target.value)}
        />

        <input
          type="email"
          className="form-control input-group m-3"
          placeholder="Email"
          value={email}
          style={{ width: "21vw", height: "7vh" }}
          onChange={(e) => setEmail(e.target.value)}
        />

        <div className="d-flex align-items-center justify-content-center">
          <label className="text-light mx-3">User type:</label>
          <DropdownButton
            align="end"
            title={userType}
            id="userType"
            onSelect={(user) => {
              setUserType(user);
            }}
            variant="warning"
          >
            <Dropdown.Item eventKey={ROLES.CUSTOMER}>
              {ROLES.CUSTOMER}
            </Dropdown.Item>
            <Dropdown.Item eventKey={ROLES.CLIENT}>
              {ROLES.CLIENT}
            </Dropdown.Item>
            <Dropdown.Item eventKey={ROLES.ADMIN}>{ROLES.ADMIN}</Dropdown.Item>
          </DropdownButton>
        </div>

        <input
          type="submit"
          className="form-control input-group m-3 btn btn-dark"
          value="SIGNUP"
          style={{ width: "21vw", height: "7vh", fontSize: "21px" }}
        />

        <hr style={{ color: "white" }} />

        <p style={{ color: "white" }}>
          Already have account?{" "}
          <a href="#" onClick={goToLogin}>
            Login here!
          </a>
        </p>
        <div className="error-msg text-danger m-1">{errorMessageSignup}</div>
      </form>
    </div>
  );
}

export default Signup;
