import React, { useState } from "react";
import "../styles/login.scss";

import { Navigate, useNavigate } from "react-router-dom";
import { AiFillCloseSquare } from "react-icons/ai";
import {
  getAuth,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";

function Login(props) {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const [loginError, setLoginError] = useState("");

  const closeWindow = () => {
    console.log((document.querySelector(".login-form").style.opacity = "0"));
    setTimeout(() => {
      navigate("/");
    }, 50);
  };

  setTimeout(() => {
    document.querySelector(".login-form").style.transform = "scale(1)";
  }, 50);

  const handleSubmit = (event) => {
    event.preventDefault();

    const auth = getAuth();
    const email = event.target.elements.email.value;
    const password = event.target.elements.password.value;
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;

        setUser(user);
        // ...
      })
      .catch((error) => {
        console.log(auth);
        if (error.message == "Firebase: Error (auth/invalid-email).") {
          setLoginError("Email inválido");
        } else if (error.message == "Firebase: Error (auth/wrong-password).") {
          setLoginError("Senha incorreta");
        } else if (
          error.message ==
          "Firebase: Access to this account has been temporarily disabled due to many failed login attempts. You can immediately restore it by resetting your password or you can try again later. (auth/too-many-requests)."
        ) {
          setLoginError(
            "Número de tentativas excedido, troque sua senha ou tente novamente mais tarde"
          );
        } else if (error.message == "Firebase: Error (auth/internal-error).") {
          setLoginError("Preencha todos os campos");
        }
      });
  };

  return (
    <div>
      <section>
        <form className="login-form" onSubmit={handleSubmit}>
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
          <div className="login-form__error">{loginError}</div>

          <button className="login-form__button" onSubmit={handleSubmit}>
            <strong>Login</strong>
          </button>
        </form>
      </section>
      {user ? <Navigate to={`/${user.uid}`} /> : ""}
    </div>
  );
}

export default Login;
