// Container.tsx
import React, { ReactNode } from "react";

interface ContainerProps {
    children: ReactNode; // Use ReactNode type for children prop
}

const Container = ({ children }: ContainerProps) => {
    return (
        <div className="flex mx-auto justify-center items-center text-center">
            <div className="mx-auto">
                {children}
            </div>
        </div>
    );
};

export default Container;
