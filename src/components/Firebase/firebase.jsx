import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const config = {
    apiKey: "AIzaSyAIWwx0_x2kFlu_9ZjW696CaVn9FMYYUBw",
    authDomain: "tms-t0-5171e.firebaseapp.com",
    projectId: "tms-t0-5171e",
    storageBucket: "tms-t0-5171e.appspot.com",
    messagingSenderId: "474344554775",
    appId: "1:474344554775:web:a758a4e6c971d19edbf752",
    measurementId: "G-RHGQC67MQC"

};

class Firebase {
    constructor() {
        app.initializeApp(config);
        this.auth= app.auth();
        this.db=app.firestore();

    }
    
    signupUser = (email, password) => 
    this.auth.createUserWithEmailAndPassword(email, password);
    

    loginUser = (email, password) => 
        this.auth.signInWithEmailAndPassword(email, password);
        
    signoutUser = () => this.auth.signOut();    

// récupérer le mot de passe
    passwordReset = email => this.auth.sendPasswordResetEmail(email);

    user = uid =>   this.db.doc(`users/${uid}`);
    

}

export default Firebase;

