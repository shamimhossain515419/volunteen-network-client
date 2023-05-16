import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from "../firebase.config";
export const AuthContext=createContext();
const Authprovider = ({children}) => {
  const [user,setUser]=useState(null);
  const [loading,serloading]=useState(true)
 const auth=getAuth(app);
const googleProvide=new GoogleAuthProvider();
 const Ragiser=(email,password)=>{
      return createUserWithEmailAndPassword(auth,email,password)
 }
 const SingIn=(email,password)=>{
      return signInWithEmailAndPassword(auth,email,password)
 }


 const signOUT=()=>{
     return signOut(auth)
 }
 const goolgesing=()=>{
      return signInWithPopup(auth,googleProvide)
 }
 useEffect(()=>{
      const unsubcript= onAuthStateChanged(auth, currentuser=>{
           setUser(currentuser)
           if(currentuser){
               const loggaduser = {
                    email: currentuser.email
                  }
                  fetch('http://localhost:5000/jwt', {
                    method: 'POST',
                    headers: {
                      'content-type': 'application/json'
                    },
                    body: JSON.stringify(loggaduser)
            
                  }).then(res=>res.json()).then(data=>{
                    
                    localStorage.setItem('token-volunteen', data.token)
                  })
           }
           serloading(false)
      })
      return ()=>{
          unsubcript()
      }
 },[])


     const userIf={
          Ragiser,
          SingIn,
          user,
          signOUT,
          goolgesing,
          loading
     }

     return (
          <div>
             <AuthContext.Provider value={userIf}>
               {children}
               </AuthContext.Provider>  
          </div>
     );
};

export default Authprovider;