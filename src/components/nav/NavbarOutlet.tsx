import { useLayoutEffect } from "react";
import { Outlet, useLocation } from "react-router";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";

import Connections from "@/components/nav/Connections";
import Navbar from "@/components/nav/Navbar";
import CustomThemeProvider from "@/components/misc/CustomThemeProvider";

/**
 * outlet that wraps all pages, so that they include the navbar, connections footer, and scroll behavior on navigation
 */
export default function NavbarOutlet() {
    const { pathname } = useLocation();

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
                    <Outlet />
                </Box>
                <Connections />
            </Container>
        </CustomThemeProvider>
    );
}
