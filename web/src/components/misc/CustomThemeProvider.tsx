import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
    palette: {
        text: {
            secondary: "#DEE2E6"
        },
        background: {
            default: "#253863"
        },
        primary: {
            main: "#253863"
        },
        secondary: {
            main: "#63CFAF"
        },
        success: {
            main: "#04724D"
        },
        error: {
            main: "#D35269"
        },
        info: {
            main: "#3C91E6"
        },
        warning: {
            main: "#FFB30F"
        }
    },
    typography: {
        fontFamily: [
            "-apple-system",
            "BlinkMacSystemFont",
            "Segoe UI",
            "Roboto",
            "Oxygen",
            "Ubuntu",
            "Cantarell",
            "Fira Sans",
            "Droid Sans",
            "Helvetica Neue",
            "sans-serif"
        ].join(",")
    },
    components: {
        MuiButton: {
            defaultProps: {
                disableElevation: true,
                color: "secondary"
            },
            styleOverrides: {
                root: {
                    borderRadius: 4
                }
            }
        },
        MuiCard: {
            styleOverrides: {
                root: {
                    borderRadius: 10,
                    background: "#212529"
                }
            }
        }
    }
});

/**
 * theme provider for the entire app (provides color scheme and some component style overrides)
 */
export default function CustomThemeProvider({
    children
}: {
    children: React.ReactNode;
}) {
    return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
