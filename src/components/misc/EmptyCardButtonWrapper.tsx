import { Link } from "react-router";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";

/**
 * used to align the left edge of the "View Projects" button with the left edge of the buttons inside of ProjectSpotlight -> ProjectCard
 */
export default function EmptyCardButtonWrapper({
    buttonLink,
    buttonText
}: {
    buttonLink: string;
    buttonText: string;
}) {
    return (
        <Card
            variant="outlined"
            sx={{
                bgcolor: "transparent",
                borderColor: "transparent",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                px: 1,
                pb: 2
            }}
        >
            <CardActions sx={{ mt: "auto" }}>
                <Button
                    variant="contained"
                    component={Link}
                    to={buttonLink}
                    sx={{ alignSelf: "flex-start", width: "auto" }}
                >
                    {buttonText}
                </Button>
            </CardActions>
        </Card>
    );
}
