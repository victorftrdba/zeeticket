import React, { useState } from "react";
import "../styles/signup.scss";
import db from "../firebase";
import { collection, addDoc } from "firebase/firestore";
import { Navigate, useNavigate } from "react-router-dom";
import { AiFillCloseSquare } from "react-icons/ai";
import {
  getAuth,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  getIdToken,
  sendSignInLinkToEmail,
  sendEmailVerification,
} from "firebase/auth";

function Login(props) {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const closeWindow = () => {
    console.log((document.querySelector(".signup-form").style.opacity = "0"));
    setTimeout(() => {
      navigate("/");
    }, 50);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const auth = getAuth();
    signInWithEmailAndPassword(
      auth,
      event.target.elements.email.value,
      event.target.elements.password.value
    )
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        setUser(user);
        // ...
      })
      .catch(() => {
        console.log("error");
      });

    onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log("welcome: " + user.email);

        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        const uid = user.uid;

        // ...
      } else {
        console.log("no user");
        // User is signed out
        // ...
      }
    });
  };

  return (
    <div>
      <section>
        <form className="signup-form" onSubmit={handleSubmit}>
          <div className="close-btn" onClick={closeWindow}>
            <AiFillCloseSquare />
          </div>
          <h1>Welcome</h1>

          <label>
            <input name="email" type="text" placeholder="email" />
          </label>

          <label>
            <input name="password" type="password" placeholder="password" />
          </label>

          <button className="signup-form__button" onSubmit={handleSubmit}>
            <strong>Login</strong>
          </button>
        </form>
      </section>
      {user ? <Navigate to={`/panel/${user.uid}`} /> : ""}
    </div>
  );
}

export default Login;
