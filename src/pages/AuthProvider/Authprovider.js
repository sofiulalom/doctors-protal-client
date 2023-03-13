import React, { createContext, useEffect, useState, } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut} from 'firebase/auth'
import app from '../../firebase/firebase.config';
export const AuthContext=createContext()
const auth =getAuth(app)
const Authprovider = ({children}) => {
    const [user, setUser]=useState(null)
    const [lowading, setLowading]=useState(true)
    const ContenewWithGoogle=(provider)=>{
        setLowading(true)
        return signInWithPopup(auth, provider)
    }
    const createSignUp=(email, password)=>{
        setLowading(true)
       return createUserWithEmailAndPassword(auth, email, password)
    }
    const LoginUser=(email, password)=>{
        setLowading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const LogOut=()=>{
        return signOut(auth)
    }
    
    useEffect(()=> {
      const unSubscribe=  onAuthStateChanged(auth,  (currentUser)=> {
            console.log(currentUser);
            setUser(currentUser)
            setLowading(false)
        })
        return ()=> unSubscribe()
    }, [])
    const authInfo={
        user,
        ContenewWithGoogle,
        createSignUp,
        LoginUser,
        LogOut,
        lowading,
        
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default Authprovider;