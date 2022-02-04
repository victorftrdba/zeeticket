import React from "react";
import "../styles/videos.scss";
import Card from "./Card";

//create a screen which all videos will be displayed
class EventList extends React.Component {
  //get the statistics response and send to state of this component

  //get data of an unique video from lists of videos to send to player screen and do some styles to fit the player screen
  getId = (event) => {
    document.body.style.overflow = "auto";
    document.querySelector(".ghost").style.opacity = "1";
    document.querySelector(".ghost").style.zIndex = "50";

    //document.querySelector(".player-main").style.display = "flex";
    document.querySelector(".player-main").style.opacity = "1";
    document.querySelector(".player-main").style.zIndex = "1000";

    this.setState({
      video: this.props.data[event.currentTarget.id],
    });
  };

  render() {
    //create a snippet and render a list of videos in videos screen

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
}

export default EventList;
