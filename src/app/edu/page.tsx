import React from 'react';
import IdCard from '../components/IdCard';
import { TimelineDemo } from '@/components/ui/timeline-demo';

export default function EducationPage() {
    return (
        <main className="flex pt-0 lg:py-[70px] lg:flex-row items-center justify-center max-w-2xl lg:pt-0 mx-auto lg:space-x-4 lg:min-h-screen">
            <div className='flex-1 h-full'>
                <TimelineDemo />
            </div>
        </main>
    );
}

// // versi ada IDcard:
// export default function EducationPage() {
//     return (
//         <main className="flex flex-col pt-0 lg:py-[70px] lg:flex-row items-center justify-center max-w-2xl lg:max-w-7xl lg:pt-0 mx-auto lg:space-x-4 lg:h-screen">
//             {/* Left column with IdCard */}
//             <div className='flex-shrink-0 w-full lg:w-[300px] flex justify-center items-center'>
//                 {/* Sticky container for IdCard */}
//                 <div className='h-96 w-96 lg:h-screen sticky top-0 pt-[4px] z-10'>
//                     <IdCard />
//                 </div>
//             </div>

//             {/* Right column with TimelineDemo */}
//             <div className='flex-1 lg:overflow-y-auto h-full'>
//                 <TimelineDemo />
//             </div>
//         </main>
//     );
// }

// export default function EducationPage() {
//     return (
//         <main className="flex flex-col pt-[70px] lg:py-[70px] lg:flex-row items-center justify-center max-w-2xl lg:max-w-7xl lg:pt-0 mx-auto lg:space-x-4 h-screen">
//             {/* Left column with IdCard */}
//             <div className='flex-shrink-0 w-[300px]'>
//                 {/* Sticky container for IdCard */}
//                 <div className='h-screen sticky top-0'>
//                     <IdCard />
//                 </div>
//             </div>

//             {/* Right column with TimelineDemo */}
//             <div className='flex-1 overflow-y-auto h-full'>
//                 <TimelineDemo />
//             </div>
//         </main>
//     );
// }