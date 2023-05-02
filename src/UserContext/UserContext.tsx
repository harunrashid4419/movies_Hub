import React, { createContext, useEffect, useState } from "react";
import app from "../Firebase/Firebase.config";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";

const auth = getAuth(app);
export const AuthContext = createContext({});

const UserContext = ({ children }: any) => {
    const [loader, setLoader] = useState(false);
    const [user, setUser] = useState(null);

    // create user with email and password
    const createUser = (email: string, password: any) =>{
        setLoader(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };

    // user login with email password
    const login = (email: string, password: any) =>{
        setLoader(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    // update profile name
    // const profileUpdated = (name: string) =>{
    //     return updateProfile(auth.currentUser, name)
    // }

    // log out
    const logOut = () =>{
        setLoader(true);
        return signOut(auth);
    }

    // save user
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser: any) => {
          setLoader(false);
          setUser(currentUser);
        });
        return () => {
          unSubscribe();
        };
      }, []);
    


  const authInfo = {createUser, loader, login, user, logOut };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default UserContext;
