import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCJ75VzpXcJsBHZwMpmyGGMbP1W4qRVd5s",
  authDomain: "fir-login-56e17.firebaseapp.com",
  projectId: "fir-login-56e17",
  storageBucket: "fir-login-56e17.appspot.com",
  messagingSenderId: "613235932981",
  appId: "1:613235932981:web:babe3256630d423416167c",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
