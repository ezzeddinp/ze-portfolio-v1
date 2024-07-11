'use client'

import React, { useEffect } from "react";
import Heading from "../components/contents/Heading";
import Link from "../components/Link";
import { motion, useAnimation } from "framer-motion";
import { Infinity } from "lucide-react";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";

// const words = () => {
// 	return (
// 		<motion.div className="flex-grow max-w-3xl">
// 			<motion.p className="text-justify text-[15px]" slot="description">
// 				deeply inspired by the transformative <b><i>power of innovations</i></b> that shape my constantly evolving world.
// 				My ultimate goal is to kindle a sense of wonder and fascination in the hearts of those who venture into
// 				the vast digital realm. As I explore this captivating world of boundless possibilities, my mission becomes clear
// 			</motion.p>
// 		</motion.div>
// 	)
// }

const words = 
			'deeply inspired by the transformative power of innovations that shape my constantly evolving world.\nMy ultimate goal is to kindle a sense of wonder and fascination in the hearts of those who venture into \nthe vast digital realm. As I explore this captivating world of boundless possibilities, my mission becomes clear'


function MainPage(): React.JSX.Element {
	const controls = useAnimation();


	const sliderVariants = {
		initial: {
			x: "95%",
		},
		animate: {
			x: "-160%",
			transition: {
				repeat: Infinity,
				duration: 10,
				ease: "linear"
			},
		},
	};

	useEffect(() => {
		// Trigger the animation when the component mounts
		controls.start("animate");
	}, [controls]);

	return (
		<>
			<Heading>
				<motion.div
					initial={{ opacity: 0.6, scrollBehavior: "smooth" }}
					animate={{ opacity: 1, transition: { duration: 0.1 } }}
					transition={{ duration: 0.1 }} className="flex flex-col justify-start pt-10 pb-[5px] pl-10 pr-10 md:pt-20 md:pl-10 lg:pl-40">
					<motion.h1 className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-800 via-zinc-400 to-zinc-100 font-extrabold text-[50px] md:text-6xl pb-5 pointer-events-none leading-[50px]">Mohammad <br /> Ezzeddin <br /> Pratama </motion.h1>
					<TextGenerateEffect words={words} />
					<motion.div className="flex flex-col gap-3 md:flex-row md:gap-10">
						<Link text="Project" url="/project" />
						<Link text="See More Blogs" url="/project" />
					</motion.div>
				</motion.div>
				<motion.div
					className="flex flex-col opacity-95  dark:text-neutral-700 font-semibold text-[30px] md:text-[75px] lg:text-[100px] pt-[10px] pb-20 pl-10 pr-10 md:pt-20 md:pl-10 lg:pl-40 whitespace-nowrap bottom-10 py-[80px] w-[100%] overflow-hidden"
					variants={sliderVariants}
					transition={{ ease: "linear", duration: 10, repeat: Infinity }}
					initial={{ x: "95%" }}
					animate={{ x: "-160%" }} // Use the "animate" variant
				>
					Software Engineer
				</motion.div>
			</Heading>
		</>
	);
}

export default MainPage;