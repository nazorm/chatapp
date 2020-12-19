import React from 'react'
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';

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

const SignIn = ()=>{


    const signInWithGoogle = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        auth.signInWithPopup(provider);
      }


    return(
        <div>
 <button onClick={signInWithGoogle}>Sign in with Google</button>
        </div>
    )
}

export default SignIn