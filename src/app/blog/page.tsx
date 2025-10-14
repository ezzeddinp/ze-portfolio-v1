import { Metadata } from 'next'

import Container from '@/common/components/elements/Container'
import PageHeading from '../../common/components/elements/PageHeading'
import { METADATA } from '../../common/constants/metadata'
import clsxm from '@/common/libs/clsxm'

import Blog from '../../../modules/blog'
import Footer from '../components/Footer/footer'

export const metadata = {
  title: "Mohammad Ezzeddin Pratama | Full-Stack Developer",
  description:
    "Portfolio of Mohammad Ezzeddin Pratama — a full-stack developer specializing in React, Next.js, and Supabase. Passionate about building impactful web and mobile apps.",
  keywords: [
    "Mohammad Ezzeddin Pratama",
    "Mohammad Mohammad Ezzeddin Pratama",
    "Ezzeddin",
    "Ezzeddin Portofolio",
    "Full-stack developer",
    "Next.js portfolio",
    "React developer",
    "Indonesia developer",
    "Supabase projects",
    "React Native"
  ],
  authors: [{ name: "Mohammad Ezzeddin Pratama" }],
  openGraph: {
    title: "Mohammad Ezzeddin Pratama | Full-Stack Developer",
    description:
      "Explore projects and case studies by Mohammad Ezzeddin Pratama — Next.js, Supabase, and AI-powered applications.",
    url: "https://zeds.studio",
    siteName: "Ezzeddin Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mohammad Ezzeddin Pratama | Full-Stack Developer",
    description: "Building web apps with Next.js, Supabase, and AI.",
    images: ["https://zeds.studio"],
  },
}


const PAGE_TITLE = 'Blog'
const PAGE_DESCRIPTION = 'Exploring the world of code, creativity, and constant learning.'


export default async function BlogPage() {
  return (
    <>
      {/* <div className={clsxm([
        'w-[650px] h-[400px] rounded-full',
        'bg-gradient-to-r from-white/15 to-[#0f3324]/30 blur-[150px]',
        'absolute top-0 slide-in-from-left-3 lg:left-0 z-[-2]', // Adjusted for simplicity
      ])} /> */}
      <div className='flex flex-col justify-stretch items-center'>
        <Container data-aos="fade-left">
          <PageHeading title={PAGE_TITLE} description={PAGE_DESCRIPTION} />
          <Blog />
        </Container>
      </div>
      <Footer />
    </>
  )
}
