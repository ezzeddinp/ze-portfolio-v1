"use client";

import Link from 'next/link';
import clsx from 'clsx';
import { AnimatePresence, motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import { MdVerified as VerifiedIcon } from 'react-icons/md';
import { useMenu } from '../../../../stores/menu';
import useIsMobile from '../../../../hooks/useIsMobile';
import { ModeToggle } from '@/app/components/theme-toggle';
import MobileMenu from './sidebar/MobileMenu';
import MobileMenuButton from './sidebar/MobileMenuButton';
import TooltipVerified from '../elements/TooltipVerified';

const menuVariants = {
  hidden: { x: '100%', opacity: 0 },
  visible: { x: '0%', opacity: 1 },
  exit: { x: '100%', opacity: 0 },
};

export default function MobileHeader(): JSX.Element {
  const isMobile = useIsMobile();
  const { isOpen, toggleMenu } = useMenu();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'auto';
  }, [isOpen]);

  return (
    <div
      className={clsx(
        'fixed top-0 left-0 right-0 flex flex-col rounded-b-md px-[12.5px] py-[15px] shadow-sm lg:hidden z-50 transition-all duration-300',
        isScrolled ? 'bg-white dark:bg-black dark:bg-opacity-90' : 'bg-transparent'
      )}
    >
      <motion.div
        className={`flex w-full justify-between ${isOpen ? 'items-start' : 'items-center'}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <div className="flex-row space-x-3">
          <div className="mt-1 ml-2 flex items-center justify-center gap-2">
            <Link href="/" passHref>
              <h2 className="font-serif flex-grow whitespace-nowrap text-black dark:text-white/75 text-md font-medium lg:text-xl">.zn</h2>
            </Link>
            {/* <TooltipVerified title="Verified">
              <VerifiedIcon size={18} className="text-blue-400" />
            </TooltipVerified> */}
          </div>
        </div>
        {isMobile && (
          <div className={clsx(
            'mt-1 flex items-center gap-5 lg:hidden',
            isOpen && 'flex-row !items-end justify-between'
          )}>
            <MobileMenuButton expandMenu={isOpen} setExpandMenu={toggleMenu} />
            <ModeToggle />
          </div>
        )}
      </motion.div>
      {isMobile && (
        <AnimatePresence>
          {isOpen && (
            <>
              <motion.div
                className="fixed inset-0 bg-black/50 dark:backdrop-blur-sm bg-opacity-65 z-50"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={toggleMenu} // Close the menu when clicking outside of it
              />
              <motion.div
                className="fixed top-0 right-0 max-w-xs w-full h-full bg-white dark:bg-black shadow-lg z-50"
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={menuVariants}
                transition={{ duration: 0.3 }}
              >
                <div className="flex justify-end items-center p-4 pr-[15px] md:pr-[80px] -mb-[16px]">
                  <MobileMenuButton expandMenu={isOpen} setExpandMenu={toggleMenu} />
                </div>
                <MobileMenu />
              </motion.div>
            </>
          )}
        </AnimatePresence>
      )}
    </div>
  );
}
