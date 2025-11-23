import React from 'react';
import Content from './components/contents/page';
import Container from '../app/container/page';
import Footer from './components/Footer/footer';
import ExpandableCardMain from '@/components/blocks/page';
import SkillMain from '@/home/page';
import IntroMain from './layouts/page';

const ProjectPage: React.FC = () => {
  const websiteJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: "Zeddin's Portfolio",
    url: 'https://zeddin.vercel.app',
    description:
      "Explore Mohammad Ezzeddin Pratama's software engineering portfolio, featuring selected projects, experience, and learning resources.",
    publisher: {
      '@type': 'Person',
      name: 'Mohammad Ezzeddin Pratama',
    },
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: 'https://zeddin.vercel.app/?search={search_term_string}',
      },
      'query-input': 'required name=search_term_string',
    },
  } as const;

  return (
    <main className='relative z-40'>
      <script
        type='application/ld+json'
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
      />
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
