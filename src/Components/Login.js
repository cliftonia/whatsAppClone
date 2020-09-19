import React from "react";
import "./Login.css";
import Button from "@material-ui/core/Button";
import { auth, provider } from "../firebase";
import { useStateValue } from "../StateProvider";
import { actionTypes } from "../reducer";
import logo from "../IMG_1791.JPG";

function Login() {
  const [{}, dispatch] = useStateValue();

  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        dispatch({
          type: actionTypes.SET_USER,
          user: result.user,
        });
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className=" ">
      <div className="login__container">
        <img src={logo} alt="" />
        <div className="login__text">
          <h1>Cliff Rooms</h1>
        </div>
        <Button onClick={signIn}>Sign in With Google</Button>
      </div>
    </div>
  );
}

export default Login;
