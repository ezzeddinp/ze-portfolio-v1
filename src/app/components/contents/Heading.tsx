// Container.tsx
import React, { ReactNode } from "react";

interface HeadingProps {
    children: ReactNode; // Use ReactNode type for children prop
}

const Heading = ({ children }: HeadingProps) => {
    return (
        <div className=" pt-20">
            {/* put dark:text-zinc-200 below */}
            <div className="font-sora leading-8 text-zinc-600">
                {children}
            </div>
        </div>
    );
};

export default Heading;
