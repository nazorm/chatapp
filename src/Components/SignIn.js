import React from 'react'
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

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