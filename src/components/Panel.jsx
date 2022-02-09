import "../styles/event-screen.scss";
import { useParams } from "react-router-dom";
import React from "react";
import { DataContext } from "../providers/data";
import {
  getAuth,
  createUserWithEmailAndPassword,
  sendEmailVerification,
} from "firebase/auth";
import "../styles/panel.scss";

function Panel(props) {
  const auth = getAuth();
  let params = useParams();
  console.log(auth.currentUser);

  return (
    <div className="panel">
      <h1>BEM VINDO {auth.currentUser.email}</h1>
    </div>
  );
}

export default Panel;
