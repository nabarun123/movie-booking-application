import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Login from "../../components/login/Login";
import Signup from "../../components/signup/Signup";
import { newUserSignup, userSignin } from "../../api/auth";
import { ROLES } from "../../constants/userRoles";
import { storeUserData } from "../../utils/userData";
import "../authentication/authentication.css";
import LoginImage from "../../assests/login.gif";
import "./authentication.css";

function Authentication() {
  const [showSignup, setShowSignup] = useState(false);
  const [loginMessage, setLoginMessage] = useState("");
  const [errorMessageLogin, setErrorMessageLogin] = useState("");
  const [errorMessageSignup, setErrorMessageSignup] = useState("");

  const navigate = useNavigate();

  const goToSignup = () => {
    setShowSignup(true);
  };
  const goToLogin = () => {
    setShowSignup(false);
  };

  const redirectToPage = (userType) => {
    if (userType === ROLES.CUSTOMER) {
      navigate("/customer");
    } else if (userType === ROLES.CLIENT) {
      navigate("/client");
    } else {
      navigate("/admin");
    }
  };

  useEffect(() => {
    if (localStorage.getItem("accessToken")) {
      const userType = localStorage.getItem("userTypes");
      redirectToPage(userType);
    }
  }, []);

  const handleSignupSubmit = (data) => {
    newUserSignup(data)
      .then((response) => {
        const { message, status } = response;
        if (status === 201) {
          setShowSignup(false);
          setLoginMessage("Signup Successful. Please Login");
        } else if (message) {
          setErrorMessageSignup(message);
        }
      })
      .catch((err) => {
        setErrorMessageSignup(err?.response?.data?.message || err?.message);
      });
  };
  // 1. make an api call and post the data to signup
  // 2. if api call is successful, redirect to login page
  // 3. show a message to user that login is successful

  // if submit is successful

  // if submit is failure
  // dont call setsignup(false)

  const handleLoginSubmit = (data) => {
    userSignin(data)
      .then((response) => {
        console.log(response);
        const { message, status, data } = response;
        if (status === 200) {
          if (message) {
            // case when login credentials are incorrect
            setErrorMessageLogin(message);
          } else {
            // success when api passes with corect credentials
            // store user data in the localstorage
            storeUserData(data);
            // navigate to the correct page on login based on user type
            const userType = data.userTypes;
            redirectToPage(userType);
          }
        }
      })
      .catch((err) => {
        // case when api fails due to network/auth issue
        setErrorMessageLogin(err?.response?.data?.message || err?.message);
      });
    // 1. make an api call and post the data
    // 2. if api call is successful, redirect to concerned user
    // 3.if api call is failure, show a message to user

    // if login is failure
    // dont redirect to next page
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginTop: "6%",
      }}
    >
      <div>
        <img src={LoginImage} />
      </div>
      <div>
        {showSignup ? (
          <Signup
            goToLogin={goToLogin}
            onSignupSubmit={handleSignupSubmit}
            errorMessageSignup={errorMessageSignup}
          />
        ) : (
          <Login
            goToSignup={goToSignup}
            onLoginSubmit={handleLoginSubmit}
            loginMessage={loginMessage}
            errorMessageLogin={errorMessageLogin}
          />
        )}
      </div>
    </div>
  );
}

export default Authentication;
