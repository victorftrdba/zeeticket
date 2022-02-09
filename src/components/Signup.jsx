import React, { useState } from "react";
import "../styles/signup.scss";
import db from "../firebase";
import { collection, addDoc } from "firebase/firestore";

import {
  getAuth,
  createUserWithEmailAndPassword,
  sendEmailVerification,
} from "firebase/auth";
import { connectStorageEmulator } from "firebase/storage";

const actionCodeSettings = {
  // URL you want to redirect back to. The domain (www.example.com) for this
  // URL must be in the authorized domains list in the Firebase Console.
  url: "http://localhost:3000/login",
  // This must be true.
};

const handleSubmit = (event) => {
  event.preventDefault();

  const auth = getAuth();

  createUserWithEmailAndPassword(
    auth,
    event.target.elements.email.value,
    event.target.elements.password.value
  )
    .then(() => {
      const user = auth.currentUser;
      sendEmailVerification(user, actionCodeSettings).then(() => {
        console.log("email enviado");
      });
    })
    .catch((error) => {
      const errorCode = error.code;

      const errorMessage = error.message;

      console.log(errorCode, errorMessage);
    });
};

function Signup(props) {
  return (
    <div>
      <section>
        <form className="signup-form" onSubmit={handleSubmit}>
          <h1>Cadastre-se</h1>

          <label>
            <input name="email" type="text" placeholder="email" />
          </label>

          <label>
            <input name="password" type="password" placeholder="password" />
          </label>

          <button className="signup-form__button" onSubmit={handleSubmit}>
            <strong>Cadastrar</strong>
          </button>
        </form>
      </section>
    </div>
  );
}

export default Signup;
