import "../styles/navbar.scss";
import Hero from "./Hero";
import { Outlet, Link } from "react-router-dom";

function NavBar() {
  return (
    <div>
      <div className="navbar">
        <div className="navbar__logo">ZE TICKET</div>
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
              <a href="/">
                {" "}
                <Link to="/">HOME</Link>
              </a>
            </li>
            <li>
              {" "}
              <Link to="/events">EVENTOS</Link>
            </li>
            <li>COMO FUNCIONA</li>
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
