import { createContext, useEffect } from "react";
export const AuthContext = createContext(null);
const provider = new GoogleAuthProvider();
import { useState } from "react";
import {createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut} from 'firebase/auth'
import { signInWithEmailAndPassword } from "firebase/auth";
import auth from "../../firebase/firebase.config";


const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)
    

    const createUser = (email, password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
        
    }

    const createSignIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
        
    }

    const signInWithGoogle = () =>{
        setLoading(true)
       return signInWithPopup(auth, provider)
    }


    const logOut = () => {
        setLoading(true)
        return signOut(auth)
        
     }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged (auth, currentUser => {
                setUser(currentUser)
                console.log('observing current user inside useEffect of auth provider', currentUser)
                setLoading(false)
        }) 
        return () => {
            unSubscribe()
        }
    }, [])


   

    const authInfo = { user, createUser, createSignIn, logOut, loading, signInWithGoogle }
    

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;