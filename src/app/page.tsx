import React from 'react'
import Content from './components/contents/page';
import Container from "../app/container/page"
import MainPage from './layouts/page';
import SkillList from '@/home/components/SkillList';
// import EducationSectionComponent from '@/components/edu/EducationSectionComponent';
import Carousel from './js/index';
import { BentoGridThirdDemo } from '@/components/BentoGridDemo';

const ProjectPage = () => {
  return (
    <>
      <div>
        <MainPage />
        {/* <EducationSectionComponent initial="hidden" whileInView="show" /> */}
        <Container> 
          <Content />
          <BentoGridThirdDemo />
          <SkillList />
        </Container>
      </div>
    </>
  )
}

export default ProjectPage;