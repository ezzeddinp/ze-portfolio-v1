// Container.tsx
"use client"
import React, { ReactNode } from "react";

interface ContainerProps {
    children: ReactNode; // Use ReactNode type for children prop
}

const Container = ({ children }: ContainerProps) => {
    return (
        <div className="relative px-6 sm:px-8 lg:px-12">
            <div className="mx-auto lg:max-w-5xl">
                {children}
            </div>
        </div>
    );
};

export default Container;
