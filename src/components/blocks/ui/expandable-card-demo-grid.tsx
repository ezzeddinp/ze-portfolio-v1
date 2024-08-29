"use client";
import Image from "next/image";
import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "../../../../hooks/useOutsideClick";
import { cards } from "./expandable-card-data";
import { notFound, useRouter } from "next/navigation";
import supabase from "../../../../utils/supabase";
import { SiGithub } from "react-icons/si";
import clsxm from "@/common/libs/clsxm";

export const ctaTextLogo = {
  github: <SiGithub size={20} />,
}

export async function ExpandableCardCardDemo() {
  const [active, setActive] = useState<(typeof cards)[number] | boolean | null>(null);
  const ref = useRef<HTMLDivElement>(null);
  const id = useId();
  const router = useRouter();

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

  const { data: project } = await supabase
    .from('project')
    .select('*')
    .order("id");
  if (!project) return notFound();

  return (
    <>
      {/* <AnimatePresence>
        {active && typeof active === "object" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 h-full w-full z-10"
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {active && typeof active === "object" ? (
          <div className="fixed inset-0 grid place-items-center z-[100]">
            <motion.button
              key={`button-${active.title}-${id}`}
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.05 }}
              className="flex absolute top-2 right-2 lg:hidden items-center justify-center bg-white rounded-full h-6 w-6"
              onClick={() => setActive(null)}
            >
              <CloseIcon />
            </motion.button>
            <motion.div
              layoutId={`card-${active.title}-${id}`}
              ref={ref}
              className="w-full max-w-[500px] h-full md:h-fit md:max-h-[90%] flex flex-col bg-white dark:bg-neutral-900 sm:rounded-3xl overflow-hidden"
            >
              <motion.div layoutId={`image-${active.title}-${id}`}>
                <Image
                  priority
                  width={150}
                  height={150}
                  src={active.src}
                  alt={active.title}
                  className="w-full h-80 lg:h-[290px] sm:rounded-tr-lg sm:rounded-tl-lg object-cover object-top"
                />
              </motion.div>

              <div>
                <div className="flex justify-between items-start p-4">
                  <div className="">
                    <motion.h3
                      layoutId={`title-${active.title}-${id}`}
                      className="font-bold text-neutral-700 dark:text-neutral-200 text-left"
                    >
                      {active.title}
                    </motion.h3>
                    <motion.p
                      layoutId={`description-${active.description}-${id}`}
                      className="text-neutral-600 dark:text-neutral-400 text-left"
                    >
                      {active.description}
                    </motion.p>
                  </div>

                  <motion.a
                    layoutId={`button-${active.title}-${id}`}
                    href={active.ctaLink}
                    target="_blank"
                    className="px-4 py-3 text-sm rounded-full font-bold bg-green-500 text-white"
                  >
                    {active.ctaText}
                  </motion.a>
                </div>
                <div className="pt-4 relative px-4">
                  <motion.div
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-neutral-600 text-xs md:text-xs lg:text-xs h-40 md:h-fit pb-10 flex flex-col items-start gap-4 overflow-auto dark:text-neutral-400 [mask:linear-gradient(to_bottom,white,white,transparent)] [scrollbar-width:none] [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch] text-left"
                  >
                    {typeof active.content === "function" ? active.content() : active.content}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence> */}

      {/* Cards */}
      <ul className="scrollbar-hide max-w-[390px] md:max-w-2xl lg:max-w-3xl mx-auto px-1 md:px-4 lg:px-0 w-full flex md:flex-col lg:flex-col snap-x md:snap-none lg:snap-none snap-mandatory overflow-x-auto gap-4 py-20 lg:py-32">
        {project.map((card) => (
          <motion.div
            layoutId={`card-${card.title}-${id}`}
            key={`card-${card.title}-${id}`}
            onClick={() => router.push(`/experience-detail/${card.title}`)}
            className="snap-center lg:snap-none shadow-md hover:shadow-lg hover:duration-500 p-2 pb-3 md:pb-2 lg:pb-2 flex flex-col md:flex-row justify-between items-center bg-neutral-50 dark:bg-black/20 dark:hover:bg-gradient-to-tl dark:hover:from-blue-900/15 lg:dark:hover:from-blue-900/20 dark:hover:via-blue-900/10 dark:hover:to-blue-900/10 dark:hover:scale-100 dark:hover:shadow-md dark:hover:shadow-blue-900/95 transition-all duration-300 rounded-xl cursor-pointer min-w-[80%] md:min-w-[50%] lg:min-w-[30%]"
          >
            <div className="flex gap-2 md:gap-4 lg:gap-4 lg:pr-4 flex-col md:flex-row lg:flex-row lg:justify-between h-full">
              {/* Show only the first image initially */}
              {card.images && card.images.length > 0 && (
                <motion.div layoutId={`image-${card.title}-${id}`}>
                  <Image
                    width={390}
                    height={200}
                    src={card.images[0]}  // Show the first image only
                    alt={`${card.title} - main image`}
                    placeholder="blur"
                    blurDataURL="data:image/webp;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkz8AAAgEBAFtqJpAAAAAASUVORK5CYII="
                    className="h-[190px] md:h-52 lg:h-52 lg:w-72 rounded-sm object-cover object-center shadow-md"
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
                <div className="flex flex-col gap-2 pt-4">
                  <div className="flex flex-wrap gap-2">
                    {card.tools && card.tools.split(',').map((tool: string, index: string) => (
                      <span
                        key={index}
                        className="bg-gray-200 dark:bg-white/10 text-gray-800 dark:text-gray-100 px-3 py-2 lg:py-1 rounded-md text-xs font-medium dark:font-semibold"
                      >
                        {tool.trim()}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-start justify-start">
                    <motion.button
                      layoutId={`button-${card.title}-${id}`}
                      className="w-fit py-2 px-4 text-sm rounded-full font-bold bg-black text-white hover:bg-black/80 dark:bg-gray-100 dark:text-black dark:hover:bg-gray-300 hover:duration-200"
                      onClick={() => window.open(card.ctaLink, '_blank')}
                    >
                      {ctaTextLogo.github}
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
      <div className={clsxm([
                    'w-full max-w-[450px] h-[400px] rounded-full overflow-hidden snap-none',
                    'dark:bg-gradient-to-r dark:from-blue-900 dark:to-[#0f3324]/30 blur-[150px]',
                    'absolute bottom-[10%] right-0 transform translate-x-[-10%] -translate-y-1/2 z-[-2]', // Adjusted positioning
                ])} />
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
