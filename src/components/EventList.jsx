import React, { useEffect } from "react";
import "../styles/videos.scss";
import Card from "./Card";
import { DataContext } from "../providers/data";

function EventList(props) {
  const { data } = React.useContext(DataContext);

  console.log(data);

  const arr = data.events.map((doc) => {
    return <Card title={doc.title} description={doc.description}></Card>;
  });

  return (
    <section className="videos__main">
      <ul className="videos__list">{arr}</ul>
    </section>
  );
}

export default EventList;
