import { createContext, useContext, useEffect, useState } from "react";
import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
  signOut
} from "firebase/auth";

const FirebaseContext = createContext(null);

const firebaseConfig = {
  apiKey: "AIzaSyAzpCvqEwNP5NuaKHYEs0H5FYAu4m08YN0",
  authDomain: "app-1096d.firebaseapp.com",
  projectId: "app-1096d",
  storageBucket: "app-1096d.firebasestorage.app",
  messagingSenderId: "1081866559135",
  appId: "1:1081866559135:web:179378b70a69e66298ccaa",
  databaseURL: "https://app-1096d-default-rtdb.firebaseio.com",
};

export const useFirebase = () => useContext(FirebaseContext);

const firebaseApp = initializeApp(firebaseConfig);
const firebaseAuth = getAuth(firebaseApp);
const googleProvider = new GoogleAuthProvider();

export const FirebaseProvider = (props) => {
  const [user, setUser] = useState(null);
  useEffect(() => {
    onAuthStateChanged(firebaseAuth, (user) => {
      //console.log("user...", user);
      if (user) setUser(user);
      else setUser(null);
    });
  }, []);

  const createUser = (name,email, password) => {
    return createUserWithEmailAndPassword(firebaseAuth,name, email, password);
  };

  const SigninUser = (email, password) => {
    return signInWithEmailAndPassword(firebaseAuth, email, password);
  };

  const signInwithGoogle = () => signInWithPopup(firebaseAuth, googleProvider);

  const Logout = () => signOut(firebaseAuth)

  const isLoggedIn = user ? true :false

  return (
    <FirebaseContext.Provider
      value={{ createUser, SigninUser, signInwithGoogle,isLoggedIn,user,Logout }}
    >
      {props.children}
    </FirebaseContext.Provider>
  );
};

export default FirebaseContext;

