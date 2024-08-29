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
        'w-[650px] h-[400px] rounded-full',
        'dark:bg-gradient-to-r dark:from-blue-800/45 dark:to-[#0f3324]/30 blur-[150px]',
        'absolute top-0 left-0 z-[-2]', // Adjusted for simplicity
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
