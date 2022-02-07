import db from "../firebase";
import { collection, addDoc, onSnapshot } from "firebase/firestore";
import { Navigate } from "react-router-dom";

import "../styles/creator.scss";
import { useState } from "react";

const Creator = (props) => {
  const handleChange = (event) => {};

  const [onSubmit, setOnsubmit] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(event);
    addDoc(collection(db, "events"), {
      title: event.target.elements.title.value,
      description: event.target.elements.description.value,
    });

    setOnsubmit(event.target.elements);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          <div>
            <p>TÍTULO:</p>
          </div>
          <input name="title" type="text" onChange={handleChange} />
        </label>
        <label>
          <div>
            <p>DESCRIÇÃO:</p>
          </div>
          <input name="description" type="text" onChange={handleChange} />
        </label>
        <button onSubmit={handleSubmit}>submit</button>
      </form>
      {onSubmit ? <Navigate to="/events" /> : ""}
    </div>
  );
};

export default Creator;
