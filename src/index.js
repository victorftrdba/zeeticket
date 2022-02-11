import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Creator from "./components/Creator";
import NavBar from "./components/NavBar";
import EventList from "./components/EventList";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Hero from "./components/Hero";
import { DataProvider } from "./providers/data";
import EventScreen from "./components/EventScreen";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Panel from "./components/Panel";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <DataProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<NavBar />}>
          <Route path="/" element={<Hero />}></Route>
          <Route path="events" element={<EventList />}></Route>
          <Route path="creator" element={<Creator />}></Route>
          <Route path="signup" element={<Signup />}></Route>
          <Route path="login" element={<Login />}></Route>
          <Route path="events/:id" element={<EventScreen />}></Route>
          <Route path="panel/:id" element={<Panel />}>
            <Route
              path="/panel/:id/profile"
              element={<div>profile</div>}
            ></Route>
            <Route
              path="/panel/:id/new-event"
              element={<div>crie seu evento</div>}
            ></Route>
            <Route
              path="/panel/:id/events"
              element={<div>meus eventos</div>}
            ></Route>
            <Route
              path="/panel/:id/settings"
              element={<div>configurações</div>}
            ></Route>
            <Route path="/panel/:id/logout" element={<div>logout</div>}></Route>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </DataProvider>,

  rootElement
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
