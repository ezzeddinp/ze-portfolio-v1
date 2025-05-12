import { SiGithub } from "react-icons/si";

export const cards = [
  {
    id: 1,
    title: "Web Marketplace",
    description: "A web marketplace for buying and selling digital products",
    images: [
      "https://res.cloudinary.com/dm09trh2m/image/upload/v1725065855/webMarketPLace/67d57ed1-21c0-4e9c-8987-75089df69e8b.png",
      "https://res.cloudinary.com/dm09trh2m/image/upload/v1725067416/webMarketPLace/92793e9c-60e0-4731-8318-6703c63e846f.png",
      "https://res.cloudinary.com/dm09trh2m/image/upload/v1725066302/webMarketPLace/c9b3775d-aaff-418c-8978-e1ca23dfedbe.png",
      "https://res.cloudinary.com/dm09trh2m/image/upload/v1725066781/webMarketPLace/05ef3d09-7f75-402c-ba7e-9b114afb2673.png",
      "https://res.cloudinary.com/dm09trh2m/image/upload/v1725067203/webMarketPLace/4f703d80-e73f-45ba-9bf8-8b1372de4589.png",
    ],
    ctaLink: "https://github.com/user/web-marketplace",
    ctaText: <SiGithub size={20} />,
    role: "Full Stack Developer",
    collaborators: "-",
    duration: "August 2024",
    tools: "NextJs, Node.js, Zod, Prisma, Supabase, Uploadthing, Kinde, Stripe",
    content: () => (
      <p>
        Web Marketplace is a platform for buying and selling digital products.
        It uses Next.js for a smooth frontend experience and Node.js for backend
        operations. Data integrity with Zod and efficient management with
        Prisma. The platform offers real-time updates, authentication, intuitive
        UI for browsing, order management, secure transactions, and profile
        features.
      </p>
    ),
  },
  {
    id: 2,
    title: "E-commerce Store",
    description: "Fullstack Project",
    images: [
      "https://res.cloudinary.com/dm09trh2m/image/upload/v1723334003/ecommerce-store-highlight/apakek_bvxdig.png",
      "https://res.cloudinary.com/dm09trh2m/image/upload/v1723337070/ecommerce-store-highlight/dark_banner.png",
      "https://res.cloudinary.com/dm09trh2m/image/upload/v1723334002/ecommerce-store-highlight/small-view_hrva67.png",
      "https://res.cloudinary.com/dm09trh2m/image/upload/v1723334001/ecommerce-store-highlight/cart-checkout_frzppi.png",
      "https://res.cloudinary.com/dm09trh2m/image/upload/v1723334001/ecommerce-store-highlight/darkmode_f39rix.png",
      "https://res.cloudinary.com/dm09trh2m/image/upload/v1723337070/ecommerce-store-highlight/detail_product.png",
    ],
    ctaLink: "https://github.com/ezzeddinp/ecommerce-store",
    ctaText: <SiGithub size={20} />,
    ctaDescriptionLink: "ecommerce-store",
    role: "Full Stack Developer",
    collaborators: "-",
    duration: "July 2023 - Sept 2023",
    tools: "MongoDB, CMS, Nextjs, Typescript, TailwindCSS, Stripe, Prisma",
    content: () => (
      <p>
        This is my first project. It&apos;s a full-stack E-commerce store with
        authentication. Its data are connected in my ecommerce-dashboard that I
        built too.
      </p>
    ),
  },
  {
    id: 3,
    title: "Productivity Web UI",
    description: "A web application for managing tasks",
    images: [
      "https://res.cloudinary.com/dm09trh2m/image/upload/v1723963518/Black_White_Minimalist_Elegant_Photographer_Portofolio_Presentation_qinb5x.png",
      "https://res.cloudinary.com/dm09trh2m/image/upload/v1723961183/ecommerce-store-highlight/swift-launch/Screenshot_2024-08-07_180548_d5nwnx.png",
      "https://res.cloudinary.com/dm09trh2m/image/upload/v1723961183/ecommerce-store-highlight/swift-launch/Screenshot_2024-08-07_181210_zva3nl.png",
      "https://res.cloudinary.com/dm09trh2m/image/upload/v1723961183/ecommerce-store-highlight/swift-launch/Screenshot_2024-08-07_181850_z32oai.png",
      "https://res.cloudinary.com/dm09trh2m/image/upload/v1723961183/ecommerce-store-highlight/swift-launch/Screenshot_2024-08-07_181149_vhblaj.png",
    ],
    ctaLink: "https://github.com/ezzeddinp/swift-launch-web-ui",
    ctaText: <SiGithub size={20} />,
    ctaDescriptionLink: "Swift Launch",
    role: "Frontend",
    collaborators: "-",
    duration: "Aug 2024",
    tools: "Nextjs, Typescript, TailwindCSS",
    content: () => (
      <p>
        <i>Swift Launch</i> is a web application that allows users to manage
        their tasks, calculate, and share common links.
      </p>
    ),
  },
];
