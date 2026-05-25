import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import { type ProjectContent } from "@/util/projects";

/**
 * card to display project details
 */
export default function ProjectCard({ project }: { project: ProjectContent }) {
    return (
        <Card
            variant="outlined"
            sx={{
                color: "primary.contrastText",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                px: 1,
                pb: 2
            }}
        >
            <CardContent sx={{ flex: 1 }}>
                <Typography variant="h5" component="div">
                    {project.title}
                </Typography>
                <Typography sx={{ color: "text.secondary", mb: 1.5 }}>
                    {project.subtitle}
                </Typography>
                <Typography variant="body2">{project.description}</Typography>
            </CardContent>
            <CardActions sx={{ mt: "auto" }}>
                <Button
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    variant="contained"
                >
                    {project.linkText}
                </Button>
            </CardActions>
        </Card>
    );
}
