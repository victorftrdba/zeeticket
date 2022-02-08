import db from "../firebase";
import { collection, addDoc } from "firebase/firestore";
import { Navigate } from "react-router-dom";

import "../styles/creator.scss";
import { useState } from "react";

import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

const Creator = (props) => {
  const storage = getStorage();

  const [image, setImage] = useState("");

  const [onSubmit, setOnsubmit] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();

    setOnsubmit(event.target.elements);

    const storageRef = ref(storage, image.name);

    console.log(storageRef);

    uploadBytes(storageRef, image).then((snapshot) => {
      getDownloadURL(ref(storage, image.name)).then((url) => {
        addDoc(collection(db, "events"), {
          title: event.target.elements.title.value,
          description: event.target.elements.description.value,
          imagePath: url,
        });
      });
      console.log("Uploaded a blob or file!");
    });
    /* ---------------------------- */
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          <div>
            <p>TÍTULO:</p>
          </div>
          <input name="title" type="text" />
        </label>
        <label>
          <div>
            <p>DESCRIÇÃO:</p>
          </div>
          <input name="description" type="text" />
        </label>
        <label>
          <div>
            <input
              type="file"
              name="image"
              onChange={(e) => {
                setImage(e.target.files[0]);
              }}
            />
          </div>
        </label>

        <button onSubmit={handleSubmit}>submit</button>
      </form>

      {onSubmit ? <Navigate to="/events" /> : ""}
    </div>
  );
};

export default Creator;
