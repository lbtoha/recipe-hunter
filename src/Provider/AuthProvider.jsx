import React, { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();
export const AuthContext = createContext(null);

const AuthComponent = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loader, setLoader] = useState(true);

  const signUp = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
    setLoader(false);
  };

  const signIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
    setLoader(false);
  };
  const signInWithGoogle = () => {
    return signInWithPopup(auth, googleProvider);
    setLoader(false);
  };

  const signInWithGitHub = () => {
    return signInWithPopup(auth, githubProvider);
    setLoader(false);
  };

  const logOut = () => {
    return signOut(auth);
  };

  const updateUser = (displayName, photoURL) => {
    return updateProfile(auth.currentUser, { displayName, photoURL });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoader(false);
    });
    return () => {
      return unsubscribe();
    };
  }, []);

  const authInfo = {
    user,
    setUser,
    signUp,
    signIn,
    signInWithGoogle,
    signInWithGitHub,
    loader,
    logOut,
    updateUser,
  };
  return <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>;
};

export default AuthComponent;
