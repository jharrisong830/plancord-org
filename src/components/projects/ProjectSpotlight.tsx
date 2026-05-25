import Grid from "@mui/material/Grid";

import ProjectCard from "@/components/projects/ProjectCard";
import projects from "@/util/projects";

/**
 * a selection of the two most recent projects to be displayed as cards on the home page
 */
export default function ProjectSpotlight() {
    return (
        <Grid container spacing={2}>
            {projects.slice(0, 2).map((project) => (
                <Grid key={project.title} size={{ xs: 12, md: 6 }}>
                    <ProjectCard project={project} />
                </Grid>
            ))}
        </Grid>
    );
}
