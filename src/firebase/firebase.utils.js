import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const config  = {
    apiKey: "AIzaSyBBrjDGIy1-HhBLT1hZZkIiGQSyX4ECGIE",
    authDomain: "crown-db-7944d.firebaseapp.com",
    databaseURL: "https://crown-db-7944d.firebaseio.com",
    projectId: "crown-db-7944d",
    storageBucket: "crown-db-7944d.appspot.com",
    messagingSenderId: "601529819547",
    appId: "1:601529819547:web:65215e247cce410e7c813e"
    
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

