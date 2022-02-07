import React, { useState } from "react";
import { DataContext } from "../providers/data";
import "../styles/creator.scss";

const Creator = (props) => {
  const { form, setForm } = React.useContext(DataContext);

  console.log(form);

  const handleChange = (event) => {
    setForm({ title: event.target.value, description: event.target.value });
  };

  console.log("aqui");

  const handleSubmit = (event) => {
    alert("Um nome foi enviado: " + form.title);
    event.preventDefault();
  };
  return (
    <form onSubmit={handleSubmit}>
      <label>
        <div>
          <p>TÍTULO:</p>
        </div>
        <input type="text" value={form.title} onChange={handleChange} />
      </label>
      <label>
        <div>
          <p>DESCRIÇÃO:</p>
        </div>
        <input type="text" value={form.description} onChange={handleChange} />
      </label>
      <button onSubmit={handleSubmit}>submit</button>
    </form>
  );
};

export default Creator;
