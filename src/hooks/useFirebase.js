import { useEffect, useState } from "react";
import initAuth from "../firebase/firebase.init";
import {
  getAuth,
  signInWithPopup,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendEmailVerification,
  updateProfile,
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
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [registered, setRegistered] = useState(false);
  const [products, setProducts] = useState([]);
  const [info, setInfo] = useState([]);
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();
  const facebookProvider = new FacebookAuthProvider();

  //Create user with Email & Password
  const signInWithEmailPassword = (
    email,
    password,
    name,
    navigate,
    location
  ) => {
    setLoading(true);
    if (!/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/.test(password)) {
      setError(
        "password must be 6 to 20 characters which contain at least one numeric digit, one uppercase and one lowercase letter"
      );
      return;
    }
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        //
        const newUser = { email, displayName: name };
        setUser(newUser);
        updateProfile(auth.currentUser, {
          displayName: name,
        })
          .then(() => {
            // Profile updated!
            // ...
          })
          .catch((error) => {
            // An error occurred
            // ...
          });
        navigate(location);
      })

      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setError("You are already registered! please SignIN");
      })
      .finally(() => setLoading(false));
  };

  //seding Email Verification
  const verifyEmail = () => {
    sendEmailVerification(auth.currentUser).then(() => {
      // Email verification sent!
    });
  };

  //Login with Email & Password
  const loginUser = (email, password, location, navigate) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // const user = userCredential.user;
        // setUser(user);
        // console.log(user);
        // console.log("loggedin user: ", user.email);
        const destination = location?.state?.from || "/";
        navigate(destination);
        setSuccess("Successfully LoggedIN");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setSuccess("");
        setError(errorMessage);
      });
  };

  //SignIn with Google
  const signInWithGoogle = (location, navigate) => {
    setLoading(true);
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        // const user = result.user;
        // setRegistered(true);
        const destination = location?.state?.from || "/";
        navigate(destination);
        // setUrl(redirect_url);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // setError(errorMessage);
      })
      .finally(() => setLoading(false));
  };

  //signIn with Github
  const signInWithGithub = (location, navigate) => {
    signInWithPopup(auth, githubProvider)
      .then((result) => {
        // const user = result.user;
        // setUser(user);
        const destination = location?.state?.from || "/";
        navigate(destination);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setError(errorMessage);
      });
  };

  //signIn with Facebook
  const signInWithFacebook = (location, navigate) => {
    signInWithPopup(auth, facebookProvider)
      .then((result) => {
        // const user = result.user;
        // setUser(user);
        const destination = location?.state?.from || "/";
        navigate(destination);
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
      setLoading(false);
    });
    return () => unsubscribe;
  }, []);

  //loads all the products
  useEffect(() => {
    let isMount = true;
    fetch("https://glacial-earth-66001.herokuapp.com/products")
      .then((res) => res.json())
      .then((data) => {
        if (isMount) {
          setProducts(data);
        }
      });
    return () => {
      isMount = false;
    };
  }, [user.email]);

  //loads all the reviews
  useEffect(() => {
    fetch("https://glacial-earth-66001.herokuapp.com/reviews")
      .then((res) => res.json())
      .then((data) => setInfo(data));
  }, []);

  return {
    user,
    signInWithGoogle,
    signInWithEmailPassword,
    signInWithGithub,
    signInWithFacebook,
    loginUser,
    handleSignOut,
    registered,
    error,
    success,
    loading,
    info,
    products,
  };
};

export default useFirebase;
