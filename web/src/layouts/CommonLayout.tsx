import { useState, useEffect, useLayoutEffect } from "react";
import { Outlet, useLocation } from "react-router";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";

import Connections from "@/components/nav/Connections";
import Navbar from "@/components/nav/Navbar";
import CustomThemeProvider from "@/components/misc/CustomThemeProvider";

import FirebaseAuthContext, { emptyFirebaseAuthContextValues } from "@/contexts/FirebaseAuthContext";
import setupAuth from "@/firebase/auth";

/**
 * wraps all pages to include navbar, connections, custom theme, and auth provider
 */
export default function CommonLayout() {
    const { pathname } = useLocation();

    const [authState, setAuthState] = useState(emptyFirebaseAuthContextValues);

    useEffect(() => {
        setupAuth(setAuthState).then(() => console.log("auth setup complete"));
    }, []);

    useLayoutEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return (
        <CustomThemeProvider>
            <CssBaseline />
            <Container
                disableGutters
                maxWidth={false}
                sx={{
                    color: "primary.contrastText",
                    backgroundColor: "primary.main",
                    minHeight: "100vh",
                    display: "flex",
                    flexDirection: "column"
                }}
            >
                <Navbar />
                <Box sx={{ flex: 1 }}>
                    <FirebaseAuthContext.Provider value={{ authState, setAuthState }}>
                        <Outlet />
                    </FirebaseAuthContext.Provider>
                </Box>
                <Connections />
            </Container>
        </CustomThemeProvider>
    );
}
