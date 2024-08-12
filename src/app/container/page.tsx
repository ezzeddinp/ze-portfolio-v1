// Container.tsx
import React, { ReactNode } from "react";

interface ContainerProps {
    children: ReactNode; // Use ReactNode type for children prop
    id?: string;
}

const Container = ({ children, id }: ContainerProps) => {
    return (
        <div id={id} className="flex mx-auto justify-center items-center text-center">
            <div className="mx-auto">
                {children}
            </div>
        </div>
    );
};

export default Container;
