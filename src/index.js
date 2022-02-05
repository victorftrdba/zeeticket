import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Creator from "./components/Creator";
import NavBar from "./components/NavBar";
import EventList from "./components/EventList";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Hero from "./components/Hero";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<NavBar />}>
        <Route path="/" element={<Hero />}></Route>
        <Route path="events" element={<EventList />}></Route>
        <Route path="creator" element={<Creator />}></Route>
      </Route>
    </Routes>
  </BrowserRouter>,
  rootElement
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
