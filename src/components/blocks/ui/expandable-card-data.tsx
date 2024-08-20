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
    duration: "July 2023 - Sept 2023",
    tools: "MongoDB, CMS, Nextjs, Typescript, TailwindCSS, Stripe, Prisma",
  },
  {
    description: "A web application for manage tasks",
    title: "Productivity Web UI",
    src: "https://res.cloudinary.com/dm09trh2m/image/upload/v1723963518/Black_White_Minimalist_Elegant_Photographer_Portofolio_Presentation_qinb5x.png",
    second: "https://res.cloudinary.com/dm09trh2m/image/upload/v1723961183/ecommerce-store-highlight/swift-launch/Screenshot_2024-08-07_180548_d5nwnx.png",
    third: "https://res.cloudinary.com/dm09trh2m/image/upload/v1723961183/ecommerce-store-highlight/swift-launch/Screenshot_2024-08-07_181210_zva3nl.png",
    fourth: "https://res.cloudinary.com/dm09trh2m/image/upload/v1723961183/ecommerce-store-highlight/swift-launch/Screenshot_2024-08-07_181850_z32oai.png",
    fifth: "https://res.cloudinary.com/dm09trh2m/image/upload/v1723961183/ecommerce-store-highlight/swift-launch/Screenshot_2024-08-07_181149_vhblaj.png",
    
    ctaText: <SiGithub size={20} />,
    ctaLink: "https://github.com/ezzeddinp/swift-launch-web-ui",
    ctaDescriptionLink: "Swift Launch",
    content: () => {
      return (
        <p>
          <i>Swift Launch</i> is a web application that allows users to manage their tasks also share, calculate and share common links.
        </p>
      );
    },
    role: "Frontend",
    collaborators: "-",
    duration: "Aug 2024",
    tools: "Nextjs, Typescript, TailwindCSS",
  },
  {
    description: "A mobile app for real-time public transport tracking",
    title: "Transit Tracker",
    src: "/disto.jpg",
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
    src: "/distorsi.jpg",
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
