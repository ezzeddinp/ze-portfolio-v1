// "use client";

// import React from "react";
// import { motion } from "framer-motion";
// import { AiFillTrophy } from "react-icons/ai";
// import { MdOutlineSchool } from "react-icons/md";
// import { educationList } from "@/common/constants/education";
// import { awardList } from "@/common/constants/award";
// import Image from "next/image";

// const transition = { duration: 0.5, ease: "easeInOut" };

// function EducationSectionComponent(): JSX.Element {
//   // Combine education and awards, then sort by year (newest first)
//   const timelineItems = [...educationList, ...awardList].sort((a, b) => {
//     const yearA = parseInt(a.years.split('-')[1] || a.years);
//     const yearB = parseInt(b.years.split('-')[1] || b.years);
//     return yearB - yearA;
//   });

//   return (
//     <div className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-black text-black dark:text-white">
//       <motion.div
//         initial={{ opacity: 0 }}
//         whileInView={{ opacity: 1 }}
//         transition={transition}
//         className="max-w-4xl mx-auto"
//       >
//         <h2 className="text-4xl font-extrabold text-center mb-12">
//           My Journey
//         </h2>

//         <div className="relative">
//           {/* Vertical line */}
//           <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gray-200 dark:bg-gray-700"></div>

//           {timelineItems.map((item, index) => {
//             const isEducation = 'school' in item;
//             const Icon = isEducation ? MdOutlineSchool : AiFillTrophy;
//             const title = isEducation ? item.school : item.award;
//             const subtitle = isEducation ? item.competence : item.place;
//             const logo = isEducation ? `/images/education/${item.school.toLowerCase().replace(/ /g, '-')}.png` : `/images/awards/${item.award.toLowerCase().replace(/ /g, '-')}.png`;

//             return (
//               <motion.div
//                 key={`${title}-${index}`}
//                 initial={{ y: 20, opacity: 0 }}
//                 whileInView={{ y: 0, opacity: 1 }}
//                 transition={{ delay: index * 0.1 }}
//                 className={`mb-12 flex ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
//               >
//                 <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8'}`}>
//                   <div className="bg-white dark:bg-white rounded-lg shadow-lg p-6 inline-block border border-gray-200 dark:border-black hover:shadow-xl transition-shadow duration-300">
//                     <div className="flex items-center mb-4 justify-center">
//                       <Image src={logo} alt={title} width={60} height={60} className="rounded-full" />
//                     </div>
//                     <h4 className="text-xl font-semibold mb-2 text-white/80 dark:text-black ">{title}</h4>
//                     <p className="text-white/80 dark:text-black mb-1">{subtitle}</p>
//                     <p className="text-sm text-white/80 dark:text-black">{item.years}</p>
//                   </div>
//                 </div>
//                 <div className="w-1/2 relative">
//                   <div className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 w-4 h-4 bg-white dark:bg-black border-4 border-gray-300 dark:border-gray-600 rounded-full"></div>
//                   <Icon className={`absolute top-1/2 transform -translate-y-1/2 text-2xl ${index % 2 === 0 ? '-left-3' : '-right-3'} text-blue-500`} />
//                 </div>
//               </motion.div>
//             );
//           })}
//         </div>
//       </motion.div>
//     </div>
//   );
// }

// export default EducationSectionComponent;


"use client";

import React from "react";
function UnderDevelopmentPage(): JSX.Element {
  return (
    <div className="flex items-center justify-center min-h-20 px-4 py-2 overflow-y-hidden overflow-hidden">
      <div
        className="text-center max-w-lg mx-auto items-center justify-center"
      >
        <h1
          className="text-4xl font-extrabold mb-6 text-black dark:text-white"
        >
          Under Development
        </h1>
        <p
          className="text-sm text-black/80 dark:text-white/80 "
        >
          Currently building exciting new features for education and awards. Stay tuned!
        </p>
      </div>
    </div>
  );
}

export default UnderDevelopmentPage;
