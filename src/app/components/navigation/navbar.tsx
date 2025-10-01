'use client'

import React, { useMemo, useState } from "react";
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";
import { cn } from "../../lib/utils";
import { ModeToggle } from "../theme-toggle";
import NewBadge from "@/common/components/elements/NewBadge";
// import Logo from "../Header/Logo";

export default function MainNav({
	className,
	...props
}: React.HTMLAttributes<HTMLElement>) {
	const pathname = usePathname();
	const params = useParams();

	const routes = useMemo(() => ([
		{
			href: `/`,
			label: "Home",
			active: pathname === `/${params.storeNav}/projects`,
		},
		{
			href: '/blog',
			label: "Blog",
			active: pathname === `/${params.storeNav}/blogs`,
			badge: "Blog updates",
		},
		{
			href: '/edu',
			label: "Education",
			active: pathname === `/${params.storeNav}/listofposts`,
		},
	]), [params.storeNav, pathname]);

	const [click, setClick] = useState(false);

	const toggle = () => {
		setClick(!click);
	};

	return (
		<>
			<div
				className={`hidden z-[51] lg:flex fixed top-3 w-max h-max rounded-full backdrop-blur-lg  flex-row justify-center text-center items-center right-1/2 translate-x-1/2 ${className}`}
				{...props}
			>
				{/* <Logo /> */}

				<button
					className="inline-block z-50"
					onClick={toggle}
					aria-label="Hamburger Menu"
				>
					<div className="w-6 cursor-pointer transition-all ease duration-300">
						<div className="relative">
							<span
								className={`absolute top-0 inline-block w-full h-0.5 bg-dark dark:bg-light rounded transition-all ease duration-200 ${click ? "rotate(-45deg) translateY(0)" : "rotate(0deg) translateY(6px)"
									}`}
							></span>
							<span
								className={`absolute top-0 inline-block w-full h-0.5 bg-dark dark:bg-light rounded transition-all ease duration-200 ${click ? 0 : 1
									}`}
							></span>
							<span
								className={`absolute top-0 inline-block w-full h-0.5 bg-dark dark:bg-light rounded transition-all ease duration-200 ${click ? "rotate(45deg) translateY(0)" : "rotate(0deg) translateY(-6px)"
									}`}
							></span>
						</div>
					</div>
				</button>

				<nav
					className={`
			flex flex-row gap-5 text-2xl p-[6px] px-[20px] md:px-[40px] lg:px-[40px] justify-center items-center text-center
			${click ? "top-1rem" : "-top-5rem"}
		  `}

				>
					{routes.map((route) => (
						<Link
							key={route.href}
							href={route.href}
							className={cn(
								"text-[12px] lg:text-sm font-medium transition-colors hover:text-black hover:duration-500 dark:hover:text-white dark:hover:duration-500",
								route.active ? "text-white dark:text-black" : "text-neutral-400"
							)}
						>
							<span className="flex items-center gap-1">
								{route.label}
								{route.badge && route.label === "Blog" && (
									<NewBadge label={route.badge} />
								)}
							</span>
						</Link>
					))}

					<ModeToggle />
				</nav>
			</div>
		</>
	);
}
