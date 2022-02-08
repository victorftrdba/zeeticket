import React, { useState } from "react";
import { Navigate } from "react-router-dom";

function Card(props) {
  const [state, setState] = useState(null);
  const onClickEvent = () => {
    setState(props.id);
    console.log(props.id);
  };
  return (
    <div>
      <li
        title="event"
        onClick={(e) => {
          onClickEvent();
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
      {state ? <Navigate to={`/events/:${props.id}`} /> : ""}
    </div>
  );
}

export default Card;
