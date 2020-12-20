import React from 'react';
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import '../App.css'



let auth = firebase.auth();

const SignOut = () => {
	return (
		auth.currentUser && (
				<button onClick={() => auth.signOut()}>Sign Out</button>
		)
	);
};

export default SignOut;
