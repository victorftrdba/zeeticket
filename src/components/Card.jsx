import React from "react";

function Card(props) {
  return (
    <li
      title="event"
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
        <h1>{props.title}</h1>
        <p>{props.description}</p>
        <p>{props.user}</p>
      </div>
    </li>
  );
}

export default Card;
