import { Metadata } from 'next'

import Container from '@/common/components/elements/Container'
import PageHeading from '../../common/components/elements/PageHeading'
import { METADATA } from '../../common/constants/metadata'
import clsxm from '@/common/libs/clsxm'

import Blog from '../../../modules/blog'
import Footer from '../components/Footer/footer'

export const metadata: Metadata = {
  title: `Blog ${METADATA.exTitle}`,
  description: 'My blogs content about programming and software development',
  keywords: 'blog zeddin, zeddin',
  alternates: {
    canonical: `${process.env.DOMAIN}/blog`
  }
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
