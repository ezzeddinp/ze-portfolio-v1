// SecondContainer.tsx
import React from "react";
import Container from "@/app/container/page";
import Image from "next/image";

const Content = () => {
    return (
        <>
            <Container>
                <div className="flex flex-col justify-center items-center pt-20">
                    {/* Add your Content for the second container here */}
                </div>
            </Container>

            <div >
                <div className="grid lg:max-h-[550px] max-h-[550px] grid-cols-8 grid-rows-4 py-4 sm:gap-2">
                    <div className="col-span-4 row-span-2 md:col-span-2 p-2 lg:p-0 relative group">
                        <Image
                            className="h-full w-full object-cover shadow-xl sm:rounded-sm transition duration-500 group-hover:scale-105 group-hover:brightness-50"
                            loading="eager"
                            sizes="(min-width: 768px) 25vw, 50vw"
                            src="/IMG_4899.jpg"
                            width={300}
                            height={300}
                            alt="Alternative text for the image"
                        />
                        <div className="items-start justify-start absolute bottom-0 left-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 text-white ">
                            <h3 className="text-lg font-bold text-start">Title 1</h3>
                            <p className="text-sm">Description</p>
                        </div>
                    </div>

                    <div className="col-span-4 row-span-2 md:col-span-2 p-2 lg:p-0 relative group">
                        <Image
                            className="h-full w-full object-cover shadow-xl sm:rounded-sm transition duration-500 group-hover:scale-105 group-hover:brightness-50"
                            loading="eager"
                            sizes="(min-width: 768px) 25vw, 50vw"
                            src="/2.gif"
                            width={300}
                            height={300}
                            alt="Alternative text for the image"
                        />
                        <div className="absolute bottom-0 left-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 text-white ">
                            <h3 className="text-lg font-bold text-start">Title 2</h3>
                            <p className="text-sm">Description</p>
                        </div>
                    </div>

                    <div className="col-span-4 row-span-4 p-2 lg:p-0 relative group">
                        <Image
                            alt="image"
                            src="/IMG_4902.jpg"
                            width={300}
                            height={300}
                            className="h-full w-full object-cover shadow-xl sm:rounded-sm transition duration-500 group-hover:scale-105 group-hover:brightness-50"
                            loading="eager"
                        />
                        <div className="absolute bottom-0 left-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 text-white ">
                            <h3 className="text-lg font-bold text-start">Title 3</h3>
                            <p className="text-sm">Description</p>
                        </div>
                    </div>

                    <div className="col-span-4 row-span-4 md:row-span-2 md:row-start-3 p-2 lg:p-0 relative group">
                        <Image
                            alt="image"
                            src="/IMG_4901.jpg"
                            width={300}
                            height={300}
                            className="h-full w-full object-cover shadow-xl sm:rounded-sm transition duration-500 group-hover:scale-105 group-hover:brightness-50"
                        />
                        <div className="absolute bottom-0 left-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 text-white ">
                            <h3 className="text-lg font-bold text-start">Title 4</h3>
                            <p className="text-sm">Description</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Content;
