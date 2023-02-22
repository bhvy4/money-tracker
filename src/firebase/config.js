import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCjSQeqtL4FihRP_HbjwagTcwU8a_vmrog",
  authDomain: "money-tracker-b3108.firebaseapp.com",
  projectId: "money-tracker-b3108",
  storageBucket: "money-tracker-b3108.appspot.com",
  messagingSenderId: "809364317128",
  appId: "1:809364317128:web:8a0ff5f8a2e1f18baa56fd",
};

//init firebase
firebase.initializeApp(firebaseConfig);

//init service
const firebaseProject = firebase.firestore();
const firebaseAuth = firebase.auth();

//timestamp
const timestamp = firebase.firestore.Timestamp;

export { firebaseProject, firebaseAuth, timestamp };
