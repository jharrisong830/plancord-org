export interface NavPage {
    path: string;
    title: string;
}

export const navPages: Array<NavPage> = [
    {
        path: "https://jhg.app/projects",
        title: "Projects"
    },
    {
        path: "https://jhg.app/music",
        title: "Music"
    }
];

export const allPages: Array<NavPage> = [
    {
        path: "https://jhg.app",
        title: "Home"
    }
].concat(navPages);
