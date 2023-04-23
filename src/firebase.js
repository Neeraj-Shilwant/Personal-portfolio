import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { getAuth} from 'firebase/auth'
const firebaseConfig = {
    apiKey: "AIzaSyCa4QSeFrUIZ9-g7UPPyT__ZVdx_7ZSuV4",
    authDomain: "personal-portfolio-neera-a416f.firebaseapp.com",
    projectId: "personal-portfolio-neera-a416f",
    storageBucket: "personal-portfolio-neera-a416f.appspot.com",
    messagingSenderId: "881453787184",
    appId: "1:881453787184:web:5d5c6556acdc714054a5f5"
};

// Use this to initialize the firebase App
const firebaseApp =firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
// const auth = firebase.auth();
const auth = getAuth();
export { db,auth };