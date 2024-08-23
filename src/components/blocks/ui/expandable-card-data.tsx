import { SiGithub } from "react-icons/si";

export const cards = [
  {
    description: "A web marketplace for buying and selling digital products",
    title: "Web Marketplace",
    src: "https://res.cloudinary.com/dm09trh2m/image/upload/v1724379833/webMarketPLace/hero-section_egapra.png",
    second: "https://res.cloudinary.com/dm09trh2m/image/upload/v1724380165/sell-product1_uou5lz.png",
    third: "https://res.cloudinary.com/dm09trh2m/image/upload/v1724379834/webMarketPLace/product-card_vqjoja.png",
    fourth: "https://res.cloudinary.com/dm09trh2m/image/upload/v1724380165/sell-product2_nahobe.png",
    fifth: "https://res.cloudinary.com/dm09trh2m/image/upload/v1724379833/webMarketPLace/setting-section_umrvdf.png",
    sixth: "https://res.cloudinary.com/dm09trh2m/image/upload/v1724379834/webMarketPLace/product-card_vqjoja.png",
    ctaText: <SiGithub size={20} />,
    ctaLink: "https://github.com/user/web-marketplace",
    content: () => {
      return (
        <p>
        The Web Marketplace is an advanced online platform designed to facilitate the buying and selling of digital products. Built with a modern tech stack, this marketplace leverages <strong>Next.js</strong> for a seamless frontend experience, while <strong>Node.js</strong> handles backend operations. <strong>Zod</strong> is used for robust schema validation, ensuring data integrity throughout the application. 

        <strong>Prisma</strong> manages database interactions, providing a flexible and efficient way to handle data. <strong>Supabase</strong> is integrated for real-time data and authentication, offering a secure and scalable backend solution. For file management, <strong>Uploadthing</strong> is utilized to handle uploads and storage efficiently. 

        The platform uses <strong>Kinde</strong> for user authentication and management, enhancing security and user experience. Payments are processed through <strong>Stripe</strong>, ensuring a smooth and reliable transaction process. 

        This project is designed to offer a user-friendly interface for browsing products, managing orders, and securely handling transactions. It supports various payment methods and includes features for effective user profile management.
      </p>
      );
    },
    role: "Full Stack Developer",
    collaborators: "-",
    duration: "August 2024 - Sept 2024",
    tools: "NextJs, Node.js,Zod, Prisma, Supabase, Uploadthing, Kinde, Stripe",
  },
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
