import React, { useState } from "react";
import { collection, doc, onSnapshot } from "firebase/firestore";
import db from "../firebase";
import { useEffect } from "react";

export const DataContext = React.createContext({});

export const DataProvider = (props) => {
  const [data, setData] = useState({
    events: [],
    users: [],
  });

  useEffect(() => {
    onSnapshot(collection(db, "events"), (snapshot) => {
      setData((prevDoc) => {
        return {
          ...prevDoc,
          events: snapshot.docs.map((doc) => ({
            ...doc.data(),
            id: doc.id,
            doc: doc,
          })),
        };
      });
    });
    onSnapshot(collection(db, "users"), (snapshot) => {
      setData((prevDoc) => {
        return {
          ...prevDoc,
          users: snapshot.docs.map((doc) => ({
            ...doc.data(),
            id: doc.id,
            doc: doc,
          })),
        };
      });
    });
  }, []);

  return (
    <DataContext.Provider value={{ data, setData }}>
      {props.children}
    </DataContext.Provider>
  );
};
