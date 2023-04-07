import  firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';



const firebaseConfig = {
    apiKey: "AIzaSyDVe16iVEFK3s-mc3RfV7PGeIFV0q30hHg",
    authDomain: "linkedin-clone-ad303.firebaseapp.com",
    projectId: "linkedin-clone-ad303",
    storageBucket: "linkedin-clone-ad303.appspot.com",
    messagingSenderId: "334597455797",
    appId: "1:334597455797:web:f4d5c19086da859f2e63fc"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
