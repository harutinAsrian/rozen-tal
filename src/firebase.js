import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyBNqDLRgeFQ87lxdGD80HTK-0w1NTrudJk",
  authDomain: "rozen-tal.firebaseapp.com",
  projectId: "rozen-tal",
  storageBucket: "rozen-tal.appspot.com",
  messagingSenderId: "662100044022",
  appId: "1:662100044022:web:c40908c5986a94de7064d7",
};

var firebasedb = firebase.initializeApp(firebaseConfig);
export default firebasedb;
