import { useContext } from "react";

import Button from "@mui/material/Button";

import PageHeader from "@/components/pages/PageHeader";
import FirebaseAuthContext from "@/contexts/FirebaseAuthContext";
import Landing from "@/pages/Landing";

import { signOutUser } from "@/firebase/auth";

/**
 * home page that renders at domain root
 */
export default function Home() {
    const { authState } = useContext(FirebaseAuthContext)!;
    const { auth, isAuth } = authState;

    const handleSignOut = () => {
        if (auth) {
            signOutUser(auth).then(() => console.log("user signed out"));
        }
    };

    if (isAuth) {
        return (
            <main>
                <PageHeader
                    title="Plancord"
                    subtitle="Welcome back to plancord.org"
                    shouldEmphasizeTitle
                />
                <h1>Hello, {auth?.currentUser?.email || "world!"}</h1>
                <Button variant="contained" onClick={handleSignOut}>
                    Sign out
                </Button>
            </main>
        );
    }

    return <Landing />;
}
