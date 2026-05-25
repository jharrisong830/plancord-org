export interface PlaylistEmbedData {
    pageContentTitle: string;
    pageContnetDescription: string;
    src: string;
}

export const currentFavorites: PlaylistEmbedData = {
    pageContentTitle: "What I'm listening to.",
    pageContnetDescription: "Songs that I currently listen to very frequently. Updated very frequently whenever songs enter/exit my rotation.",
    src: "https://embed.music.apple.com/us/playlist/current-favorites/pl.u-leyl2zYfMVW3VWM"
};

const playlistEmbeds: Array<PlaylistEmbedData> = [
    {
        pageContentTitle: "Current favorites.",
        pageContnetDescription: "",
        src: "https://embed.music.apple.com/us/playlist/current-favorites/pl.u-leyl2zYfMVW3VWM"
    }
].concat(currentFavorites);

export default playlistEmbeds;
