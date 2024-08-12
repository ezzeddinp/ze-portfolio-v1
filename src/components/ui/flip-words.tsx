"use client";
import React, { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface FlipWordsProps {
  words: string[];
  duration?: number;
  className?: string;
}

export const FlipWords: React.FC<FlipWordsProps> = ({
  words,
  duration = 50,
  className,
}) => {
  const [currentWord, setCurrentWord] = useState<string>(words[0]);
  const [isAnimating, setIsAnimating] = useState<boolean>(false);

  const startAnimation = useCallback(() => {
    const nextWord = words[(words.indexOf(currentWord) + 1) % words.length];
    setCurrentWord(nextWord);
    setIsAnimating(true);
  }, [currentWord, words]);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!isAnimating) startAnimation();
    }, duration);
    return () => clearTimeout(timer);
  }, [isAnimating, duration, startAnimation]);

  return (
    <AnimatePresence
      onExitComplete={() => setIsAnimating(false)}
    >
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -40, filter: "blur(8px)", scale: 2, position: "absolute" }}
        transition={{ type: "spring", stiffness: 100, damping: 10 }}
        className={cn("z-10 inline-block relative text-left ", className)}
        key={currentWord}
      >
        {currentWord.split("").map((letter, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 0, y: 10, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ delay: index * 0.08, duration: 0.4 }}
            className="inline-block"
          >
            {letter}
          </motion.span>
        ))}
      </motion.div>
    </AnimatePresence>
  );
};
