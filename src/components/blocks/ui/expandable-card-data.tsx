import { SiGithub } from "react-icons/si";

export const cards = [
  {
    description: "Fullstack Project",
    title: "E-commerce Store",
    src: "https://res.cloudinary.com/dm09trh2m/image/upload/v1723334003/ecommerce-store-highlight/apakek_bvxdig.png",
    second: "https://res.cloudinary.com/dm09trh2m/image/upload/v1723337070/ecommerce-store-highlight/dark_banner.png",
    third: "https://res.cloudinary.com/dm09trh2m/image/upload/v1723334002/ecommerce-store-highlight/small-view_hrva67.png",
    fourth: "https://res.cloudinary.com/dm09trh2m/image/upload/v1723334001/ecommerce-store-highlight/cart-checkout_frzppi.png",
    fifth: "https://res.cloudinary.com/dm09trh2m/image/upload/v1723334001/ecommerce-store-highlight/darkmode_f39rix.png",
    sixth: "https://res.cloudinary.com/dm09trh2m/image/upload/v1723337070/ecommerce-store-highlight/detail_product.png",
    ctaText: <SiGithub size={20} />,
    ctaLink: "https://github.com/ezzeddinp/ecommerce-store",
    ctaDescriptionLink: "ecommerce-store",
    content: () => {
      return (
        <p>
          This is my first project. It&apos;s a full-stack E-commerce store with authentication. Its data are connected in my ecommerce-dashboard that i build too.
        </p>
      );
    },
    role: "Full Stack Developer",
    collaborators: "-",
    duration: "Aug 2023 - Dec 2023",
    tools: "MongoDB, cms, Next.js, Typescript, TailwindCSS, Stripe, Prisma(ORM), Zustand",
  },
  {
    description: "A web application for managing music events",
    title: "Music Event Manager",
    src: "/IMG_4904.jpg",
    ctaText: <SiGithub size={20} />,
    ctaLink: "https://github.com/user/music-event-manager",
    content: () => {
      return (
        <p>
          The Music Event Manager is a comprehensive web application designed to help organizers manage music events efficiently. It includes features such as ticket sales, event scheduling, and performer management.
        </p>
      );
    },
    role: "Frontend Developer",
    collaborators: "John Doe, Jane Smith",
    duration: "Jan 2021 - Jun 2021",
    tools: "React, Redux, Tailwind CSS",
  },
  {
    description: "A mobile app for real-time public transport tracking",
    title: "Transit Tracker",
    src: "/2.gif",
    ctaText: <SiGithub size={20} />,
    ctaLink: "https://github.com/user/transit-tracker",
    content: () => {
      return (
        <p>
          Transit Tracker is a mobile application that provides real-time tracking of public transport vehicles. Users can see the current location of buses and trains, get arrival predictions, and plan their routes accordingly.
        </p>
      );
    },
    role: "Backend Developer",
    collaborators: "Alice Johnson, Bob Brown",
    duration: "Mar 2020 - Dec 2020",
    tools: "Node.js, Express, MongoDB",
  },
  {
    description: "A data visualization tool for financial analytics",
    title: "FinViz",
    src: "/pin1.jpg",
    ctaText: <SiGithub size={20} />,
    ctaLink: "https://github.com/user/finviz",
    content: () => {
      return (
        <p>
          FinViz is a web-based data visualization tool designed for financial analysts. It offers various charts and graphs to help users understand financial data trends and make informed decisions.
        </p>
      );
    },
    role: "Data Scientist",
    collaborators: "Eve Green, Frank Harris",
    duration: "Jul 2018 - Dec 2018",
    tools: "Python, D3.js, Pandas",
  },
  {
    description: "An AI-powered chatbot for customer support",
    title: "SupportBot",
    src: "/IMG_4900.jpg",
    ctaText: <SiGithub size={20} />,
    ctaLink: "https://github.com/user/supportbot",
    content: () => {
      return (
        <p>
          SupportBot is an AI-powered chatbot that helps businesses provide 24/7 customer support. It uses natural language processing to understand customer queries and provide accurate responses.
        </p>
      );
    },
    role: "Machine Learning Engineer",
    collaborators: "Grace Lee, Henry Martin",
    duration: "Feb 2017 - Aug 2017",
    tools: "TensorFlow, Keras, NLTK",
  },
];
