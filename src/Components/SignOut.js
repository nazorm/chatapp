import React from 'react'

const SignOut = ()=>{

   return auth.currentUser && (
      <button onClick={() => auth.signOut()}>Sign Out</button>
    )
}


export default SignOut