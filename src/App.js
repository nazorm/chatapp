import React from 'react'
import './App.css';
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

import { useAuthState } from 'react-firebase-hooks/auth';
import SignIn from './components/SignIn';
import SignOut from './components/SignOut';
import ChatRoom from './components/ChatRoom';

const auth = firebase.auth();
const firestore = firebase.firestore();

class  App extends React.Component{
	constructor(){
		super()
		this.state ={
			authenticated: false,
			user : null,
			username : ''
		}
	}

componentDidMount(){
	auth.onAuthStateChanged((user)=>{
		if (user){
			this.setState({
				authenticated :true,
				newUser : user,
				username : user.displayName
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
			<section>{this.state.authenticated ? <ChatRoom/> : <SignIn />}</section>
		</div>
	)
}
	
}

export default App;
