import { collection, onSnapshot } from "firebase/firestore";
import "../styles/navbar.scss";
import { useEffect } from "react";
import React from "react";
import { Outlet, Link } from "react-router-dom";
import db from "../firebase";
import { useState } from "react";
import { BiDownArrow } from "react-icons/bi";
import { onAuthStateChanged, getAuth } from "firebase/auth";
import { DataContext } from "../providers/data";
import UserMenu from "./UserMenu";

function NavBar() {
  const [events, setEvents] = useState("");
  const [isLogged, setIsLogged] = useState(false);
  const [userName, setUserName] = useState("");
  const { data } = React.useContext(DataContext);
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  console.log(data.users);

  const auth = getAuth();

  useEffect(() => {
    onSnapshot(collection(db, "events"), (snapshot) => {
      setEvents(
        snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id, doc: doc }))
      );
    });
  }, []);

  onAuthStateChanged(auth, (user) => {
    if (user) {
      const userName = data.users.find(function (obj) {
        return obj.email === user.email;
      });

      setIsLogged(true);

      setUserName(userName.name);
      console.log(user);

      /*       const uid = user.uid; */
    } else {
      setIsLogged(false);
      // User is signed out
      // ...
    }

    return user;
  });

  const toggleMenu = () => {
    if (!menuIsOpen) {
      document.querySelector(".user-menu").style.transform =
        "translateY(-150%)";
      document.querySelector(".arrow > svg").style.transform = "rotate(0deg)";
    } else {
      document.querySelector(".user-menu").style.transform = "translateY(0%)";
      document.querySelector(".arrow > svg").style.transform = "rotate(180deg)";
    }
    setMenuIsOpen(!menuIsOpen);
  };

  const menuLoggedOut = (
    <div className="navbar__menu">
      <ul className="navbar__menu__logedout">
        <li>
          {" "}
          <Link to="/home">Home</Link>{" "}
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
  );

  const menuLoggedIn = (
    <div className="navbar__menu">
      <ul className="navbar__menu__logedin">
        <li>
          {" "}
          <Link to="/home">Home</Link>{" "}
        </li>
        <li>
          {" "}
          <Link to="/events">Eventos</Link>
        </li>
        <li>Contato</li>
      </ul>
    </div>
  );

  const userConsole = (
    <div className="navbar__user-console" onClick={toggleMenu}>
      <div className="navbar__user-console__text">
        <span>{`Bem-vindo,  ${userName} `}</span>
      </div>
      <div className="navbar__user-console__img">
        <img
          width={60}
          height={60}
          src={require("../assets/profile-s.jpeg")}
          alt="/"
        />
        <span className="arrow">
          <BiDownArrow />
        </span>
      </div>
    </div>
  );

  return (
    <div className="bar">
      <div className="navbar">
        <div className="navbar__logo">
          {" "}
          <Link to="/home">ZEETICKET</Link>
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
        {isLogged ? menuLoggedIn : menuLoggedOut}
        {isLogged ? userConsole : null}
      </div>
      <UserMenu />
      <div>
        {" "}
        <Outlet />
      </div>
    </div>
  );
}

export default NavBar;
