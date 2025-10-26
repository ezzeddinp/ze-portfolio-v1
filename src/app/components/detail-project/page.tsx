"use client";

import Image from "next/image";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Footer from "../Footer/footer";
import CardDetailSection from "@/app/components/contents/card-detail-ui";
import { SiGithub } from "react-icons/si";
import SkeletonLoader from "@/app/components/detail-project/loading";
import { cards } from "@/components/blocks/ui/expandable-card-data";
import { toolsIcon } from '@/components/blocks/ui/expandable-card-demo-grid';

const ctaTextLogo = {
  github: <SiGithub size={20} />,
};

type CardDetailProps = { id?: string | null };

const CardDetail: React.FC<CardDetailProps> = ({ id: propId }) => {
  const params = useParams();
  const rawId = propId ?? params?.id ?? null
  const decodedId = rawId
    ? Array.isArray(rawId)
      ? decodeURIComponent(rawId[0])
      : decodeURIComponent(String(rawId))
    : null;
  const [loading, setLoading] = useState(true);

  const card = cards.find((card) => card.title === decodedId); // 

  useEffect(() => {
    if (card) {
      setLoading(false);
    }
  }, [card]);

  if (loading) return <SkeletonLoader />;
  if (!card) return <div>Card not found</div>;

  const imageUrls: string[] = Array.isArray(card.images) ? card.images : [];
  const GithubIcon = ctaTextLogo.github;

  // Determine CTA element: prefer card.ctaText (if provided), otherwise fallback to GithubIcon
  const ctaElement = card.ctaText
    ? React.isValidElement(card.ctaText)
      ? card.ctaText
      : <p className="text-left text-sm font-semibold">{card.ctaText}</p>
    : GithubIcon;

  // Render the content based on whether it's a function or string
  const renderContent = () => {
    if (typeof card.content === "function") {
      return card.content();
    }
    return card.content;
  };

  // Insert a line break after the second comma in a collaborators string
  const formatCollaborators = (collab: any) => {
    if (!collab || typeof collab !== 'string') return collab;
    const parts = collab.split(',').map(p => p.trim());
    if (parts.length <= 2) return collab;
    const first = parts.slice(0, 2).join(', ') + ','; // keep trailing comma
    const rest = parts.slice(2).join(', ');
    return (
      <>
        {first}
        <br />
        {rest}
      </>
    );
  };

  return (
    <>
      <motion.div
        className="flex flex-col justify-center items-center pb-4"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          className="flex flex-col justify-center items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <motion.div
            className="flex flex-col justify-center items-center px-[12.5px] lg:px-0"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Image
              src={card.images[0]}
              alt={card.title}
              width={500}
              height={500}
              loading="eager"
              className="h-[270px] md:h-[353px] md:w-[700px] lg:h-[300px] lg:w-[600px] rounded-sm items-center"
              style={{ objectFit: "cover", objectPosition: "center top" }}
            />
            <motion.div className="flex flex-col justify-center items-center lg:items-start px-2 sm:px-36 md:px-36 lg:px-60">
              <div className="text-left pt-4 mt-6">
                <h3 className="text-black dark:text-white font-extrabold text-2xl">
                  {card.title}
                </h3>
                <p className="text-neutral-500 dark:text-neutral-500 font-normal italic text-md">
                  {card.description}
                </p>
                <div className="flex flex-col justify-center items-center pt-4 w-full max-w-4xl lg:max-w-xl mx-auto">
                  <div className="text-gray-800 dark:text-neutral-400 text-[15px] lg:text-md leading-relaxed font-light text-left">
                    {renderContent()}
                  </div>
                </div>
              </div>
              <motion.div>
                <motion.div
                  className="flex flex-row text-left pt-2 gap-4"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                >
                    <div className="flex flex-col">
                    <CardDetailSection title="Role" content={card.role} />
                    <CardDetailSection
                      title="Collaborators"
                      content={formatCollaborators(card.collaborators)}
                    />
                  </div>
                  <div className="flex flex-col">
                    <CardDetailSection
                      title="Duration"
                      content={card.duration}
                    />
                    <CardDetailSection
                      title="Tools"
                      content={
                        Array.isArray(card.tools)
                          ? card.tools.map((tool, idx) => (
                              <span key={idx} style={{ marginRight: 8, display: "inline-block" }}>
                                {toolsIcon[tool.trim()] || tool.trim()}
                              </span>
                            ))
                          : typeof card.tools === "string"
                          ? card.tools.split(/,|\n/).map((tool, idx) => (
                              <span key={idx} style={{ marginRight: 8, display: "inline-block" }}>
                                {toolsIcon[tool.trim()] || tool.trim()}
                              </span>
                            ))
                          : card.tools
                      }
                    />
                  </div>
                </motion.div>
                <motion.div
                  className="flex flex-row max-w-full py-8 items-start justify-start"
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                >
                  {card.ctaLink && (
                    <Link
                      href={card.ctaLink}
                      target="_blank"
                      className="flex gap-4 md:col-start-5 md:col-end-9 select-none caption group text-black/80 dark:text-white/80 bg-black/[.05] dark:bg-white/[.05] col-span-full hover:bg-black/10 dark:hover:bg-white/10 hover:text-black dark:hover:text-white flex-row p-4 rounded-md game-border"
                    >
                      <button className="flex flex-row justify-between gap-4 w-full">
                        <div className="flex flex-row gap-2 items-center">
                          {ctaElement}
                          {card.ctaDescriptionLink && (
                            <p className="text-left text-sm font-semibold">
                              {card.ctaDescriptionLink}
                            </p>
                          )}
                        </div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          className="h-3 w-3 ml-auto stroke-[3px] stroke-black/30 dark:stroke-white/30 group-hover:stroke-black dark:group-hover:stroke-white"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M8.25 4.5l7.5 7.5-7.5 7.5"
                          ></path>
                        </svg>
                      </button>
                    </Link>
                  )}
                </motion.div>
              </motion.div>
              <motion.div
                className="flex flex-col justify-center items-center gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1 }}
              >
                {imageUrls.slice(1).map((url, index) => (
                  <Image
                    key={index}
                    src={url}
                    alt={`${card.title} image ${index + 1}`}
                    width={390}
                    height={200}
                    className="h-[190px] lg:h-[300px] lg:w-[600px] rounded-sm"
                    style={{ objectFit: "cover", objectPosition: "center top" }}
                  />
                ))}
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
      <Footer />
    </>
  );
};

export default CardDetail;
