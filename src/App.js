

import React, { useEffect, useRef, useState } from 'react';
import './App.css';
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import SignIn from './components/SignIn'
import SignOut from './components/SignOut'
import ChatRoom from './components/ChatRoom'




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
      <section>
        {user? <ChatRoom/> : <SignIn/>}
      </section>
      </div>
    )
  
 
}

export default App;
