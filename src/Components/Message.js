import React from 'react'
import '../App.css'


const Message = (props)=>{

    const message = props.eachMessage.map((msg, id)=>{
return(
    <div className={props.sender ? 'message-sent' : 'message-recieved'} key={id}>
 <img src ={msg.userPhoto} className = 'user-image' alt = 'userphoto'/>
    <h4 className= 'message' style={{backgroundColor: props.sender ? 'green' : 'blue'}}>{msg.userMessage}</h4>
    
    </div>
)
    })

    return(
        <div className = 'message-box'>
         {message}

        </div>
    )
}


export default Message