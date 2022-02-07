import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { collection, doc, onSnapshot } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDE4iIH0FwkiXS9Yema-nl8ihMg19PWO9Q",
  authDomain: "zeticket-test.firebaseapp.com",
  projectId: "zeticket-test",
  storageBucket: "zeticket-test.appspot.com",
  messagingSenderId: "862902441897",
  appId: "1:862902441897:web:2e3e1c181b4c1e85e1d6b8",
  measurementId: "G-43EFL1WSQ8",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore();

const getData = () => {
  onSnapshot(collection(db, "events"), (snapshot) => {
    console.log(
      snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id, doc: doc }))
    );
  });
};

export default getData;
