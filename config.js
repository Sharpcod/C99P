import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyALUx74Amxi9DaQFCgGL4E7tkoAeutFRH4",
  authDomain: "class-99.firebaseapp.com",
  projectId: "class-99",
  storageBucket: "class-99.appspot.com",
  messagingSenderId: "681185261928",
  appId: "1:681185261928:web:c5f387476a95b774b63edd",
  measurementId: "G-2P0THX4ZEB"
};
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
