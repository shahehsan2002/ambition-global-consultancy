import { createContext, useEffect, useState } from 'react';
import {
    getAuth, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, updateProfile, GoogleAuthProvider, signInWithPopup
} from "firebase/auth";
import { app } from '../firebase/firebase.config';
import UseAxiosPublic from '../hooks/useAxiosPublic';

export const AuthContext = createContext(null);

const auth = getAuth(app);

const AuthProviders = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const googleProvider = new GoogleAuthProvider();
     const axiosPublic= UseAxiosPublic();

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)

    }

    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    const googleSignIn = () => {
        setLoading(true);
        return signInWithPopup(auth,googleProvider);
    }

    const logOut = () => {
        setLoading(true);
        return signOut(auth)
    }

    const updateUserProfile = (name, photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name,
            photo: photo
        });
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            if(currentUser){
                // get token and store client
                const userInfo = {email: currentUser.email};
                axiosPublic.post('jwt',userInfo)
                .then(res =>{
                    if(res.data.token){
                        localStorage.setItem('access-token',res.data.token);
                    }
                })
            }
            else{
                // do something
                localStorage.removeItem('access-token');
            }
            setLoading(false); 
            
        });

        // Cleanup the subscription when the component unmounts
        return () => {
            return unsubscribe();
        }
    }, []);

    const authInfo = {
        user,
        loading,
        createUser,
        googleSignIn,
        signIn,
        logOut,
        updateUserProfile,

    };

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;
