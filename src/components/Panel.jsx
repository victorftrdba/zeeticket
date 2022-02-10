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
  let params = useParams();
  console.log(auth.currentUser);

  return (
    <div className="panel">
      <div className="panel__menu">
        <div className="panel__menu__header">
          <span>bem-vindo, %%USER%%</span>
        </div>
        <ul>
          <li>
            <Link to="/panel/:id/builder">
              <span>builder</span>
            </Link>{" "}
          </li>
          <li>
            <Link to="/panel/:id/profile">
              <span>profile</span>
            </Link>{" "}
          </li>
          <li>
            <Link to="/panel/:id/settings">
              <span>settings</span>
            </Link>{" "}
          </li>
          <li>
            <Link to="/panel/:id/password">
              <span>password</span>
            </Link>{" "}
          </li>
          <li>
            <Link to="/panel/:id/logout">
              <span>logout</span>
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
