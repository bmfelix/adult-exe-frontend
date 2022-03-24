import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const config = {
    apiKey: process.env.REACT_APP_IDENTITY_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
};

console.log(process.env, 'config')

firebase.initializeApp(config);

export const firebaseAuth = firebase.auth();
