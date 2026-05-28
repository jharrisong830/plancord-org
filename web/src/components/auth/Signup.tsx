import { useState, useContext } from "react";

import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

import { signInUser } from "@/firebase/auth";
import PageContentSection from "@/components/pages/PageContentSection";
import FirebaseAuthContext from "@/contexts/FirebaseAuthContext";

export default function Signup() {
    const { authState } = useContext(FirebaseAuthContext)!;
    const { auth } = authState;
    
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [_registrationId, setRegistrationId] = useState("");

    const handleSubmit = () => {
        if (auth) {
            signInUser(auth, email, password).then(() => console.log("user signed in"));
        }
    };

    return (
        <PageContentSection title="Sign Up.">
            <Stack spacing={2}>
                <TextField
                    label="Email"
                    variant="filled"
                    color="secondary"
                    onChange={(e) => setEmail(e.target.value)}
                />
                <TextField
                    label="Create a Password"
                    type="password"
                    variant="filled"
                    color="secondary"
                    onChange={(e) => setPassword(e.target.value)}
                />
                <TextField
                    label="Registration ID"
                    variant="filled"
                    color="secondary"
                    onChange={(e) => setRegistrationId(e.target.value)}
                />
                <Button
                    variant="contained"
                    onClick={handleSubmit}
                >
                    Register
                </Button>
            </Stack>
        </PageContentSection>
    )
}