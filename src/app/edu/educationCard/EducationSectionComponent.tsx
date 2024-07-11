"use client"

import React from "react";
import { motion } from "framer-motion";
import { AiFillTrophy } from "react-icons/ai";
import { MdOutlineSchool } from "react-icons/md";
import { educationList } from "@/common/constants/education";
import { awardList } from "@/common/constants/award";

interface EducationSectionProps {
  initial: string;
  whileInView: string;
}

function EducationSectionComponent({
  initial,
  whileInView
}: EducationSectionProps): JSX.Element {
  return (
    <div className="p-[20px] w-screen mt-20 max-2xl: items-center justify-center flex flex-col ">
      {/* Education Section Title */}
      <h2 className="text-3xl font-bold lg:mb-[10px] text-neutral-800 dark:text-white text-left">Educations</h2>

      {/* Education Section Content */}
      <motion.div
        initial="hidden"
        whileInView="show"
        className="mt-[10px] lg:mt-[5px] mx-auto"
      >
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-1 lg:gap-5  ">
          {/* Education Section Subtitle & Description */}
          <div className="text-neutral-600 text-center">
            <div className="text-xl font-semibold mb-3 dark:text-neutral-400">
              Educations & Awards
            </div>

            <p className="dark:text-neutral-500 text-[13px] md:text-[13px] lg:text-[13px]">There are some formal education & awards that I`ve reached below</p>
          </div>

          {/* Education Section Educations & Awards Content */}
          <div className="bg-gray-100 dark:bg-black shadow-md dark:shadow-neutral-800 rounded-lg p-10 w-90 lg:w-full mx-auto lg:mx-0 order-2 transition-transform dark:hover:transition-transform duration-700 dark:hover:duration-700 dark:transition-transform dark:duration-700 hover:shadow-xl dark:hover:scale-100">
            <div className="grid grid-cols-2 lg:grid-cols-2 gap-4 lg:gap-8">
              {/* Education Section Educations Content */}
              <div>
                <div className="bg-black gap-2 dark:bg-white shadow-md dark:shadow-neutral-800 text-white dark:text-black rounded-md p-2 flex items-center text-left justify-center space-x-3">
                  <MdOutlineSchool className="text-2xl" />
                  Educations
                </div>

                <div className="mt-8">
                  {educationList.map(({ school, competence, years }, index) => (
                    <div
                      key={`${school} - ${index}`}
                      className="mb-4"
                    >
                      <h3 className="text-lg font-semibold text-[12px] md:text-[15px] lg:text-[16px] text-black dark:text-gray-200">{school}</h3>
                      <p className="text-gray-600 text-[10px] md:text-[15px] lg:text-[15px] dark:text-gray-300">{competence}</p>
                      <p className="text-gray-600 text-[10px] md:text-[15px] lg:text-[15px] dark:text-gray-300">{years}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Education Section Awards Content */}
              <div>
                <div className="bg-black gap-1 dark:bg-white shadow-md dark:shadow-neutral-800 text-white dark:text-black rounded-md py-2 px-4 flex items-center text-left justify-center space-x-3">
                  <AiFillTrophy className="text-2xl" />
                  Awards
                </div>

                <div className="mt-8">
                  {awardList.map(
                    ({ award, place, years }, index): React.ReactNode => (
                    <div
                      key={`${place} - ${index}`}
                      className="mb-4"
                    >
                      <h3 className="text-lg font-semibold text-[12px] md:text-[15px] lg:text-[16px] text-black dark:text-gray-200">{award}</h3>
                      <p className="text-gray-600 text-[10px] md:text-[15px] lg:text-[15px] dark:text-gray-300">{place}</p>
                      <p className="text-gray-600 text-[10px] md:text-[15px] lg:text-[15px] dark:text-gray-300">{years}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default EducationSectionComponent;
