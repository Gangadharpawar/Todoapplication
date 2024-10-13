import React from "react";
import { useState } from "react";
import "../css/Login.css";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../Auth/AuthContext";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Login() {
  const [username, SetuserName] = useState("");
  const [password, SetPassword] = useState("");
  const [userrequired, SetuserRequired] = useState(false);
  const [passwordrequired, Setpasswordrequired] = useState(false);
  const [showpassword, Setshowpassword] = useState(false);
  const navigate = useNavigate();
  const authInfo = useContext(AuthContext);

  const togglePasswordHandel = () => {
    Setshowpassword(!showpassword);
  };
  function login() {
    if (username !== "" && password !== "") {
      SetuserRequired(false);
      Setpasswordrequired(false);
      //server call
      const url = `http://3.149.249.65:5500/login`;
      const LoginPromise = fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: username,
          password: password,
        }),
      });
      LoginPromise.then((response) => {
        response
          .json()
          .then((data) => {
            // localstorage /session/coockies
            // sessionStorage.getItem("Token", data.accessToken);
            authInfo.LogIn(data.accessToken);
            // redirect dashboard
            // history.push("/Dashboard");
            // navigate("/Dashboard");
            navigate(`/Dashboard/${username}`);
          })
          .catch((e) => {
            console.log("Error in parsing data", e);
          });
      }).catch((e) => {
        console.log("Error in login", e);
      });
    } else {
      if (username === "") {
        SetuserRequired(true);
      } else {
        SetuserRequired(false);
      }
      if (password === "") {
        Setpasswordrequired(true);
      } else {
        Setpasswordrequired(false);
      }
    }
  }
  return (
    <>
      <div className="login-wraper">Login</div>
      <div className="wraper">
        <div className="input-wrapper">
          <label htmlFor="username">User Name</label>
          <input
            type="text"
            id="username"
            name="username"
            value={username}
            onChange={(e) => {
              SetuserName(e.target.value);
            }}
          />

          <span className="error-text " id="nameerror">
            {userrequired ? "UserName Required" : ""}
          </span>
        </div>
        <div className="input-wrapper" style={{ position: "relative" }}>
          <label htmlFor="userpassword">Password</label>
          <input
            type={showpassword ? "text" : "password"}
            id="userpassword"
            name="userpassword"
            value={password}
            onChange={(e) => {
              SetPassword(e.target.value);
            }}
          />
          <span
            onClick={togglePasswordHandel}
            style={{
              position: "absolute",
              right: "10px",
              top: "50%",
              transform: "translateY(-50%)",
              cursor: "pointer",
            }}
          >
            <FontAwesomeIcon icon={showpassword ? faEyeSlash : faEye} />
          </span>
          <span
            className="error-text "
            id="passworderror"
            style={{ position: "fixed" }}
          >
            {passwordrequired ? "Password Required" : ""}
          </span>
        </div>
        <div className="login-btn">
          <input type="button" id="loginbtn" value="Login" onClick={login} />
        </div>
      </div>
    </>
  );
}
