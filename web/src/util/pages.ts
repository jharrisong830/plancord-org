export interface NavPage {
    path: string;
    title: string;
}

export const navPages: Array<NavPage> = [
    {
        path: "https://jhg.app",
        title: "jhg.app"
    }
];

export const allPages: Array<NavPage> = [
    {
        path: "/",
        title: "Home"
    }
].concat(navPages);
