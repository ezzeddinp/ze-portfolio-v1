import { SiGithub } from "react-icons/si";
import cgroovyImg from "@/images/cgroovy.png";
import cgroovyImg2 from "@/images/cgroovy2.png";
import cgroovyImg3 from "@/images/cgroovy3.png";

import sushi from "@/images/sushi.png";
import reservation from "@/images/reservation.png";
import menu from "@/images/menu.png";
import contactus from "@/images/contact-us.png";

import parfume1 from "@/images/project/1.png";
import parfume2 from "@/images/project/2.png";
import parfume3 from "@/images/project/3.png";
import parfume4 from "@/images/project/4.png";
import parfume5 from "@/images/project/5.png";
import parfume6 from "@/images/project/6.png";
import parfume7 from "@/images/project/7.png";
import parfume8 from "@/images/project/8.png";
import parfume9 from "@/images/project/9.png";
import parfume10 from "@/images/project/10.png";

import agentia1 from "@/images/project/agentia-image/1.png";
import agentia2 from "@/images/project/agentia-image/2.png";
import agentia3 from "@/images/project/agentia-image/3.png";
import agentia4 from "@/images/project/agentia-image/4.png";
import agentia5 from "@/images/project/agentia-image/5.png";
import agentia6 from "@/images/project/agentia-image/6.png";
import agentia7 from "@/images/project/agentia-image/7.png";
import agentia8 from "@/images/project/agentia-image/8.png";

import s2cb from "@/images/project/s2c/s2c-banner.png"
import s2cc from "@/images/project/s2c/s2c-cover.png"
import s2c from "@/images/project/s2c/s2c-8 (1).png";
import s2c2 from "@/images/project/s2c/s2c-8 (2).png";
import s2c3 from "@/images/project/s2c/s2c-8 (3).png";
import s2c4 from "@/images/project/s2c/s2c-8 (4).png";
import s2c5 from "@/images/project/s2c/s2c-8 (5).png";
import s2c6 from "@/images/project/s2c/s2c-8 (6).png";
import s2c7 from "@/images/project/s2c/s2c-8 (7).png";
import s2c8 from "@/images/project/s2c/s2c-8 (8).png";

import ss from "@/images/project/sehatsantap/sehatsantap (1).png";
import ss2 from "@/images/project/sehatsantap/sehatsantap (2).png";
import ss3 from "@/images/project/sehatsantap/sehatsantap (3).png";
import ss4 from "@/images/project/sehatsantap/sehatsantap (4).png";
import ss5 from "@/images/project/sehatsantap/sehatsantap (5).png";
import ss6 from "@/images/project/sehatsantap/sehatsantap (6).png";
import ss7 from "@/images/project/sehatsantap/sehatsantap (7).png";
import ss8 from "@/images/project/sehatsantap/sehatsantap (8).png";
import ss9 from "@/images/project/sehatsantap/sehatsantap (9).png";


const ssImages = [
  ss.src,
  ss2.src,
  ss3.src,
  ss4.src,
  ss5.src,
  ss6.src,
  ss7.src,
  ss8.src,
  ss9.src,
]

const s2cImages = [
  s2cc.src,
  s2cb.src,
  s2c.src,
  s2c2.src,
  s2c3.src,
  s2c4.src,
  s2c5.src,
  s2c6.src,
  s2c7.src,
  s2c8.src,
];

const parfumeImages = [
  parfume1.src,
  parfume2.src,
  parfume3.src,
  parfume4.src,
  parfume5.src,
  parfume6.src,
  parfume7.src,
  parfume8.src,
  parfume9.src,
  parfume10.src,
];

