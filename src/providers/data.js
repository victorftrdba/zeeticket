import React, { useState } from "react";

export const DataContext = React.createContext({});

export const DataProvider = (props) => {
  const [form, setForm] = useState({
    title: "",
    description: "",
  });

  return (
    <DataContext.Provider value={{ form, setForm }}>
      {props.children}
    </DataContext.Provider>
  );
};
