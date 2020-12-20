import React from 'react';
import '../App.css'

import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';
const auth = firebase.auth();
const firestore = firebase.firestore();
//const db = firebase.database()

class ChatRoom extends React.Component{
constructor(){
	super()
	this.state = {

	}
	this.handleSubmit = this.handleSubmit.bind(this)
	this.handleChange = this.handleChange.bind(this)
}

	 handleSubmit(e){
		e.preventDefault()
	}
handleChange(){
	
		
	}
	render(){
		return (
			<div className = 'chat-room'>
				<h1>Chat Room</h1>
				<form onSubmit={this.handleSubmit}>
					<input type='text' onChange={this.handleChange} placeholder='Type a Message' />
					<button className='enter-btn'>Enter</button>
				</form>
			</div>
		)
	}
	
};

export default ChatRoom;
