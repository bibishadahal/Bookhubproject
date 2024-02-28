import { initializeApp } from "firebase/app"
import { getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut } from "firebase/auth"

import { getFirestore, collection, addDoc, getDocs, query, where } from "firebase/firestore"


// Your web app's Firebase configurationnpm
const firebaseConfig = {
    apiKey: "AIzaSyCw8WyzmmidqTd77HWd5ERHgonAl4ps0jQ",
    authDomain: "bookshop-b1f5d.firebaseapp.com",
    projectId: "bookshop-b1f5d",
    storageBucket: "bookshop-b1f5d.appspot.com",
    messagingSenderId: "834541215917",
    appId: "1:834541215917:web:d7c450de9ce95f3dc26624",
    measurementId: "G-R1Q0XPF3P1"
  };


  const app = initializeApp(firebaseConfig)
  const auth = getAuth()
  const db = getFirestore(app)
  
  const registerUser = (email, password) => createUserWithEmailAndPassword(auth, email, password)
  
  const loginUser = (email, password) => signInWithEmailAndPassword(auth, email, password)
  
  const logOut = () => signOut(auth)
  
  const addData = (tableName, data) => addDoc(collection(db, tableName), data)
  
  const getDataWhere = (tableName, column, operator, value) => getDocs(query(collection(db, tableName), where(column, operator, value)))
  
  export {registerUser, loginUser, logOut, addData, getDataWhere}
  
  export default app