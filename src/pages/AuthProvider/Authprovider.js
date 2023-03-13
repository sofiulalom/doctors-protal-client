import React, { createContext, } from 'react';
import {createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword} from 'firebase/auth'
import app from '../../firebase/firebase.config';
export const AuthContext=createContext()
const auth =getAuth(app)
const Authprovider = ({children}) => {

    const createSignUp=(email, password)=>{
       return createUserWithEmailAndPassword(auth, email, password)
    }
    const LoginUser=(email, password)=>{
        return signInWithEmailAndPassword(auth, email, password)
    }
    const authInfo={
     createSignUp,
     LoginUser
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default Authprovider;