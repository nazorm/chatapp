import React from 'react';
import '../App.css';
import Message from './Message';

import {auth} from '../config'
import {db} from '../config'









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
		this.scrollToBottom = this.scrollToBottom.bind(this);
	}

componentDidMount(){
	this.messageRef = db.ref().child('messages');
	this.showMessages()
	this.scrollToBottom()
}

	handleChange(e) {
		this.setState({
			message: e.target.value,
			// userName: auth.currentUser.displayName,
			// userPhoto: auth.currentUser.photoURL,
		});
	}

	handleSubmit(e) {
		e.preventDefault();
		if (this.state.message) {
			var newMessage = {
				userName: this.state.userName,
				userMessage: this.state.message,
			};
			console.log(newMessage)
			this.messageRef.push(newMessage);
	  document.querySelector('.user-text').value = ''
	  
		}
	}

	showMessages() {
		this.messageRef
		  .limitToLast(8)
		  .on('value', message => {
			this.setState({
				messageList: Object.values(message.val()),
			});
		  });
		  
	  }
        scrollToBottom(){
			this.messagesEnd.scrollIntoView({behavior: 'smooth'})
		}	


	render() {
		return (
			<div className="chat-room">
				
				<Message eachMessage={this.state.messageList} />
				<form onSubmit={this.handleSubmit}>
					<input type="text" onChange={this.handleChange} placeholder="Type a Message" className='user-text'/>
					<button className="enter-btn">Enter</button>
				</form>
				
				<div
             ref={(el) => { this.messagesEnd = el; }} className = 'scroller'>
        </div>


			</div>
		);
	}
}

export default ChatRoom;
