import React from 'react'
import Content from './components/contents/page';
import Container from "../app/container/page"
import Footer from './components/Footer/footer';
import ExpandableCardMain from '@/components/blocks/page';
import SkillMain from '@/home/page';
import IntroMain from './layouts/page';
import clsxm from '@/common/libs/clsxm';

const ProjectPage = () => {
  return (
    <>
      {/* Debug with simplified styles */}
      <div className={clsxm([
        'w-full max-w-[650px] h-[400px] rounded-full overflow-hidden snap-none overscroll-none overflow-x-hidden',
        'dark:bg-gradient-to-r dark:from-blue-800/85 dark:to-[#0f3324]/30 blur-[150px]',
        'absolute top-0 lg:left-0 left-1/2 transform -translate-x-1/2 lg:transform-none z-[-2]', // Make position responsive
      ])}>
      </div>
      <main className='relative z-40'>
        <IntroMain />
        <Container>
          <SkillMain />
          <Content />
          <ExpandableCardMain />
          <Footer />
        </Container>
      </main>
    </>
  )
}

export default ProjectPage;
