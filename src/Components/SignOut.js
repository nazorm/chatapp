import React from 'react';
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import '../App.css'

import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';

let auth = firebase.auth();

const SignOut = () => {
	return (
		auth.currentUser && (
				<button onClick={() => auth.signOut()}>Sign Out</button>
		)
	);
};

export default SignOut;
