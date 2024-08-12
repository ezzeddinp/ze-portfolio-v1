export interface ImageData {
    src: string;
    width: number;
    height: number;
    alt: string;
    title: string;
    description: string;
    link?: string;
}

export const images: ImageData[] = [
    {
        src: "/IMG_4899.jpg",
        width: 300,
        height: 300,
        alt: "Alternative text for the image",
        title: "Title 1",
        description: "Description"
    },
    {
        src: "/forumchat.png",
        width: 300,
        height: 300,
        alt: "Alternative text for the image",
        title: "Simple Forum Chat",
        description: "Description",
        link: "https://chat-delta-ruby-13.vercel.app/"
    },
    {
        src: "/ribet.jpg",
        width: 300,
        height: 300,
        alt: "image",
        title: "Notes App",
        description: "Build with React Native",
        link: "https://github.com/ezzeddinp/notes-app-homepage"
    },
    {
        src: "/IMG_4901.jpg",
        width: 300,
        height: 300,
        alt: "image",
        title: "Title 3",
        description: "Description"
    }
];
