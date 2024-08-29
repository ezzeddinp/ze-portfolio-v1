import supabase from "../../../utils/supabase";

const seedProjects = async () => {
  const projects = [
    {
      description: "A web marketplace for buying and selling digital products",
      title: "Web Marketplace",
      images: [
        "https://res.cloudinary.com/dm09trh2m/image/upload/v1724379833/webMarketPLace/hero-section_egapra.png",
        "https://res.cloudinary.com/dm09trh2m/image/upload/v1724380165/sell-product1_uou5lz.png",
        "https://res.cloudinary.com/dm09trh2m/image/upload/v1724379834/webMarketPLace/product-card_vqjoja.png",
        "https://res.cloudinary.com/dm09trh2m/image/upload/v1724380165/sell-product2_nahobe.png",
        "https://res.cloudinary.com/dm09trh2m/image/upload/v1724379833/webMarketPLace/setting-section_umrvdf.png",
        "https://res.cloudinary.com/dm09trh2m/image/upload/v1724379834/webMarketPLace/product-card_vqjoja.png"
      ],
      ctaText: "SiGithub", // Simpan nama ikon atau tipe, bukan komponen React
      ctalink: "https://github.com/user/web-marketplace",
      content: `Our Web Marketplace is a cutting-edge platform for buying and selling digital products. It uses <strong>Next.js</strong> for a smooth frontend experience and <strong>Node.js</strong> for backend operations. We ensure data integrity with <strong>Zod</strong> and manage data efficiently with <strong>Prisma</strong>.
                For real-time updates and authentication, we use <strong>Supabase</strong>. <strong>Uploadthing</strong> handles file uploads and storage, while <strong>Kinde</strong> manages user authentication. Payments are processed securely via <strong>Stripe</strong>.
                The platform offers an intuitive interface for product browsing, order management, and secure transactions, supporting various payment methods and effective user profile management.`,
      role: "Full Stack Developer",
      collaborators: "-",
      duration: "August 2024",
      tools: "NextJs, Node.js, Zod, Prisma, Supabase, Uploadthing, Kinde, Stripe",
    },
    {
      description: "Fullstack Project",
      title: "E-commerce Store",
      images: [
        "https://res.cloudinary.com/dm09trh2m/image/upload/v1723334003/ecommerce-store-highlight/apakek_bvxdig.png",
        "https://res.cloudinary.com/dm09trh2m/image/upload/v1723337070/ecommerce-store-highlight/dark_banner.png",
        "https://res.cloudinary.com/dm09trh2m/image/upload/v1723334002/ecommerce-store-highlight/small-view_hrva67.png",
        "https://res.cloudinary.com/dm09trh2m/image/upload/v1723334001/ecommerce-store-highlight/cart-checkout_frzppi.png",
        "https://res.cloudinary.com/dm09trh2m/image/upload/v1723334001/ecommerce-store-highlight/darkmode_f39rix.png",
        "https://res.cloudinary.com/dm09trh2m/image/upload/v1723337070/ecommerce-store-highlight/detail_product.png"
      ],
      ctaText: "SiGithub", // Simpan nama ikon atau tipe
      ctaLink: "https://github.com/ezzeddinp/ecommerce-store",
      content: `This is my first project. It&apos;s a full-stack E-commerce store with authentication. Its data are connected in my ecommerce-dashboard that I build too.`,
      role: "Full Stack Developer",
      collaborators: "-",
      duration: "July 2023 - Sept 2023",
      tools: "MongoDB, CMS, Nextjs, Typescript, TailwindCSS, Stripe, Prisma",
    },
    {
      description: "A web application for managing tasks",
      title: "Productivity Web UI",
      images: [
        "https://res.cloudinary.com/dm09trh2m/image/upload/v1723963518/Black_White_Minimalist_Elegant_Photographer_Portofolio_Presentation_qinb5x.png",
        "https://res.cloudinary.com/dm09trh2m/image/upload/v1723961183/ecommerce-store-highlight/swift-launch/Screenshot_2024-08-07_180548_d5nwnx.png",
        "https://res.cloudinary.com/dm09trh2m/image/upload/v1723961183/ecommerce-store-highlight/swift-launch/Screenshot_2024-08-07_181210_zva3nl.png",
        "https://res.cloudinary.com/dm09trh2m/image/upload/v1723961183/ecommerce-store-highlight/swift-launch/Screenshot_2024-08-07_181850_z32oai.png",
        "https://res.cloudinary.com/dm09trh2m/image/upload/v1723961183/ecommerce-store-highlight/swift-launch/Screenshot_2024-08-07_181149_vhblaj.png"
      ],
      ctaText: "SiGithub", // Simpan nama ikon atau tipe
      ctaLink: "https://github.com/ezzeddinp/swift-launch-web-ui",
      content: `<i>Swift Launch</i> is a web application that allows users to manage their tasks, also share, calculate, and share common links.`,
      role: "Frontend",
      collaborators: "-",
      duration: "Aug 2024",
      tools: "Nextjs, Typescript, TailwindCSS",
    }
  ];

  try {
    for (const projectz of projects) {
      console.log('Attempting to insert project:', projectz);
      const { data, error } = await supabase
        .from('project')
        .insert([projectz]);
  
      if (error) {
        console.error('Error inserting data:', error.message);
        throw error; // re-throw the error to stop execution
      } else {
        console.log('Data successfully added:', data);
      }
    }
  } catch (error: any) {
    console.error('Error:', error.message);
    // you can also send the error to a logging service or alert system
  }
};

seedProjects();
