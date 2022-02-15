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
import { Outlet, Link } from "react-router-dom";

function Panel(props) {
  const auth = getAuth();

  const signOut = () => {
    auth.signOut().then(() => {
      console.log("signedout");
    });
  };

  return (
    <div className="panel">
      <div className="panel__menu">
        <div className="panel__menu__header">
          <span>bem-vindo, {auth.currentUser.email}</span>
        </div>
        <ul>
          <li>
            <Link to={`/panel/${auth.currentUser.uid}/profile`}>
              <span>PROFILE</span>
            </Link>{" "}
          </li>
          <li>
            <Link to={`/panel/${auth.currentUser.uid}/new-event`}>
              <span>CRIAR EVENTO</span>
            </Link>{" "}
          </li>
          <li>
            <Link to={`/panel/${auth.currentUser.uid}/events`}>
              <span>MEUS EVENTOS</span>
            </Link>{" "}
          </li>
          <li>
            <Link to={`/panel/${auth.currentUser.uid}/settings`}>
              <span>CONFIGURAÇÕES</span>
            </Link>{" "}
          </li>
          <li onClick={signOut}>
            <Link to={`/`}>
              <span>LOGOUT</span>
            </Link>{" "}
          </li>
        </ul>
      </div>
      <div className="panel__content">
        CONTENT
        <Outlet />
        {/*     <BrowserRouter>
          <Routes>
            <Route
              path="/panel/:id/builder"
              element={<div>builder</div>}
            ></Route>
            <Route
              path="/panel/:id/profile"
              element={<div>profile</div>}
            ></Route>
          </Routes>
        </BrowserRouter> */}
      </div>
    </div>
  );
}

export default Panel;
