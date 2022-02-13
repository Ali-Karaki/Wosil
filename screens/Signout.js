import React from 'react'
import { auth } from "../firebase";
function Signout() {
  return (

    auth
        .signOut()
        .then(() => {
        navigation.replace("LoginScreen");
        })
        .catch((error) => alert(error.message))
      
  );
}

export default Signout