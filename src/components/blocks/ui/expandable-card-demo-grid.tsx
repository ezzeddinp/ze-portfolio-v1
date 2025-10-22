"use client";
import Image from "next/image";
import React, { useEffect, useId, useRef, useState } from "react";
import { motion } from "framer-motion";
import { useOutsideClick } from "../../../../hooks/useOutsideClick";
import { cards } from "./expandable-card-data";
import { notFound, useRouter } from "next/navigation";
import {
  SiExpo,
  SiGithub,
  SiJavascript,
  SiNextdotjs,
  SiNodedotjs,
  SiReact,
  SiSupabase,
  SiTailwindcss,
  SiTypescript,
  SiPrisma,
  SiMongodb,
  SiJquery
} from "react-icons/si";
import { FaCss3Alt, FaHtml5, FaJava, FaStripe } from "react-icons/fa";
import { GrMysql } from "react-icons/gr";
import SectionHeading from "@/common/components/elements/SectionHeading";
import SectionSubHeading from "@/common/components/elements/SectionSubHeading";

import { TiWeatherPartlySunny } from "react-icons/ti";
import { SiAccuweather } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import sentinelHub from "@/images/project/s2c/icon/sh-api.png"

const shAPI = sentinelHub;

const iconSize = "25px";
const toolsIcon: Record<string, JSX.Element> = {
  github: <SiGithub size={20} />,
  JavaScript: <SiJavascript size={iconSize} className="text-yellow-400" />,
  TypeScript: <SiTypescript size={iconSize} className="text-blue-400" />,
  NextJs: (
    <SiNextdotjs size={iconSize} className="text-black dark:text-white" />
  ),
  TailwindCSS: <SiTailwindcss size={iconSize} className="text-cyan-300" />,
  Html: <FaHtml5  size={iconSize} className="text-orange-400" />,
  Css: <FaCss3Alt size={iconSize} className="text-blue-600" />,
  jQuery: <SiJquery   size={iconSize} className="text-orange-400" />,
  "React Native": <SiReact size={iconSize} className="text-sky-600" />,
  NodeJs: <SiNodedotjs size={iconSize} className="text-green-600" />,
  Github: <SiGithub size={iconSize} className="text-black dark:text-white" />,
  Java: <FaJava size={iconSize} className="dark:text-white text-orange-800" />,
  MySQL: <GrMysql size={iconSize} className=" text-blue-600" />,
  Supabase: <SiSupabase size={iconSize} className="text-green-600" />,
  MongoDB: <SiMongodb size={iconSize} className="text-green-600" />,
  Prisma: <SiPrisma size={iconSize} className="text-black dark:text-white" />,
  Expo: <SiExpo size={iconSize} className="text-black dark:text-white" />,
  Stripe: (
    <FaStripe size={30} className="text-purple-600 dark:text-purple-900" />
  ),
  "Gemini AI": (
    <Image 
      src="/gemini.png"
      alt="Gemini"
      width={50}
      height={50} 
    />
  ),
  Midtrans : (
    <Image 
      src="/Midtrans.png"
      alt="Midtrans"
      width={85}
      height={85}
      />
    ),
        'Sentinel Hub API': <Image src={shAPI.src ?? shAPI} alt="Sentinel Hub" width={25} height={25} style={{ width: iconSize, height: iconSize }} />,
      'OpenMeteo API': <TiWeatherPartlySunny size={iconSize} className="text-black dark:text-white" />,
      'AccuWeather API': <SiAccuweather size={iconSize} className="text-orange-600 dark:text-orange-500"  />,
      PostgreSQL: <BiLogoPostgresql size={iconSize} className="text-blue-700 dark:text-blue-600"  />
};

export default function ExpandableCardCardDemo() {
  const [active, setActive] = useState<(typeof cards)[number] | boolean | null>(
    null
  );
  const [project, setProject] = useState<any[]>([]);
  const ref = useRef<HTMLDivElement>(null);
  const id = useId();
  const router = useRouter();


  useEffect(() => {
      const sortedCards = [...cards].sort((a, b) => b.id - a.id);
  setProject(sortedCards);
  }, []);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActive(false);
      }
    }

    if (active && typeof active === "object") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  if (!project) return notFound();

  // Add this function before the return statement
