import React, { useState } from "react";
import "../styles/signup.scss";
import db from "../firebase";
import { collection, addDoc } from "firebase/firestore";
import { AiFillCloseSquare } from "react-icons/ai";

import {
  getAuth,
  createUserWithEmailAndPassword,
  sendEmailVerification,
} from "firebase/auth";
import { connectStorageEmulator } from "firebase/storage";
import { useNavigate } from "react-router-dom";

function Signup(props) {
  const actionCodeSettings = {
    // URL you want to redirect back to. The domain (www.example.com) for this
    // URL must be in the authorized domains list in the Firebase Console.
    url: "http://localhost:3000/login",
    // This must be true.
  };
  const [isFormSended, setIsFormSended] = useState(false);

  const navigate = useNavigate();

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
          setIsFormSended(true);
        });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

        console.log(errorCode, errorMessage);
      });
  };

  const closeWindow = () => {
    console.log((document.querySelector(".signup-form").style.opacity = "0"));
    setTimeout(() => {
      navigate("/");
    }, 50);
  };
  const form = (
    <form className="signup-form" onSubmit={handleSubmit}>
      <div className="close-btn" onClick={closeWindow}>
        <AiFillCloseSquare />
      </div>
      <h1>Cadastre-se</h1>
      <label>
        <input name="name" type="text" placeholder="nome" />
      </label>
      <label>
        <input name="email" type="text" placeholder="email" />
      </label>
      <label>
        <input name="password" type="password" placeholder="senha" />
      </label>
      <button className="signup-form__button" onSubmit={handleSubmit}>
        <strong>Cadastrar</strong>
      </button>
    </form>
  );

  const feedback = (
    <div className="signup-feedback">
      <div className="close-btn" onClick={closeWindow}>
        <AiFillCloseSquare />
      </div>
      <p>Enviamos um link de confirmação para o seu email. =)</p>
    </div>
  );

  return <section>{isFormSended ? feedback : form}</section>;
}

export default Signup;
