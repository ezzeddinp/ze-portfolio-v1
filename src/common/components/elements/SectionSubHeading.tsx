import { ReactNode } from 'react';

interface SectionSubHeadingProps {
  children?: ReactNode;
}

export default function SectionSubHeading({ children }: SectionSubHeadingProps) {
  return (
    <div className="flex flex-col lg:flex-col lg:items-center dark:text-neutral-200 item-center justify-center">
      {children}
    </div>
  );
}
