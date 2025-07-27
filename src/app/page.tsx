import React from 'react';
import Content from './components/contents/page';
import Container from '../app/container/page';
import Footer from './components/Footer/footer';
import ExpandableCardMain from '@/components/blocks/page';
import SkillMain from '@/home/page';
import IntroMain from './layouts/page';

const ProjectPage: React.FC = () => {
  return (
    <main className='relative z-40'>
      <IntroMain />
      <Container>
        <SkillMain />
        <ExpandableCardMain />
        {/* <Content /> */}
        <Footer />
      </Container>
    </main>
  );
};

export default ProjectPage;
