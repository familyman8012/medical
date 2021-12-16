import "../styles/globals.css";
// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBXozYFcQWNLOYitWpJzNtUKQIlAlHceAs",
  authDomain: "simplecrud-62dde.firebaseapp.com",
  projectId: "simplecrud-62dde",
  storageBucket: "simplecrud-62dde.appspot.com",
  messagingSenderId: "408074140306",
  appId: "1:408074140306:web:ffc49d4ae5ba64ba65c44b",
  measurementId: "G-MS3MKH8K7C",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig); //firebase 초기화

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
