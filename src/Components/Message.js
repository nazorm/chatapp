import React from 'react'
import '../App.css'


const Message = (props)=>{

    const message = props.eachMessage.map((msg, id)=>{
return(
    <div className='message' key={id}>
    <span className='user-image'>{msg.userPhoto}</span>
    <h4 className='user-name'>{msg.userName}</h4>
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