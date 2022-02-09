import "../styles/event-screen.scss";
import { useParams } from "react-router-dom";
import React from "react";
import { DataContext } from "../providers/data";

function Panel(props) {
  let params = useParams();
  console.log(props);

  return <div>PANEL</div>;
}

export default Panel;
