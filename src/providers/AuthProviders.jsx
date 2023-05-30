import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signOut, signInWithEmailAndPassword } from 'firebase/auth';
import app from '../firebase/firebase.config';
import { createContext, useEffect, useState } from 'react';

const auth = getAuth(app)
export const AuthContext = createContext(null);
const AuthProviders = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const emailSignUp = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password);
  }
  const emailSignIn = (email, password) => {
    setLoading(true)
    return signInWithEmailAndPassword (auth, email, password)
  }
  const logOut = () => {
    setLoading(true)
    signOut(auth);
  }

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, currentUser=> {
  setUser(currentUser);
  setLoading(false);
    })
    return () => {
      return unSubscribe();
    }
    
  },[])

  const authInfo = {
    user,
    setUser,
    loading,
    emailSignUp,
    emailSignIn,
    logOut
  };
  return <AuthContext.Provider value={authInfo}>
    {children}
  </AuthContext.Provider>;
};

export default AuthProviders;
