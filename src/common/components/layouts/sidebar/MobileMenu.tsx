import { motion } from 'framer-motion'
import { FC } from 'react'

import { MENU_ITEMS } from '@/common/constants/menu'
import { BsInstagram as InstagramIcon, BsGithub as GithubIcon, } from 'react-icons/bs'
import { Poppins} from 'next/font/google';
import Breakline from '../../elements/Breakline'
import Menu from './Menu'
import Link from 'next/link';

const P400 = Poppins({ weight: "400", subsets: ["latin"] });
const MobileMenu: FC = () => {
  const filterdMenu = MENU_ITEMS?.filter(item => item?.isShow)
  return (
    <motion.div
      className="my-3 flex h-screen flex-col z-50"
      initial={{ y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div>
        <Breakline className="mt-2" />
        <Menu list={filterdMenu} />
        <div className={`${P400.className} text-sm`}>
          <div className='pt-[75px] items-center'>
            <Link target="_blank" href="https://www.instagram.com/ezzeddinp" className='flex justify-end max-w-[270px] gap-3 text-black dark:text-neutral-500'>
              <p>Instagram</p>
              <InstagramIcon size={25} className=' dark:text-white' />
            </Link>
            <Breakline className="mt-2" />
          </div>
          <div className='pt-3 items-center'>
            <Link target="_blank" href="https://github.com/ezzeddinp" className='flex justify-end max-w-[270px] gap-3 text-black dark:text-neutral-500'>
              <p>Github</p>
              <GithubIcon size={25} className=' dark:text-white'/>
            </Link>
            <Breakline className="mt-2" />
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default MobileMenu
