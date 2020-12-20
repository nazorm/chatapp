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
	return (
		<div className = 'chat-room'>
			<h1>Chat Room</h1>
		</div>
	);
};

export default ChatRoom;