const getCardGradient = (index: number) => {
  // Array of glass-like gradient combinations
  const gradients = [
    "from-green-400/5 via-green-300/5 to-transparent dark:from-green-600/30 dark:via-green-800/20 dark:to-black/80",
    "from-green-300/5 via-green-200/5 to-transparent dark:from-green-500/30 dark:via-green-700/20 dark:to-black/80",
    "from-green-500/5 via-green-400/5 to-transparent dark:from-green-400/30 dark:via-green-900/20 dark:to-black/80",
    "from-blue-500/5 via-blue-400/5 to-transparent dark:from-blue-700/30 dark:via-blue-900/20 dark:to-black/80",
    "from-orange-500/5 via-orange-400/5 to-transparent dark:from-orange-500/30 dark:via-orange-700/20 dark:to-black/80",
    "from-blue-500/5 via-blue-400/5 to-transparent dark:from-blue-700/30 dark:via-blue-900/20 dark:to-black/80",
    "from-amber-500/5 via-amber-400/5 to-transparent dark:from-amber-700/30 dark:via-amber-900/20 dark:to-black/80",
    "from-white-500/5 via-white-400/5 to-transparent dark:from-white/20 dark:via-white/5 dark:to-black/80",
    "from-red-500/5 via-red-400/5 to-transparent dark:from-cyan-700/30 dark:via-cyan-900/20 dark:to-black/80",
  ];
  
  // Return gradient based on index, cycling through the array
  return gradients[index % gradients.length];
};

  return (
    <>
      <div className="space-y-2 pt-20 lg:pt-32">
        <SectionHeading
          className="text-3xl font-bold items-center justify-center font-sora"
          title="Project"
        />
        <SectionSubHeading>
          <p className="font-sora mb-[16px] text-md font-normal text-neutral-600 dark:text-neutral-400 items-center justify-center">
            Glance of Projects
          </p>
        </SectionSubHeading>
      </div>
      {/* Cards */}
      <ul className="scrollbar-hide max-w-[400px] md:max-w-2xl lg:max-w-3xl mx-auto px-1 md:px-4 lg:px-0 w-full flex md:flex-col lg:flex-col snap-x md:snap-none lg:snap-none snap-mandatory overflow-x-auto gap-4 pb-20 pt-5 lg:pt-16 lg:pb-32">
        {project.map((card, index) => (
  <motion.div
    layoutId={`card-${card.title}-${id}`}
    key={`card-${card.title}-${id}`}
    onClick={() => router.push(`/experience-detail/${card.title}`)}
    className={`snap-center lg:snap-none shadow-lg backdrop-blur-md 
    p-2 pb-3 md:pb-2 lg:pb-2 flex flex-col md:flex-row justify-between 
    items-center bg-gradient-to-br 
    ${getCardGradient(index)}
    hover:bg-gradient-to-tl hover:shadow-xl
    border border-white/30 dark:border-white/10
    transition-colors duration-500 ease-in-out rounded-xl cursor-pointer min-w-[90%] md:min-w-[50%] lg:min-w-[30%]`}
  >
            <div className="flex gap-2 md:gap-4 lg:gap-4 lg:pr-4 flex-col md:flex-row lg:flex-row lg:justify-between h-full">
              {/* Show only the first image initially */}
              {card.images && card.images.length > 0 && (
                <motion.div layoutId={`image-${card.title}-${id}`}>
                  <Image
                    width={595}
                    height={200}
                    src={card.images[0]} // Show the first image only
                    alt={`${card.title} - main image`}
                    placeholder="blur"
                    blurDataURL="data:image/webp;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkz8AAAgEBAFtqJpAAAAAASUVORK5CYII="
                    className="h-[190px] md:h-52 lg:h-52 md:w-[595px] rounded-sm object-cover object-center shadow-md"
                    
                  />
                </motion.div>
              )}
              <motion.div className="flex flex-col md:flex-col lg:flex-col items-start md:items-start lg:items-start lg:gap-2 justify-between gap-2 md:w-[520px] lg:w-[650px] flex-grow">
                <div className="flex flex-col text-left md:items-start md:justify-end lg:items-start lg:justify-start">
                  <motion.h3
                    layoutId={`title-${card.title}-${id}`}
                    className="font-bold text-neutral-800 dark:text-neutral-200 lg:text-left md:text-left pt-2"
                  >
                    {card.title}
                  </motion.h3>
                  <motion.p
                    layoutId={`description-${card.description}-${id}`}
                    className="text-neutral-600 dark:text-neutral-400 md:text-left text-sm lg:text-md w-full h-full flex-wrap"
                  >
                    {card.description}
                  </motion.p>
                </div>
                <div className="flex flex-col gap-2 pt-6">
                  <div className="flex flex-wrap gap-2 items-center">
                    {card.tools &&
                      card.tools
                        .split(",")
                        .map((tool: string, index: string) => (
                          <span
                            key={index}
                            className="px-1 text-neutral-800 dark:text-neutral-300 lg:py-1 rounded-md text-xs font-medium dark:font-semibold"
                          >
                            {toolsIcon[tool.trim()]
                              ? toolsIcon[tool.trim()]
                              : tool.trim()}
                          </span>
                        ))}
                  </div>
                  <div className="flex items-start justify-start py-4 px-2 lg:px-0">
                    <motion.button
                      layoutId={`button-${card.title}-${id}`}
                      className="w-fit py-2 px-4 text-sm rounded-full font-bold bg-black text-white hover:bg-black/80 dark:bg-gray-100 dark:text-black dark:hover:bg-gray-300 hover:duration-200"
                      onClick={() => window.open(card.ctaLictaLink, "_blank")}
                    >
                      {toolsIcon.github}
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Render remaining images when the card is clicked */}
            {active === card && card.images && card.images.length > 1 && (
              <div className="flex flex-wrap gap-4 mt-4">
                {card.images.slice(1).map((imageUrl: string, index: number) => (
                  <Image
                    key={index}
                    width={390}
                    height={200}
                    src={imageUrl}
                    alt={`${card.title} - image ${index + 2}`}
                    placeholder="blur"
                    blurDataURL="data:image/webp;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkz8AAAgEBAFtqJpAAAAAASUVORK5CYII="
                    className="h-[190px] md:h-52 lg:h-52 lg:w-72 rounded-sm object-cover object-center shadow-md"
                  />
                ))}
              </div>
            )}
          </motion.div>
        ))}
      </ul>
    </>
  );
}

export const CloseIcon = () => {
  return (
    <motion.svg
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.05 }}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 text-black"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </motion.svg>
  );
};
