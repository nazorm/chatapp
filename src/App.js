import React from 'react';
import './App.css';
import ChatRoom from './components/ChatRoom';
import firebase from 'firebase';
import 'firebase/firestore';
import 'firebase/auth';

//firebase.initializeApp(config);

const auth = firebase.auth();
const App = () => {
	return (
		<div className="App">
			<header>
				<h3>prochat</h3>
				<SignOut />
			</header>
			<section>{auth.onAuthStateChanged ? <ChatRoom /> : <SignIn />}</section>
		</div>
	);
};

const SignIn = () => {
	const signInWithGoogle = () => {
		const provider = firebase.auth.GoogleAuthProvider();
		auth.signInWithPopup(provider);
	};

	return (
		<div>
			<button onClick={signInWithGoogle}>Sign in with Google</button>
		</div>
	);
};

const SignOut = () => {
	return auth.currentUser && <button onClick={() => auth.signOut()}>Sign Out</button>;
};

export default App;
