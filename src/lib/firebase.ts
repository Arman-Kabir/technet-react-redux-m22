// import { initializeApp } from 'firebase/app';
// import { getAuth } from 'firebase/auth';

// const firebaseConfig = {
//   apiKey: import.meta.env.VITE_apiKey,
//   authDomain: import.meta.env.VITE_authDomain,
//   projectId: import.meta.env.VITE_projectId,
//   storageBucket: import.meta.env.VITE_storageBucket,
//   messagingSenderId: import.meta.env.VITE_messagingSenderId,
//   appId: import.meta.env.VITE_appId,
// };
// const app = initializeApp(firebaseConfig);
// export const auth = getAuth(app);

////////////////////////////////////
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB2JbhSrmvKmZmbtc525K1qa4MpTYHvVVc",
  authDomain: "technet-react-redux-30d75.firebaseapp.com",
  projectId: "technet-react-redux-30d75",
  storageBucket: "technet-react-redux-30d75.appspot.com",
  messagingSenderId: "797709788086",
  appId: "1:797709788086:web:747e0fa4da91c597b89717"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

