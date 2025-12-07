"use client";

import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import Heading from "../../components/contents/Heading";
import Link from "../../components/Link";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { Poppins } from "next/font/google";

// Load the Poppins font with 700 weight
const P700 = Poppins({ weight: "700", subsets: ["latin"] });

// The words to animate in TextGenerateEffect
const words = "A student that specializing in web and mobile app development. Currently focused on the art of creating web applications. Highly dedicated to enhancing skills in both Front-End and Back-End development.";

// Define the animation variants for the letters
const nameVariants = {
  hidden: { opacity: 0, x: -10, filter: "blur(8px)" },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    filter: "blur(0px)",
    transition: {
      delay: i * 0.05, // delay for each letter
      duration: 0.4,
    },
  }),
};

// Array of words to animate individually
const wordsArray = ["Mohammad", "Ezzeddin", "Pratama"];

function IntroLogic({ className }: { className?: string }): React.JSX.Element {
  const controls = useAnimation(); // Controls for framer-motion animation
  const [isLoading, setIsLoading] = useState<boolean>(true); // State to manage loading

  // Start the animation when the loading is done
  useEffect(() => {
    if (!isLoading) {
      controls.start("visible");
    }
  }, [controls, isLoading]);

  // Simulate loading for demonstration purposes
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500); // Adjust the loading time as needed
    return () => clearTimeout(timer);
  }, []);

  return (
    <Heading>
      <motion.div
        initial={{ opacity: 0.6 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.05 }}
        className={`flex relative antialiased flex-col justify-start pt-10 pb-[115px] px-[20px] md:pt-20 md:pl-10 lg:pl-40 ${className}`}
      >
        <>
          <motion.h1
            className={`${P700.className} font-bold text-transparent text-[45px] sm:text-[40px] md:text-5xl lg:text-6xl pb-[10px] pointer-events-none leading-[50px]`}
          >
            {wordsArray.map((word) => (
              <span key={word}>
                {word.split("").map((letter, letterIndex) => (
                  <motion.span
                    key={letter + letterIndex}
                    custom={letterIndex}
                    initial="hidden"
                    animate={controls}
                    variants={nameVariants}
                    className="inline-block font-extralight dark:text-zinc-200 text-black"
                  >
                    {letter}
                  </motion.span>
                ))}
                <br />
              </span>
            ))}
          </motion.h1>
          {/* // ha */}
          <TextGenerateEffect words={words} />
          <motion.div className="flex  flex-col gap-3 md:flex-row md:gap-10">
            <Link
              target="_blank"
              text="Linkedin"
              
              url="https://www.linkedin.com/in/mohammad-ezzeddin-pratama"
            />
            <Link
              target="_blank"
              text="Resume"
              url="/CV ATS 2025 Mohammad Ezzeddin Pratama Intern.pdf"
            />
          </motion.div>
        </>
      </motion.div>
    </Heading>
  );
}

export default IntroLogic;
