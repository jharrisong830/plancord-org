import { Link } from "react-router";

import Button from "@mui/material/Button";

import PageHeader from "@/components/pages/PageHeader";

/**
 * landing page that renders at domain root when not logged in
 */
export default function Landing() {
    return (
        <main>
            <PageHeader
                title="Plancord"
                subtitle="Welcome to plancord.org"
                shouldEmphasizeTitle
            />

            <Button variant="contained" component={Link} to="/login">
                Login
            </Button>
        </main>
    );
}
