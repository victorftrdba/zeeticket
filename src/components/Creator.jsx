import React, { useState } from "react";

import "../styles/creator.scss";

const Creator = (props) => {
  const handleChange = (event) => {};

  console.log("aqui");

  const handleSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <form onSubmit={handleSubmit}>
      <label>
        <div>
          <p>TÍTULO:</p>
        </div>
        <input type="text" onChange={handleChange} />
      </label>
      <label>
        <div>
          <p>DESCRIÇÃO:</p>
        </div>
        <input type="text" onChange={handleChange} />
      </label>
      <button onSubmit={handleSubmit}>submit</button>
    </form>
  );
};

export default Creator;
