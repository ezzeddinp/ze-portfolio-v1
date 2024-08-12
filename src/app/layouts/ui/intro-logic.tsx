"use client";

import React, { useEffect, useState } from "react";
import Heading from "../../components/contents/Heading";
import Link from "../../components/Link";
import { motion, useAnimation } from "framer-motion";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { Poppins } from "next/font/google";
import IntroLogicSkeleton from "@/common/components/elements/introSkeleton";

const P700 = Poppins({ weight: "700", subsets: ["latin"] });

const words = 'deeply inspired by the transformative power of innovations that shape my constantly evolving world.\nMy ultimate goal is to kindle a sense of wonder and fascination in the hearts of those who venture into \nthe vast digital realm. As I explore this captivating world of boundless possibilities, my mission becomes clear';

const nameVariants = {
  hidden: { opacity: 0, x: -10, filter: "blur(8px)" },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    filter: "blur(0px)",
    transition: {
      delay: i * 0.1, // delay for each letter
      duration: 0.4,
    },
  }),
};

const wordsArray = ["Mohammad", "Ezzeddin", "Pratama"];

function IntroLogic(): React.JSX.Element {
  const controls = useAnimation();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!isLoading) {
      controls.start("visible"); // Start the animation when loading is done
    }
  }, [controls, isLoading]);

  // Simulate loading for demo purposes
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // 2-second loading simulation
    return () => clearTimeout(timer);
  }, []);

  return (
    <Heading>
      <motion.div
        initial={{ opacity: 0.6 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.1 }}
        className="flex relative antialiased flex-col justify-start pt-10 pb-[115px] pl-10 pr-10 md:pt-20 md:pl-10 lg:pl-40"
      >
        {isLoading ? (
          <IntroLogicSkeleton />
        ) : (
          <>
            <motion.h1
              className={`${P700.className} font-bold text-transparent text-[45px] md:text-5xl lg:text-6xl pb-[10px] pointer-events-none leading-[50px]`}
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
                      className="inline-block dark:text-zinc-200 text-black"
                    >
                      {letter}
                    </motion.span>
                  ))}
                  <br />
                </span>
              ))}
            </motion.h1>
            <TextGenerateEffect words={words} />
            <motion.div className="flex flex-col gap-3 md:flex-row md:gap-10">
              <Link
                target="_blank"
                text="Linkedin"
                url="https://www.linkedin.com/in/mohammad-ezzeddin-pratama"
              />
              <Link
                target="_blank"
                text="Resume"
                url="/Mohammad_Ezzeddin_Pratama_CV_ATS.pdf"
              />
            </motion.div>
          </>
        )}
      </motion.div>
    </Heading>
  );
}

export default IntroLogic;
