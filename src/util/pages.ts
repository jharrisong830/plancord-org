export interface NavPage {
    path: string;
    title: string;
}

export const navPages: Array<NavPage> = [
    {
        path: "/projects",
        title: "Projects"
    },
    {
        path: "/music",
        title: "Music"
    }
];

export const allPages: Array<NavPage> = [
    {
        path: "/",
        title: "Home"
    }
].concat(navPages);
