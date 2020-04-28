import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
const config = {
  apiKey: "AIzaSyDV8Jbkq4rHDssMC2AfLtJYz7tlJWTsuPw",
  authDomain: "chatmpm-mpm.firebaseapp.com",
  databaseURL: "https://chatmpm-mpm.firebaseio.com"
};

firebase.initializeApp(config);

export const auth = firebase.auth;
export const db = firebase.database();


