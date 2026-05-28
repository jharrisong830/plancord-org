import { type SetAuthStateFunctionHeader } from "@/contexts/FirebaseAuthContext";
import { app } from "@/firebase/configuration";
import {
    getAuth,
    onAuthStateChanged,
    setPersistence,
    browserSessionPersistence,
    signOut,
    signInWithEmailAndPassword,
    type Auth
} from "firebase/auth";

/** creates a new Auth instance with session persistence, updates application state so it can be used with context provider throughout the entire application */
const setupAuth = async (
    setAuthState: SetAuthStateFunctionHeader
): Promise<void> => {
    const auth = getAuth(app);
    await setPersistence(auth, browserSessionPersistence);
    onAuthStateChanged(auth, (user) => {
        // add an observer to change state when user logs in or out
        setAuthState({ auth, isAuth: user !== null }); // true if logged in, false if not
    });

    setAuthState({ auth, isAuth: auth.currentUser !== null }); // set the initial state when called
};

export const signInUser = async (
    auth: Auth,
    email: string,
    password: string
): Promise<void> => {
    try {
        await signInWithEmailAndPassword(
            auth,
            email.trim(),
            password.trim()
        );
    } catch (e) {
        console.log("Error in signing in user: ", e);
        throw e;
    }
};

export const signOutUser = async (auth: Auth): Promise<void> => {
    try {
        await signOut(auth);
    } catch (e) {
        console.log("Error in signing out user: ", e);
        throw e;
    }
};

export default setupAuth;
