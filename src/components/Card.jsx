import React from "react";
import { useContext } from "react";
import { DataContext } from "../providers/data";

function Card() {
  const { form } = React.useContext(DataContext);
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
        <h1>{form.title}</h1>
        <p>{form.description}</p>
      </div>
    </li>
  );
}

export default Card;
