import { collection, doc, onSnapshot } from "firebase/firestore";
import "../styles/navbar.scss";
import { useEffect } from "react";
import React from "react";
import { Outlet, Link } from "react-router-dom";
import getData from "../firebase";

function NavBar() {
  /*   useEffect(() => {
    onSnapshot(collection(db, "events"), (snapshot) => {
      console.log(
        snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id, doc: doc }))
      );
    });
  }, []); */

  console.log(getData());

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
              <Link to="/">HOME</Link>{" "}
            </li>
            <li>
              {" "}
              <Link to="/events">EVENTOS</Link>
            </li>
            <li>
              <Link to="/creator">CRIE SEU EVENTO</Link>
            </li>
            <li>CONTATO</li>
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
