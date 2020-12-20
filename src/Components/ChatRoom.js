import React from 'react';
import '../App.css'

import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';
const auth = firebase.auth();
const firestore = firebase.firestore();

const ChatRoom = () => {


	const handleSubmit = ()=>{
		alert('here')
	}
	const handleChange = ()=>{
		alert('here')
	}
	return (
		<div className = 'chat-room'>
			<h1>Chat Room</h1>
			<form onSubmit={handleSubmit}>
				<input type='text' onChange={handleChange} placeholder='Type a Message' />
				<button className='enter-btn'>Enter</button>
			</form>
		</div>
	);
};

export default ChatRoom;
