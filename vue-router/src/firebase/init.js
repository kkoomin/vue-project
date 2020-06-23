import firebase from "firebase";

var config = {
  apiKey: process.env.VUE_APP_FIREBASE_API_KEY,
  authDomain: "fir-test-t4ir.firebaseapp.com",
  databaseURL: "https://fir-test-t4ir.firebaseio.com",
  projectId: "fir-test-t4ir",
  storageBucket: "fir-test-t4ir.appspot.com",
  messagingSenderId: "891686070033",
  appId: "1:891686070033:web:cdd497845b3d9116480eb0",
  measurementId: "G-29DQ3PQW1N",
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(config);
// firebase.analytics();

export default firebaseApp.firestore();
