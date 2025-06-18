"use client"
import React from 'react'
import SectionSubHeading from '@/common/components/elements/SectionSubHeading'
import { BiSolidUpArrow } from "react-icons/bi";
import { PiDotOutlineFill } from 'react-icons/pi';
// import clsxm from '@/common/libs/clsxm';

export default function Footer() {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }

    return (
        <section className="relative border-t-[1px] border-white/10 py-8 pt-16 mt-48 lg:pb-10 lg:pt-10 lg:mt-40 px-4 lg:px-14 max-w-full">
            {/* Background Gradient */}
            <div className="relative flex flex-row justify-between items-end gap-4 lg:px-5 px-2">
                {/* Subheadings and Content */}
                <SectionSubHeading>
                    <div className="font-normal text-black dark:text-white/80  flex flex-wrap gap-2 items-center justify-center">
                        <BiSolidUpArrow className='cursor-pointer' size={15} onClick={scrollToTop} />
                        <PiDotOutlineFill />
                        <a className='text-sm lg:text-[15px]' target="_blank" href="https://www.linkedin.com/in/mohammad-ezzeddin-pratama/" rel="noopener noreferrer">LinkedIn</a>
                        <PiDotOutlineFill />
                        <a className='text-sm lg:text-[15px]' target="_blank" href="/CV ATS 2024 Mohammad Ezzeddin Pratama (1).pdf">Resume</a>
                    </div>
                </SectionSubHeading>
                <SectionSubHeading>
                    <div className="font-extralight text-neutral-600 dark:text-neutral-400 flex flex-wrap flex-col items-start justify-center text-sm lg:text-[15px]">
                        <p>Let&apos;s chat</p>
                        <a
                            href="mailto:ezzeddinpratama04@gmail.com?subject=Let's%20Chat&body=Hi%20Ezzeddin,%0D%0A%0D%0AI'd%20like%20to%20chat%20with%20you%20about..."
                            className='text-black dark:text-white cursor-pointer hover:underline'
                        >
                            ezzeddin
                        </a>
                    </div>
                </SectionSubHeading>
            </div>
        </section>
    )
}
{/* <div className={clsxm([
            'w-full max-w-[650px] h-[400px] rounded-full overflow-hidden',
            'dark:bg-gradient-to-r dark:from-blue-800 dark:to-[#0f3324]/30 blur-[150px]',
            'absolute bottom-[40%] -left-[5%] transform -translate-x-1/2 -translate-y-1/2 z-[-2]', // Centered
        ])} /> */}
