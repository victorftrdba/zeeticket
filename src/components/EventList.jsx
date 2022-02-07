import React from "react";
import "../styles/videos.scss";
import Card from "./Card";
import { DataContext } from "../providers/data";

function EventList(props) {
  const { form } = React.useContext(DataContext);

  console.log(form);

  return (
    <section className="videos__main">
      <ul className="videos__list">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </ul>
    </section>
  );
}

export default EventList;
