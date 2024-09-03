"use client"

import React, { useRef, useEffect } from 'react'
import UnderDevelopmentPage from '@/app/edu/educationCard/EducationSectionComponent'
import Container from "@/app/container/page"
import IdCard from '../components/IdCard'
import { AnimatePresence, motion, Keyframes } from 'framer-motion'

// Define keyframes for the curved animation
const curveAnimation = Keyframes`
  0% { transform: translateY(100vh) translateX(0); }
  50% { transform: translateY(50vh) translateX(50vw); }
  100% { transform: translateY(0) translateX(0); }
`;

export default function EducationPage() {
    const topElementRef = useRef<HTMLDivElement | null>(null);
    const bottomElementRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const topElement = topElementRef.current;
        const bottomElement = bottomElementRef.current;

        if (topElement) {
            topElement.addEventListener('animationend', () => handleAnimationComplete(topElement));
        }
        if (bottomElement) {
            bottomElement.addEventListener('animationend', () => handleAnimationComplete(bottomElement));
        }

        return () => {
            if (topElement) {
                topElement.removeEventListener('animationend', () => handleAnimationComplete(topElement));
            }
            if (bottomElement) {
                bottomElement.removeEventListener('animationend', () => handleAnimationComplete(bottomElement));
            }
        };
    }, []);

    const handleAnimationComplete = (element: HTMLDivElement) => {
        // Handle animation complete logic here
    };

    return (
        <AnimatePresence mode="sync">
            <section className='relative flex flex-col items-center justify-center max-w-5xl h-screen max-h-[70%] lg:max-h-[90%] mx-auto my-auto pb-4 pt-7'>
                <Container className='mb-4'>
                    <UnderDevelopmentPage />
                </Container>
                <IdCard />
            </section>
            <motion.div
                className='absolute top-0 left-0 w-[100%] h-[100vh] bg-pink-500 dark:bg-black transform origin-bottom'
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 0 }}
                exit={{ scaleY: 1 }}
                transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            >
            </motion.div>
            <motion.div
                className='hidden top-0 left-0 w-[100%] h-[100vh] bg-pink-500 dark:bg-black transform origin-top'
                initial={{ scaleY: 1 }}
                animate={{ scaleY: 0 }}
                exit={{ scaleY: 0 }}
                transition={{ duration: 2, ease: [0.22, 1, 0.36, 1] }}
                style={{ animation: `${curveAnimation} 2s ease-in-out` }}
            >
            </motion.div>
        </AnimatePresence>
    )
}