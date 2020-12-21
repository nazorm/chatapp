import React from 'react';
import '../App.css'
import Message from './Message'

import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const auth = firebase.auth();
const firestore = firebase.firestore();
//const db = firebase.database()

class ChatRoom extends React.Component{
constructor(props){
	super(props)
	this.state = {
userName : auth.currentUser.displayName,
message : '',
messageList : [],
userPhoto : auth.currentUser.photoURL
	}
	
   this.messageRef = firestore.collection('messages');
	//this.messageRef = firebase.database().ref().child('messages');
	

	this.handleSubmit = this.handleSubmit.bind(this)
	this.handleChange = this.handleChange.bind(this)
}


// UNSAFE_componentWillReceiveProps(nextProps){
// 	if(nextProps.chater){
// 		this.setState({
// 			userName : nextProps.chater
// 		})
// 	}
// }
handleChange(e){
	this.setState({
		message : e.target.value,
	})
		
	}

	 handleSubmit(e){
		e.preventDefault()
		if(this.state.message){
			var newMessage = {
				userName : this.state.userName,
				userMessage: this.state.message
			}
			console.log(newMessage)

		}
	}
	


	render(){
		return (
			<div className = 'chat-room'>
				<h1>Chats</h1>
				<Message eachMessage = {this.state.messageList}/>
				<form onSubmit={this.handleSubmit}>
					<input type='text' onChange={this.handleChange} placeholder='Type a Message' />
					<button className='enter-btn'>Enter</button>
				</form>
			</div>
		)
	}
	
};

export default ChatRoom;
