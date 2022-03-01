import React, { useEffect, useState } from "react";
import initAuth from "../firebase/firebase.init";
import {
  getAuth,
  signInWithPopup,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendEmailVerification,
  GoogleAuthProvider,
  GithubAuthProvider,
  FacebookAuthProvider,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";

initAuth();
const useFirebase = () => {
  const auth = getAuth();
  const [user, setUser] = useState([]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [registered, setRegistered] = useState(false);
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();
  const facebookProvider = new FacebookAuthProvider();

  //Create user with Email & Password
  const handleEmailPassSignIn = (e) => {
    e.preventDefault();
    if (!/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/.test(password)) {
      setError(
        "password must be 6 to 20 characters which contain at least one numeric digit, one uppercase and one lowercase letter"
      );
      return;
    }
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        verifyEmail();

        if (user.emailVerified === true) {
          console.log(user);
          setRegistered(true);
        }
      })

      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setError("You are already registered! please SignIN");
      });
  };

  //seding Email Verification
  const verifyEmail = () => {
    sendEmailVerification(auth.currentUser).then(() => {
      // Email verification sent!
    });
  };

  //Login with Email & Password
  const handleLogin = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        setUser(user);
        console.log(user);
        console.log("loggedin user: ", user.email);
        setSuccess("Successfully LoggedIN");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setSuccess("");
        setError(errorMessage);
      });
  };

  //catch emailId from Input field
  const handleEmail = (e) => {
    let emailInput = e.target.value;
    setEmail(emailInput);
  };

  //catch password from input field
  const handlePass = (e) => {
    let passInput = e.target.value;
    setPassword(passInput);
  };

  //SignIn with Google
  const handleGoogleSignIn = () => {
    return signInWithPopup(auth, googleProvider);
  };

  //signIn with Github
  const handleGithubSignIn = () => {
    signInWithPopup(auth, githubProvider)
      .then((result) => {
        const user = result.user;
        setUser(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setError(errorMessage);
      });
  };

  //signIn with Facebook
  const handleFacebookSignin = () => {
    signInWithPopup(auth, facebookProvider)
      .then((result) => {
        const user = result.user;
        setUser(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setError(errorMessage);
      });
  };

  //SignOut
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        setUser({});
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  //saves user state globally/ observes user's state
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // const uid = user.uid;
        // console.log("inside changed", user);
        setUser(user);
      } else {
        setUser({});
      }
    });
    return () => unsubscribe;
  }, []);

  return {
    user,
    handleGoogleSignIn,
    handleEmailPassSignIn,
    handleGithubSignIn,
    handleFacebookSignin,
    handleLogin,
    handleEmail,
    handlePass,
    handleSignOut,
    registered,
    error,
    success,
  };
};

export default useFirebase;
