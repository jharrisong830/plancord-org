import Typography from "@mui/material/Typography";

import ProjectSpotlight from "@/components/projects/ProjectSpotlight";
import PlaylistEmbed from "@/components/misc/PlaylistEmbed";
import PageHeader from "@/components/pages/PageHeader";
import PageContentSection from "@/components/pages/PageContentSection";
import EmptyCardButtonWrapper from "@/components/misc/EmptyCardButtonWrapper";

import { currentFavorites } from "@/util/music";

/**
 * home page that renders at domain root
 */
export default function Home() {
    return (
        <main>
            <PageHeader
                title="Hi! I'm John."
                subtitle="Welcome to my home on the web."
                shouldEmphasizeTitle
            />

            <PageContentSection title="About me.">
                <Typography variant="body1" component="p">
                    I'm John! I'm a 4/4 Computer Science major at Stevens
                    Institute of Technology in Hoboken, NJ.
                </Typography>

                <Typography variant="body1" component="p">
                    Programming is one of my greatest passions; I am always
                    looking for ways to further develop my skills and branch out
                    of my comfort zone. My main area of interest is currently
                    mobile applications development for iOS with SwiftUI. I am
                    also interested in systems programming and web programming.
                </Typography>

                <Typography variant="body1" component="p">
                    My coursework, self-study, and work experience has helped me
                    develop a broad skillset. My coursework has included data
                    structures and algorithms, systems, computer architecture,
                    and PL theory. I was most recently a Course Assistant for CS
                    496 (Principles of Programming Languages) at Stevens
                    Institute of Technology. You can find more details about my
                    coursework and teaching experience on my LinkedIn page.
                </Typography>

                <Typography variant="body1" component="p">
                    I have always loved learning, and always will. I am
                    confident that this will drive me to learn and adapt to as
                    many new technologies as I can. Throughout my career, it is
                    my goal to always continue learning and innovating.
                </Typography>
            </PageContentSection>

            <PageContentSection title="Project Spotlight." rowReverse>
                <ProjectSpotlight />
                <EmptyCardButtonWrapper
                    buttonLink="/projects"
                    buttonText="View Projects"
                />
            </PageContentSection>

            <PageContentSection title={currentFavorites.pageContentTitle}>
                <PlaylistEmbed src={currentFavorites.src} />
            </PageContentSection>
        </main>
    );
}
