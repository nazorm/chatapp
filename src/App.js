import React from 'react'
import './App.css';
import React, { useEffect, useRef, useState } from 'react';

import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import SignIn from 'Components/SignIn'
import SignOut from 'Components/SignOut'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
//const firebaseConfig = 
firebase.initializeApp({
  apiKey: `${process.env.REACT_APP_API_KEY}`,
  authDomain: `${process.env.REACT_APP_AUTH_DOMAIN}`,
  projectId: `${process.env.REACT_APP_PROJECT_ID}`,
  storageBucket: `${process.env.REACT_APP_STORAGE_BUCKET}`,
  messagingSenderId: `${process.env.REACT_APP_MESSAGING_SENDER_ID}`,
  appId: `${process.env.REACT_APP_ID}`,
  measurementId: `${process.env.REACT_APP_MEASUREMENT_ID}`
});


const auth = firebase.auth();
const firestore = firebase.firestore();


function App (){
  const [user] = useAuthState(auth)
 
    return (
      <div className="App">
      <header>
        <h1>prochat</h1>
        <SignOut/>
      </header>
      </div>
    )
  
 
}

export default App;
