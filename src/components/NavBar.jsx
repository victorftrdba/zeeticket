import { collection, doc, onSnapshot } from "firebase/firestore";
import "../styles/navbar.scss";
import { useEffect } from "react";
import React from "react";
import { Outlet, Link } from "react-router-dom";
import db from "../firebase";
import { useState } from "react";

function NavBar() {
  const [events, setEvents] = useState("");

  useEffect(() => {
    onSnapshot(collection(db, "events"), (snapshot) => {
      setEvents(
        snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id, doc: doc }))
      );
    });
  }, []);

  console.log(events);

  return (
    <div>
      <div className="navbar">
        <div className="navbar__logo">
          {" "}
          <Link to="/">ZEETICKET</Link>
        </div>
        <div className="navbar__search">
          <form action="">
            <input
              className="navbar__search__form__input"
              type="text"
              placeholder="procurar eventos"
            />
          </form>
        </div>
        <div className="navbar__menu">
          <ul>
            <li>
              {" "}
              <Link to="/">Home</Link>{" "}
            </li>
            <li>
              {" "}
              <Link to="/events">Eventos</Link>
            </li>
            <li>Contato</li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/signup">Registre-se</Link>
            </li>
          </ul>
        </div>
        <div className="navbar__icons">
          <i className="fa fa-facebook"></i>
          <i className="fab fa-instagram"></i>
          <i className="fab fa-whatsapp" aria-hidden="true"></i>
        </div>
      </div>

      <div>
        {" "}
        <Outlet />
      </div>
    </div>
  );
}

export default NavBar;
