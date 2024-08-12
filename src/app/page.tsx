import React from 'react'
import Content from './components/contents/page';
import Container from "../app/container/page"
// import { FeaturesSectionDemo } from '@/components/ui/feature-section';
import Footer from './components/Footer/footer';
import ExpandableCardMain from '@/components/blocks/page';
import SkillMain from '@/home/page';
import IntroMain from './layouts/page';

const ProjectPage = () => {
  return (
    <>
      <div className='z-40'>
        <IntroMain />
        <Container> 
          <SkillMain />
          <Content />
          {/* <FeaturesSectionDemo /> */}
          <ExpandableCardMain />
          <Footer />
        </Container>
      </div>
    </>
  )
}

export default ProjectPage;