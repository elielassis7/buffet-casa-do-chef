// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDNTLthk80uVFwRH25afIIFpVUSvZSnsME",
  authDomain: "buffet-casa-do-chef.firebaseapp.com",
  projectId: "buffet-casa-do-chef",
  storageBucket: "buffet-casa-do-chef.appspot.com",
  messagingSenderId: "206837773629",
  appId: "1:206837773629:web:b9443fbcbc3251e5d30154",
  measurementId: "G-NY6NBJHGSK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);

const auth = getAuth(app);

export { auth }