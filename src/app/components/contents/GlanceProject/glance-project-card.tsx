"use client";
import React from 'react';
import Container from "@/app/container/page";
import Image from "next/image";
import { SiGithub } from 'react-icons/si';
import Link from 'next/link';
import { BsLink45Deg } from 'react-icons/bs';
import SectionHeading from '@/common/components/elements/SectionHeading';
import SectionSubHeading from '@/common/components/elements/SectionSubHeading';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

// Animation variants for fade-in and bottom-to-top effect
const fadeInUpVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

function AnimatedSectionHeading({ title, className }: { title: string; className?: string }) {
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.1 });
  const controls = useAnimation();

  React.useEffect(() => {
    if (inView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [inView, controls]);


  return (
    <motion.div
      ref={ref}
      variants={fadeInUpVariants}
      initial="hidden"
      animate={controls}
      className={className}
    >
      <SectionHeading className='items-center justify-center' title={title} />
    </motion.div>
  );
}

function AnimatedSectionSubHeading({ children }: { children: React.ReactNode }) {
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.1 });
  const controls = useAnimation();
  React.useEffect(() => {
    if (inView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [inView, controls]);


  return (
    <motion.div
      ref={ref}
      variants={fadeInUpVariants}
      initial="hidden"
      animate={controls}
    >
      <SectionSubHeading>{children}</SectionSubHeading>
    </motion.div>
  );
}

function ProjectItem({ src, alt, title, description, link, gridProps }: {
  src: string,
  alt: string,
  title: string,
  description: string,
  link?: string,
  gridProps: string
}) {
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.1 });
  const controls = useAnimation();

  React.useEffect(() => {
    if (inView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [inView, controls]);

  return (
    <motion.div
      ref={ref}
      variants={fadeInUpVariants}
      initial="hidden"
      animate={controls}
      className={`relative group ${gridProps}`}
    >
      <Image
        className="h-full w-full object-cover shadow-xl sm:rounded-[3px] transition duration-500 group-hover:scale-105 group-hover:brightness-[.2]"
        loading="eager"
        sizes="(min-width: 768px) 25vw, 50vw"
        src={src}
        width={300}
        height={300}
        alt={alt}
      />
      <div className="absolute bottom-0 left-0 p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 text-white">
        {link ? (
          <Link target="_blank" href={link}>
            <div className='flex flex-row items-center justify-center gap-2'>
              <h3 className="text-sm lg:text-lg font-bold">{title}</h3>
              {link.includes('github') ? <SiGithub size={20} /> : <BsLink45Deg size={20} />}
            </div>
          </Link>
        ) : (
          <div>
            <h3 className="text-lg font-bold">{title}</h3>
            <p className="text-sm">{description}</p>
          </div>
        )}
      </div>
    </motion.div>
  );
}

export default function GlanceProject() {
  return (
    <>
      <Container>
        <div className='text-center items-center justify-center'>
          <AnimatedSectionHeading
            title="Project"
            className="text-3xl items-center text-center justify-center lg:pt-7"
          />
          <AnimatedSectionSubHeading>
            <p className="mb-[16px] text-md text-neutral-600 dark:text-neutral-400 items-center justify-center text-center">
              Glance of Projects
            </p>
          </AnimatedSectionSubHeading>
        </div>
      </Container>

      <div className=" text-left grid lg:max-h-[550px] max-h-[550px] grid-cols-8 grid-rows-6 lg:grid-rows-4 py-4 px-2 lg:px-40 gap-2 sm:gap-2">
        <ProjectItem
          src="/distorsi.jpg"
          alt="Project 1"
          title="Title 1"
          description="Description"
          gridProps="col-span-4 row-span-2 md:col-span-2 lg:p-0"
        />

        <ProjectItem
          src="/forumchat.png"
          alt="Project 2"
          title="Simple Forum Chat"
          description="Description"
          link="https://chat-delta-ruby-13.vercel.app/"
          gridProps="col-span-4 row-span-2 md:col-span-2 lg:p-0"
        />

        <ProjectItem
          src="/ribet.jpg"
          alt="Project 3"
          title="Notes App"
          description="Build with React Native"
          link="https://github.com/ezzeddinp/notes-app-homepage"
          gridProps="col-span-4 row-span-4 lg:p-0"
        />

        <ProjectItem
          src="/disto.jpg"
          alt="Project 4"
          title="Title 3"
          description="Description"
          gridProps="col-span-4 row-span-4 md:row-span-2 md:row-start-3 lg:p-0"
        />
      </div>
    </>
  )
}
