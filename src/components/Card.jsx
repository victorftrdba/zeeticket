function Card() {
  return (
    <li
      title="video"
      onClick={(e) => {
        this.getId(e);
        this.onClickVideo();
      }}
    >
      <div className="hover">
        <p>VER EVENTO</p>
      </div>
      <img src="/" width="100%" height="215" alt="" srcSet="" />

      <div className="list__content">
        <h1>card</h1>
        <p>card</p>
      </div>
    </li>
  );
}

export default Card;
