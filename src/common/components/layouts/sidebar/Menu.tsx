import React from 'react'

import { MenuItemProps } from '@/types/menu'

import MenuItem from './MenuItem'
import Breakline from '../../elements/Breakline'
import { Poppins } from 'next/font/google';

const P600 = Poppins({ weight: "600", subsets: ["latin"] });


type MenuProps = {
  title?: string
  list: MenuItemProps[]
}
export default function Menu({ title, list }: MenuProps) {
  return (
    <div className={`${P600.className} flex flex-col space-y-1 pt-[180px] md:pt-[75px] lg:p-0 justify-end text-3xl md:text-lg`}>
      {title && (
        <div className="mb-2 ml-2 mt-1 hidden text-neutral-600 dark:text-neutral-500 lg:block">
          {title}
        </div>
      )}
      {list?.map((item: MenuItemProps, index: number) =>
        <>
          <MenuItem key={index} {...item} className='items-center' />
          <Breakline />
        </>
      )}
    </div>
  )
}
