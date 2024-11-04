import { ReactNode } from 'react';
import {Poppins} from 'next/font/google';
const P600 = Poppins({ weight: "300", subsets: ["latin"] });

interface SectionHeadingProps {
  title: string;
  className?: string;
  icon?: ReactNode;
}

export default function SectionHeading({ title, icon, className = '' }: SectionHeadingProps) {
  return (
    <div className={`${P600.className} pb-[1px] flex items-center gap-1 text-3xl font-bold text-neutral-800 dark:text-neutral-300 ${className}`}>
      {icon && <>{icon}</>}
      <h2 className="capitalize">{title}</h2>
    </div>
  );
}
