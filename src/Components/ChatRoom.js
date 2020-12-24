import React from 'react';
import '../App.css';
import Message from './Message';
import firebase from 'firebase';
import 'firebase/firestore';
import 'firebase/auth';
import config from '../config'

firebase.initializeApp(config);
const auth = firebase.auth();


class ChatRoom extends React.Component {
	constructor() {
		super();
		this.state = {
			userName: '',
			message: '',
			messageList: [],
			userPhoto: null
		};
	
		//this.messageRef = firestore.collection('messages');
		


		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}

componentDidMount(){
	this.messageRef = firebase.database().ref().child('messages');
	this.showMessages()
}

	handleChange(e) {
		this.setState({
			message: e.target.value,
			userName: auth.currentUser.displayName,
			userPhoto: auth.currentUser.photoURL,
		});
	}

	handleSubmit(e) {
		e.preventDefault();
		if (this.state.message) {
			var newMessage = {
				userName: this.state.userName,
				userMessage: this.state.message,
			};
			this.messageRef.push(newMessage);
	  document.querySelector('.user-text').value = ''
		}
	}

	showMessages() {
		this.messageRef
		  .limitToLast(10)
		  .on('value', message => {
			this.setState({
				messageList: Object.values(message.val()),
			});
		  });
	  }
	

	render() {
		return (
			<div className="chat-room">
				
				<Message eachMessage={this.state.messageList} />
				<form onSubmit={this.handleSubmit}>
					<input type="text" onChange={this.handleChange} placeholder="Type a Message" className='user-text'/>
					<button className="enter-btn">Enter</button>
				</form>
			</div>
		);
	}
}

export default ChatRoom;
