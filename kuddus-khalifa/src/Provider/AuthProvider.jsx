import React, { useEffect, useState } from 'react';
import { createContext } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../firebase/firebase.config';

export const AuthContext = createContext(null);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider;

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [cardData, setCardData] = useState([]);

    const login = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const loginWithGoogle = () => {
        return signInWithPopup(auth, googleProvider);
    }

    useEffect(()=> {
        fetch('/data.json')
        .then(response => response.json())
        .then(data => setCardData(data))
    }, [])

    // observer user auth state
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser)=> {
            setUser(currentUser);
            setLoading(false);
        })
        return () => {
            return unsubscribe();
        }
    }, [])

    const logOut = () => {
        signOut(auth);
    }



    const authData = {
        user,
        login,
        createUser, 
        loginWithGoogle,
        cardData,
        loading,
        logOut,
    }
    
    return (
        <AuthContext.Provider value={authData}>
            {children}
        </AuthContext.Provider >
    );
};

export default AuthProvider;