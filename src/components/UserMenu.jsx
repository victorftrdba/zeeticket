import React from "react";
import "../styles/user-menu.scss";
import { getAuth } from "firebase/auth";
import "../styles/panel.scss";

function UserMenu() {
  const auth = getAuth();

  const signOut = () => {
    auth.signOut().then(() => {
      document.querySelector(".user-menu").style.transform =
        "translateY(-150%)";
      console.log("signedout");
    });
  };
  return (
    <div className="user-menu">
      <ul>
        <li>
          <p>Profile</p>
        </li>
        <li>
          <p>Criar Evento</p>
        </li>
        <li>
          <p>Meus Eventos</p>
        </li>
        <li>
          <p>Configurações</p>
        </li>
        <li onClick={signOut}>
          <p>Logout</p>
        </li>
      </ul>
    </div>
  );
}

export default UserMenu;
