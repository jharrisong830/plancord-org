import PageHeader from "@/components/pages/PageHeader";
import PageContentSection from "@/components/pages/PageContentSection";
import PlaylistEmbed from "@/components/misc/PlaylistEmbed";

import playlistEmbeds from "@/util/music";

/**
 * showcase for my (questionable) music taste
 */
export default function Music() {
    return (
        <main>
            <PageHeader
                title="Music."
                subtitle="More of what I'm listening to."
            />

            {playlistEmbeds.map((playlist, idx) => (
                <PageContentSection
                    key={playlist.pageContentTitle}
                    title={playlist.pageContentTitle}
                    rowReverse={idx % 2 === 1}
                    description="Songs that I currently listen to very frequently. Updated very frequently whenever songs enter/exit my rotation."
                >
                    <PlaylistEmbed src={playlist.src} />
                </PageContentSection>
            ))}
        </main>
    );
}
