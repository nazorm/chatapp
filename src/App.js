import React from 'react';
import './App.css';
import firebase from 'firebase';
import 'firebase/firestore';
import 'firebase/auth';
import ChatRoom from './components/ChatRoom';
import config from './config'

firebase.initializeApp(config);
export const auth = firebase.auth();
export const db = firebase.database();
class App extends React.Component{
	constructor(){
		super()
		this.state = {
			authenticated : false,

		}
	}
componentDidMount(){
	auth.onAuthStateChanged((user)=>{
		if(user){
			this.setState({
				authenticated : true
			})
		}
	})
}

	render(){
		return (
			<div className="App">
				<header>
					<h3>prochat</h3>
					<SignOut />
					
				</header>
				<section>{ this.state.authenticated ? <ChatRoom/> :<SignIn/>}</section>
			</div>
		)
	}
	
};
export default App;

const SignIn = () => {
	const signInWithGoogle = () => {
		const provider = new firebase.auth.GoogleAuthProvider();
		auth.signInWithPopup(provider);
	};

	return (
		<div>
			<button onClick={signInWithGoogle}>Sign in with Google</button>
		</div>
	);
};


function SignOut() {
	return auth.currentUser && (
	  <div>
		<button onClick={() => auth.signOut()} className='signout-btn'>Sign Out</button>
	  </div>
	)
  }
  


