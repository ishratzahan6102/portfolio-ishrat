// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBm92FsjLKJzMkgrZqMfwjkXEFDNO2jSWs",
  authDomain: "portfolio-dc820.firebaseapp.com",
  projectId: "portfolio-dc820",
  storageBucket: "portfolio-dc820.appspot.com",
  messagingSenderId: "546741124423",
  appId: "1:546741124423:web:ba07d1f2cf53c23a42e062",
  measurementId: "G-Q63KZ37CLT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app