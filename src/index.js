import React, {createContext} from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import firebase from "firebase";
import 'firebase/firestore'
import 'firebase/auth'

firebase.initializeApp({
    apiKey: "AIzaSyAkRl8OtUN2AqZg1IN5-aMZWUrCWtboQKw",
  authDomain: "chat-react-fad21.firebaseapp.com",
  projectId: "chat-react-fad21",
  storageBucket: "chat-react-fad21.appspot.com",
  messagingSenderId: "960587236391",
  appId: "1:960587236391:web:f25a58d7cacd285bcf3a02",
  measurementId: "G-3X9J42SFPW"
    }
);

export const Context = createContext(null)

const auth = firebase.auth()
const firestore = firebase.firestore()


ReactDOM.render(
    <Context.Provider value={{
        firebase,
        auth,
        firestore
    }}>
        <App />
    </Context.Provider>,
  document.getElementById('root')
);

