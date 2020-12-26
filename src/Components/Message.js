import React from 'react'
import '../App.css'


const Message = (props)=>{

    const message = props.eachMessage.map((msg, id)=>{
return(
    <div className='message' key={id}>
 <img src ={msg.userPhoto} className = 'user-image' alt = 'userphoto'/>
    <h4 className='user-message'>{msg.userMessage}</h4>
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