import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from "../firebase/firebase.config";
import axios from "axios";



export const AuthContext = createContext(null);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const logIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const logOut = () => {
        return signOut(auth);
    }

    const updateUserProfile = (name, imgURL) => {
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: imgURL
        })
    }

    const googleLogin = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    };

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            // get add set token
            if (currentUser) {
                axios.post('http://localhost:5000/jwt', {
                    email: currentUser.email
                })
                .then(data => {
                    localStorage.setItem('access_token', data.data.token);
                    setLoading(false);
                })
            }
            else{
                localStorage.removeItem('access_token');
            }
        })

        return () => {
            return unsubscribe()
        }

    }, [])

    const authInfo = {
        createUser,
        logIn,
        logOut,
        user,
        loading,
        googleLogin,
        updateUserProfile,
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;