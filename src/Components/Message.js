import React from 'react'
import '../App.css'


const Message = (props)=>{

    const message = props.eachMessage.map((msg, id)=>{
return(
    <div className='message-container' key={id} style = {{justifyContent :props.sender ? 'flex-end' : 'flex-start' }}>
 <img src ={msg.userPhoto} className = 'user-image' alt = 'userphoto'/>
    <h4 className= 'message' style={{backgroundColor: props.sender ? 'green' : 'grey'}}>{msg.userMessage}</h4>
    
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