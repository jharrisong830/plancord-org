import { Link, useLocation } from "react-router";

import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import PageHeader from "@//components/pages/PageHeader";
import PageContentSection from "@//components/pages/PageContentSection";

/**
 * error page that loads for routes that are not matched
 */
export default function Error() {
    const location = useLocation();

    return (
        <main>
            <PageHeader
                title="Error."
                titleProps={{ color: "error" }}
                subtitle="Something went wrong when trying to load this page."
            />

            <PageContentSection
                title="Page not found."
                titleProps={{ color: "error" }}
            >
                <Typography variant="body1" component="p">
                    The page <code>{location.pathname}</code> doesn't exist. If
                    you think this is an issue, let me know!
                </Typography>
                <Button
                    variant="contained"
                    component={Link}
                    to="/"
                    sx={{ alignSelf: "flex-start", width: "auto" }}
                >
                    Back to Home
                </Button>
            </PageContentSection>
        </main>
    );
}
