import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { createContext, useContext, useState } from 'react';
import { auth } from './setup';

const authCtx = createContext({
    signInWithGoogle: null,
    signOut: null,
    user: null
});

function createAuthProvider() {
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
    const authProvider = createAuthProvider();
    return (
        <authCtx.Provider value={ authProvider } >{ children }</authCtx.Provider>
    );
}