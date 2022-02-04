import "../styles/navbar.scss";

function NavBar() {
  return (
    <div className="navbar">
      <div className="navbar__logo">ZE TICKET</div>
      <div className="navbar__search">
        <form action="">
          <input
            class="navbar__search__form__input"
            type="text"
            placeholder="procurar eventos"
          />
        </form>
      </div>
      <div className="navbar__menu">
        <ul>
          <li>HOME</li>
          <li>EVENTOS</li>
          <li>COMO FUNCIONA</li>
          <li>CONTATO</li>
        </ul>
      </div>
      <div className="navbar__icons">
        <i class="fa fa-facebook"></i>
        <i class="fab fa-instagram"></i>
        <i class="fab fa-whatsapp" aria-hidden="true"></i>
      </div>
    </div>
  );
}

export default NavBar;
