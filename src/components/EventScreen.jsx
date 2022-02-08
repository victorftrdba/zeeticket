import "../styles/event-screen.scss";
import { useParams } from "react-router-dom";
import React from "react";
import { DataContext } from "../providers/data";

function EventScreen(props) {
  let params = useParams();

  const { data } = React.useContext(DataContext);

  const arr = data.events;

  var index = arr.findIndex((key) => key.id === params.id);

  console.log(params.id);
  console.log(index);

  return (
    <div className="event-screen">
      <header className="event-screen__img">
        <img src="/" alt="img"></img>
      </header>
      <section className="event-screen__content">
        <h1>{arr[index].title}</h1>
        <p>{arr[index].description}</p>
      </section>
    </div>
  );
}

export default EventScreen;
