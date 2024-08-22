// "use client";

// import React from "react";
// import { motion } from "framer-motion";

// function IntroLogicSkeleton(): React.JSX.Element {
//   return (
//     <motion.div
//       initial={{ opacity: 0.6 }}
//       animate={{ opacity: 1 }}
//       transition={{ duration: 0.05 }}
//       className="flex relative antialiased flex-col justify-start pb-[115px] pr-10"
//     >
//       {/* Skeleton for the heading */}
//       <div className="flex flex-col space-y-2 mb-[10px]">
//         <div className="h-12 w-72 animate-pulse rounded bg-neutral-300 dark:bg-neutral-700"></div>
//         <div className="h-12 w-52 animate-pulse rounded bg-neutral-300 dark:bg-neutral-700"></div>
//         <div className="h-12 w-52 animate-pulse rounded bg-neutral-300 dark:bg-neutral-700"></div>
//       </div>

//       {/* Skeleton for the text generate effect */}
//       <div className="space-y-3 mt-8">
//         <div className="h-4 w-3/5 animate-pulse rounded bg-neutral-300 dark:bg-neutral-700"></div>
//         <div className="h-4 w-3/4 animate-pulse rounded bg-neutral-300 dark:bg-neutral-700"></div>
//         <div className="h-4 w-2/3 animate-pulse rounded bg-neutral-300 dark:bg-neutral-700"></div>
//         <div className="h-4 w-1/4 animate-pulse rounded bg-neutral-300 dark:bg-neutral-700"></div>
//       </div>

//       {/* Skeleton for the links */}
//       <div className="flex flex-col gap-3 md:flex-row md:gap-10 mt-6">
//         <div className="h-8 w-32 animate-pulse rounded bg-neutral-300 dark:bg-neutral-700"></div>
//         <div className="h-8 w-32 animate-pulse rounded bg-neutral-300 dark:bg-neutral-700"></div>
//       </div>
//     </motion.div>
//   );
// }

// export default IntroLogicSkeleton;