const agentiaImages = [
  agentia1.src,
  agentia2.src,
  agentia3.src,
  agentia4.src,
  agentia5.src,
  agentia6.src,
  agentia7.src,
  agentia8.src,
];

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
    tools: "NextJs, NodeJs, Zod, Prisma, Supabase, Uploadthing, Kinde, Stripe",
    content: () => (
      <p>
        Web Marketplace is a platform for buying and selling digital products.
        It uses Next.js for a smooth frontend experience and NodeJs for backend
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
    tools: "MongoDB, CMS, NextJs, TypeScript, TailwindCSS, Stripe, Prisma",
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
    tools: "NextJs, TypeScript, TailwindCSS",
    content: () => (
      <p>
        <i>Swift Launch</i> is a web application that allows users to manage
        their tasks, calculate, and share common links.
      </p>
    ),
  },
  {
    id: 4,
    title: "C`Groovy",
    description: "A Website to listening some memories",
    images: [cgroovyImg.src, cgroovyImg2.src, cgroovyImg3.src],
    ctaLink: "https://github.com/user/",
    ctaText: <SiGithub size={20} />,
    ctaDescriptionLink: "C`Groovy",
    role: "Front End Developer",
    collaborators: "Giancarla, Ahaddin, Faiz, Aditya, Fayruz",
    duration: "May 2025",
    tools: "Html, Css,JavaScript, jQuery",
    content: () => (
      <p>
        C`Groovy is a nostalgic music website that lets users explore and listen to memorable songs. It features a simple, retro-inspired interface built with HTML, CSS, and jQuery, allowing users to browse and play their favorite tracks from the past.
      </p>
    ),
  },
  {
    id: 5,
    title: "SushiBox",
    description: "Find & Order your fav Sushi",
    images: [sushi.src, reservation.src, menu.src, contactus.src],
    ctaLink: "https://github.com/user/",
    ctaText: <SiGithub size={20} />,
    ctaDescriptionLink: "C`Groovy",
    role: "Front End Developer",
    collaborators: "-",
    duration: "June 2025",
    tools: "Html, Css, JavaScript",
    content: () => (
      <p>
        SushiBox is an elegant dining platform where sushi enthusiasts can discover their favorite Japanese dishes. The website offers seamless table reservations, an extensive interactive menu of fresh sushi options, and easy access to contact information for inquiries or special requests. Built with a modern interface, it simplifies the dining experience from browsing to booking.
      </p>
    ),
  },
  {
        id: 6,
    title: "Parfume AI",
    description: "Find your recommendation parfume personalized by AI",
    images: parfumeImages,
    ctaLink:"https://github.com/ezzeddinp/",
    ctaText: <SiGithub size={20} />,
    ctaDescriptionLink: "PerfumeAI",
    role: "Fullstack Developer",
    collaborators: "-",
    duration: "July 2025",
    tools: "NextJs, TypeScript, TailwindCSS, Supabase, Midtrans, Gemini AI",
    content: () => (
      <p>
        PerfumeAI is a modern, AI-powered perfume discovery web app built with Next.js, TypeScript, Supabase and Midtrans payment gateway.
  It features a seamless chat experience using Google Gemini for real-time fragrance recommendations, a beautiful and responsive UI with Framer Motion animations, and a secure order history system.
  The project demonstrates advanced integration of generative AI, scalable cloud authentication, and a delightful user experience—showcasing both technical depth and product polish.
      </p>
    ),
  },
  {
        id: 7,
    title: "Agentia",
    description: "Find your personalized agent bot template",
    images: agentiaImages,
    ctaLink:"https://github.com/ezzeddinp/",
    ctaText: <SiGithub size={20} />,
    ctaDescriptionLink: "Agentia",
    role: "Frontend Developer",
    collaborators: "-",
    duration: "July 2025 - Aug 2025",
    tools: "NextJs, TypeScript, TailwindCSS",
    content: () => (
      <p>
        Agentia help UMKM people to get an efficient and effective way by automating their daily operational via
 whatsapp bot that integrated with n8n such as, customer center, ai chatbot , daily report for the owner of
 UMKM
      </p>
    ),
  },
  {
        id: 8,
    title: "Matani App",
    description: "Monitor & Manage your lands",
    images: s2cImages,
    ctaLink:"https://github.com/ezzeddinp/matani-app",
    ctaText: <SiGithub size={20} />,
    ctaDescriptionLink: "Matani App",
    role: "Full-Stack",
    collaborators: "@paulus_billy, @cleon_maheswara",
    duration: "Sept 2025 - Oct 2025",
    tools: "React Native, AccuWeather API, Sentinel Hub API, OpenMeteo API, NodeJs, PostgreSQL, Gemini AI",
    content: () => (
      <p>
        Matani is An Agriculture app that me & my friend billy & cleon build for Hackathon. Matani helps small lands owners to monitor and manage their lands more efficiently by providing real-time data of NDVI, temperature, and humidity. The app offers personalized draw polyline for specific monitoring areas, weather forecasts, and a user-friendly interface to optimize crop and reduce resource wastage.
      </p>
    ),
  },
  {
    id: 9,
    title: "SehatSantap",
    description: "Your personalized healthy food recommendation app",
    images: ssImages,
    ctaLink:"https://github.com/ezzeddinp",
    ctaText: <SiGithub size={20} />,
    ctaDescriptionLink: "SehatSantap",
    role: "CTO",
    collaborators: "@Terence (CEO), @Ricky (CFO), @Jonathan (COO), @Juan (CMO)",
    duration: "Oct 2025 - Ongoing",
    tools: "NextJs, TailwindCSS, Supabase, Midtrans, Gemini AI",
    content: () => (
      <p>
        These are my group college entrepreneurship projects. SehatSantap is a healthy food recommendation app that leverages AI to provide personalized meal suggestions based on user preferences and dietary needs. Built with Next.js and TypeScript, the app features a sleek, responsive design using TailwindCSS. It integrates Supabase for secure user authentication and data management, while Midtrans handles seamless payment processing for premium features. Gemini AI powers the recommendation engine, ensuring users receive tailored meal plans that promote wellness and healthy eating habits.
      </p>
    )
  }
];
