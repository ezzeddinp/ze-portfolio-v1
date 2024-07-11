'use client'

import React, { useRef, useState } from 'react';
import { useSpring, animated } from 'react-spring';
import { useDrag } from 'react-use-gesture';
import Link from 'next/link';
import Image from 'next/image';
import SectionHeading from '@/common/components/elements/SectionHeading';
import { CarouselContent } from '@/components/ui/carousel';
import { BentoGridItem } from '@/components/ui/gento.grid';

const carouselProducts = [
    {
        id: 1,
        name: "Acme Circles T-Shirt",
        price: "$20.00 USD",
        imageUrl: "/IMG_4899.JPG",
        link: "https://demo.vercel.store/product/acme-geometric-circles-tshirt"
      },
      {
        id: 2,
        name: "Acme Drawstring Bag",
        price: "$12.00 USD",
        imageUrl: "/IMG_4900.JPG",
        link: "https://demo.vercel.store/product/acme-drawstring-bag"
      },
      {
        id: 3,
        name: "Acme Cup",
        price: "$15.00 USD",
        imageUrl: "/IMG_4902.JPG",
        link: "https://demo.vercel.store/product/acme-cup"
      },
      {
        id: 4,
        name: "Acme Circles T-Shirt",
        price: "$20.00 USD",
        imageUrl: "/IMG_4904.JPG",
        link: "https://demo.vercel.store/product/acme-geometric-circles-tshirt"
      },
      {
        id: 5,
        name: "Acme Drawstring Bag",
        price: "$12.00 USD",
        imageUrl: "/IMG_4901.JPG",
        link: "https://demo.vercel.store/product/acme-drawstring-bag"
      },
      {
        id: 6,
        name: "Acme Cup",
        price: "$15.00 USD",
        imageUrl: "/Gosha.png",
        link: "https://demo.vercel.store/product/acme-cup"
      },
];

const Carousel = () => {
    const [slideIndex, setSlideIndex] = useState(0);
    const totalSlides = carouselProducts.length;
    const [{ x }, set] = useSpring(() => ({ x: 0 }));

    const bind = useDrag(({ down, movement: [mx], direction: [xDir], distance, cancel }) => {
        if (down && distance > 50) {
            const direction = xDir > 0 ? 1 : -1;
            updateSlide(direction);
            cancel(); // Prevent default behavior
        } else {
            set({ x: -slideIndex * 100 + (down ? mx : 0) });
        }
    });

    const updateSlide = (direction:any) => {
        let newSlideIndex = slideIndex + direction;
        if (newSlideIndex < 0) {
            newSlideIndex = 0;
        } else if (newSlideIndex >= totalSlides) {
            newSlideIndex = totalSlides - 1;
        }
        setSlideIndex(newSlideIndex);
        set({ x: -newSlideIndex * 100 });
    };

    return (
        <div className="w-full cursor-grab overflow-hidden pb-6 relative pt-5 mt-10">
            <SectionHeading className='item-start justify-start text-left text-3xl font-bold' title="Skills"/>
{/* 
            <animated.ul
                className="animate-carousel flex flex-row"
                style={{ transform: x.to((x) => `translateX(${Math.min(0, Math.max(-slideIndex * 100, x))}%)`) }}
                {...bind()}
            >
                {carouselProducts.map((product, i) => (
                    <li
                        key={`${product.id}-${i}`}
                        className="group relative border-2 border-transparent hover:border-blue-500 transition-all ease-in-out duration-500 bg-black aspect-square h-[30vh] max-h-[275px] w-2/3 max-w-[475px] flex-none md:w-1/3"
                    >
                        <Link href={product.link} passHref>
                            <div className="relative h-full w-full block cursor-pointer">
                                <Image
                                    alt={product.name}
                                    src={product.imageUrl}
                                    layout="fill"
                                    objectFit="cover"
                                    className="flex flex-row flex-nowrap transition-transform duration-500 ease-in-out group-hover:scale-110"
                                />
                                <div className="absolute bottom-0 left-0 right-0 p-4 bg-black/70 text-white opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100">
                                    <p className="text-sm">{product.name}</p>
                                    <p className="text-lg font-semibold">{product.price}</p>
                                </div>
                            </div>
                        </Link>
                    </li>
                ))}
            </animated.ul> */}
        </div>
    );
};

export default Carousel;