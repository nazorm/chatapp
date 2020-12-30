import React from 'react';
import '../App.css';

import Message from './Message';
import {db} from '../App'
import {auth} from '../App'









class ChatRoom extends React.Component {
	constructor() {
		super();
		this.state = {
			userName: '',
			message: '',
			messageList: [],
			userPhoto: null,
			userID : '',
			ifSent : false,
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
			userName: auth.currentUser.displayName,
			 userPhoto: auth.currentUser.photoURL,
			 userId : auth.currentUser.uid,

		});
	}

	handleSubmit(e) {
		e.preventDefault();
		if (this.state.message) {
			var newMessage = {
				userName: this.state.userName,
				userMessage: this.state.message,
				userPhoto: this.state.userPhoto
			};
			this.messageRef.push(newMessage);
	  document.querySelector('.user-text').value = ''
	 
		}
		if (this.state.userId === auth.currentUser.uid){
			this.setState({
				ifSent : true
			})
		}
	}

	showMessages() {
		this.messageRef
		  .limitToLast(7)
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
				
				<Message eachMessage={this.state.messageList} sender = {this.state.ifSent} />
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
