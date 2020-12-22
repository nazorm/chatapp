import React from 'react';
import './App.css';
import ChatRoom from './components/ChatRoom';
import firebase from 'firebase';
import 'firebase/firestore';
import 'firebase/auth';
import config from './config';

firebase.initializeApp(config);
 console.log(config.apiKey)


const auth = firebase.auth();
console.log("here")
const App = () =>{
		return (
			<div className="App">
				<header>
					<h3>prochat</h3>
					<SignOut />
				</header>
				<section>{auth.onAuthStateChanged? <ChatRoom /> : <SignIn />}</section>
			</div>
		);
}

const SignIn = () => {
	firebase.initializeApp(config);
		const auth = firebase.auth();
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
	firebase.initializeApp(config);
		const auth = firebase.auth();
	return auth.currentUser && <button onClick={() => auth.signOut()}>Sign Out</button>;
};



export default App;
