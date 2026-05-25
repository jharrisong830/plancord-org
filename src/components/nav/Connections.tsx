import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";

import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

/**
 * connections buttons to be displayed at the footer of every page
 */
export default function Connections() {
    return (
        <Grid container sx={{ p: 4 }}>
            <Grid
                size={12}
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    mb: 2
                }}
            >
                <Typography
                    variant="h6"
                    component="h6"
                    sx={{ fontWeight: 600 }}
                >
                    Connect with me!
                </Typography>
            </Grid>

            <Grid
                container
                size={12}
                spacing={2}
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center"
                }}
            >
                <Grid
                    size="auto"
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center"
                    }}
                >
                    <Button
                        href="https://github.com/jharrisong830"
                        target="_blank"
                        rel="noreferrer"
                        variant="contained"
                        size="large"
                        startIcon={<GitHubIcon />}
                    >
                        GitHub
                    </Button>
                </Grid>

                <Grid
                    size="auto"
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center"
                    }}
                >
                    <Button
                        href="mailto:john@jhg.app"
                        target="_blank"
                        rel="noreferrer"
                        variant="contained"
                        size="large"
                        startIcon={<EmailIcon />}
                    >
                        Email
                    </Button>
                </Grid>

                <Grid
                    size="auto"
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center"
                    }}
                >
                    <Button
                        href="https://linkedin.com/in/johngraham830"
                        target="_blank"
                        rel="noreferrer"
                        variant="contained"
                        size="large"
                        startIcon={<LinkedInIcon />}
                    >
                        LinkedIn
                    </Button>
                </Grid>
            </Grid>
        </Grid>
    );
}
