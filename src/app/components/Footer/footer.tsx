// import SectionHeading from '@/common/components/elements/SectionHeading'

"use client"
import React from 'react'
import SectionSubHeading from '@/common/components/elements/SectionSubHeading'

import { BiSolidUpArrow } from "react-icons/bi";
import { PiDotOutlineFill } from 'react-icons/pi';
import Breakline from '@/common/components/elements/Breakline';

export default function footer() {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }

    return (
        <section className="shadow-inner py-[20px] lg:px-[80px] px-[20px]">
            <div className="flex lg:flex-row flex-row justify-between items-center lg:px-5 px-2 ">
                {/* <SectionHeading
        className="text-3xl font-bold items-center justify-center"
        title="Skills"
      /> */}
                <SectionSubHeading>
                    <div className="font-sora text-black dark:text-white flex flex-wrap flex-row items-center justify-center"> {/* Add flex-wrap and gap classes */}
                        <BiSolidUpArrow className='cursor-pointer' size={13} onClick={scrollToTop} />
                        <PiDotOutlineFill />
                        <a className='text-[16px] lg:text-[14px]' target="_blank" href="https://www.linkedin.com/in/mohammad-ezzeddin-pratama/" rel="noopener noreferer">LinkedIn</a>
                        <PiDotOutlineFill />
                        <a className='text-[16px] lg:text-[14px]' target="_blank" href="/Mohammad_Ezzeddin_Pratama_CV_ATS.pdf">Resume</a>
                    </div>
                </SectionSubHeading>
                <SectionSubHeading>
                    <div className="font-sora text-neutral-600 flex flex-wrap flex-col items-start justify-center text-[16px] lg:text-[14px] "> {/* Add flex-wrap and gap classes */}
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
