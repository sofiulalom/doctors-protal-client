import React, { createContext, useEffect, useState, } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from 'firebase/auth'
import app from '../../firebase/firebase.config';
export const AuthContext=createContext()
const auth =getAuth(app)
const Authprovider = ({children}) => {
    const [user, setUser]=useState()
    const [lowading, setLowading]=useState(true)
    const ContenewWithGoogle=(provider)=>{
        setLowading(true)
        return signInWithPopup(auth, provider)
    }
    const createSignUp=(email, password)=>{
        setLowading(true)
       return createUserWithEmailAndPassword(auth, email, password)
    }
    const UpdataeuserProfiele=(userinfo)=>{
        return updateProfile(auth.currentUser, userinfo)
    }
    const LoginUser=(email, password)=>{
        setLowading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const LogOut=()=>{
        return signOut(auth)
    }
    
    useEffect(()=> {
      const unSubscribe=  onAuthStateChanged(auth,  (currentMengUser)=> {
            console.log(currentMengUser);
            setUser(currentMengUser)
            setLowading(false)
        })
        return ()=> unSubscribe()
    }, [])
    const authInfo={
        user,
        ContenewWithGoogle,
        createSignUp,
        UpdataeuserProfiele,
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