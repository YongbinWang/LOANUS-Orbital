import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { createContext, useContext, useEffect, useState } from 'react';
import { auth } from './setup';

const authCtx = createContext({
    signInWithGoogle: null,
    signOut: null,
    user: null
});

function useAuthProvider() {
    const [ user, setUser ] = useState(null);
    const googleAuthProvider = new GoogleAuthProvider();

    const signInWithGoogle = () => {
        return signInWithPopup(auth, googleAuthProvider);
    };

    const signOut = () => {
        return auth.signOut().then(() => {
            setUser(false);
        });
    };

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
          if (user) {
            setUser(user);
          } else {
            setUser(false);
          }
        });
    
        // Cleanup subscription on unmount
        return () => unsubscribe();
    }, []);

    return {
        signInWithGoogle,
        signOut,
        user
    };
}

export const useAuth = () => {
    return useContext(authCtx);
};

export function AuthProvider(props) {
    const children = props.children;
    const authProvider = useAuthProvider();
    return (
        <authCtx.Provider value={ authProvider } >{ children }</authCtx.Provider>
    );
}