/**
 * iframe for playlist embed
 */
export default function PlaylistEmbed({ src }: { src: string }) {
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
            src={src}
        />
    );
}
