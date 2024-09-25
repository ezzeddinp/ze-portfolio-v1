"use client";

import dynamic from 'next/dynamic';
import { usePathname, useSearchParams } from 'next/navigation';
import AOS from 'aos';
import 'aos/dist/aos.css';
import React, { ReactNode, useEffect } from 'react';
import MobileHeader from './MobileHeader';

const Notif = dynamic(() => import('@/common/components/elements/Notif'), { ssr: false });

interface LayoutsProps {
  children: ReactNode;
}

export default function Layouts({ children }: LayoutsProps) {
  const pathName = usePathname();
  const searchParams = useSearchParams();
  const readMode = searchParams.get('read-mode');

  const hideSidebar = ['/me', '/board'].includes(pathName) || readMode === 'true';

  useEffect(() => {
    AOS.init({
      duration: 800,
      delay: 50
    });
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Container for sticky header and main content */}
      <div className="flex flex-col lg:flex-row flex-1">
        {/* Conditionally render MobileHeader based on pathName and readMode */}
        {!hideSidebar && (
          <div className="w-full lg:w-auto flex-shrink-0">
            <MobileHeader />
          </div>
        )}
        {/* Main content area */}
        <main className="flex-1 pt-[70px]"> {/* Add padding top to accommodate the fixed header */}
          {children}
        </main>
      </div>
      <Notif />
    </div>
  );
}
