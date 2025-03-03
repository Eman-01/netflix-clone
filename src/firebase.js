
import { initializeApp } from "firebase/app";
import {createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut} from 'firebase/auth';
import {addDoc, collection, getFirestore} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAeer7cAlRvaripwiMI8DLScfkfPgBCDlU",
  authDomain: "netflix-clone-c1ae2.firebaseapp.com",
  projectId: "netflix-clone-c1ae2",
  storageBucket: "netflix-clone-c1ae2.firebasestorage.app",
  messagingSenderId: "129009693909",
  appId: "1:129009693909:web:1189bbaa4319c83c3a5e5c"
};

const app = initializeApp(firebaseConfig);
const auth= getAuth(app)
const db = getFirestore(app)

const signup = async (name, email, password)=>{
    try {
        const res = await createUserWithEmailAndPassword(auth, email, password)
        const user = res.user
        await addDoc(collection(db, 'user'), {
            uid:user.uid,
            name,
            authProvider:'local',
            email,

        })
    } catch (error) {
        console.log(error);
        alert(error)
    }
}

const login = async (email, password)=>{
    try {
        await signInWithEmailAndPassword(auth, email, password)
    } catch (error) {
        console.log(error);
        alert(error);
    }
}

const logout = ()=>{
    signOut(auth);
}

export {auth, db, login, signup, logout}