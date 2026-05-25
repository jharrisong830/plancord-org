/**
 * iframe for current favorites playlist embed
 */
export default function CurrentFavoriteMusic() {
    return (
        <iframe
            allow="autoplay *; encrypted-media *; fullscreen *; clipboard-write"
            height="450"
            style={{
                width: "100%",
                overflow: "hidden",
                borderRadius: "10px",
                border: "none"
            }}
            sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation"
            src="https://embed.music.apple.com/us/playlist/current-favorites/pl.u-leyl2zYfMVW3VWM"
        ></iframe>
    );
}
