import { useState, useContext } from "react";

import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

import { signInUser } from "@/firebase/auth";
import PageContentSection from "@/components/pages/PageContentSection";
import FirebaseAuthContext from "@/contexts/FirebaseAuthContext";

export default function Login() {
    const { authState } = useContext(FirebaseAuthContext)!;
    const { auth } = authState;
    
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (auth) {
            signInUser(auth, email, password).then(() => console.log("user signed in"));
        }
    };

    return (
        <PageContentSection title="Log in.">
            <Stack spacing={2}>
                <form onSubmit={handleSubmit}>
                    <TextField
                        label="Email"
                        variant="filled"
                        color="secondary"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <TextField
                        label="Password"
                        type="password"
                        variant="filled"
                        color="secondary"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <Button
                        variant="contained"
                        type="submit"
                    >
                        Log in
                    </Button>
                </form>
            </Stack>
        </PageContentSection>
    )
}