import { initializeApp } from 'firebase/app';

const firebaseConfig = {
    apiKey: "AIzaSyD8KqFXSRWUb5ux0tfmFj8WdBAL2KWMsYU",
    authDomain: "loanus-orbital.firebaseapp.com",
    projectId: "loanus-orbital",
    storageBucket: "loanus-orbital.appspot.com",
    messagingSenderId: "494853607492",
    appId: "1:494853607492:web:93d97cbb9ff18425ebac11",
    measurementId: "G-57EK5B21ZZ"
};

export const app = initializeApp(firebaseConfig);