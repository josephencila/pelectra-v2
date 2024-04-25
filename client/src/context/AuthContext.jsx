import { createContext, useEffect, useMemo, useState } from "react";
import PropTypes from "prop-types";
import { toast } from "sonner";
import { Outlet, useNavigate } from "react-router-dom";
import { auth } from "../config/firebaseConfig";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  sendEmailVerification,
  updatePassword,
  updateProfile,
} from "firebase/auth";
const AuthContext = createContext({});

export function AuthContextProvider({ children }) {
  const [authUser, setAuthUser] = useState(null);
  const [isAuth, setIsAuth] = useState(true);
  const [loading, setLoading] = useState(false);
  const [spinner, setSpinner] = useState(true);
  const navigate = useNavigate();

  const signUp = async (fullname, email, password) => {
    setLoading(true);

    try {
      const response = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      await updateProfile(response?.user, {
        displayName: fullname,
      });

      await sendEmailVerification(response?.user);
    } catch (error) {
      let errorMessage = "";
      switch (error.code) {
        case "auth/missing-email":
          errorMessage = `Email is required.`;
          break;
        case "auth/invalid-email":
          errorMessage = `Email must be a valid email address.`;
          break;
        case "auth/missing-password":
          errorMessage = "Password is required.";
          break;
        case "auth/weak-password":
          errorMessage = "Password is weak.";
          break;
        case "auth/email-already-in-use":
          errorMessage = `Failed to sign-up: A user with this email already exists`;
          break;
        case "auth/operation-not-allowed":
          errorMessage = `Failed to sign-up: Internal error occured.`;
          break;
        default:
          errorMessage = error.message;
          break;
      }

      return toast.error(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  const signIn = async (email, password) => {
    setLoading(true);
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/");
    } catch (error) {
      let errorMessage = "";
      switch (error.code) {
        case "auth/invalid-credential":
          errorMessage = "Failed to sign-in: Invalid Credentials.";
          break;
        default:
          errorMessage = error.message;
          break;
      }

      return toast.error(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  const signOut = async () => {
    setLoading(true);
    try {
      await auth.signOut();
      navigate("/sign-in");
    } catch (error) {
      return toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  const resendEmailVerification = async () => {
    try {
      await sendEmailVerification(authUser);
      return toast.success("Account created successfully.");
    } catch (error) {
      return toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user && !user.emailVerified) {
        navigate("/verify");
      }
      console.log(user?.uid);
      setIsAuth(user ? true : false);
      setAuthUser(user);
      setSpinner(false);
    });

    return unsubscribe;
  }, [navigate]);

  const memoizedSpinner = useMemo(() => {
    return spinner ? <div>Loading...</div> : <Outlet />;
  }, [spinner]);

  return (
    <AuthContext.Provider
      value={{
        signUp,
        signIn,
        signOut,
        resendEmailVerification,
        authUser,
        isAuth,
        setIsAuth,
        loading,
      }}
    >
      {children}
      {memoizedSpinner}
    </AuthContext.Provider>
  );
}

export default AuthContext;

AuthContextProvider.propTypes = {
  children: PropTypes.node,
};
