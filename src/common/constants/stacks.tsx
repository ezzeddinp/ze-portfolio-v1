import { GrMysql } from "react-icons/gr";
import { FaJava } from 'react-icons/fa';
import {
  SiExpo,
  SiGithub,
  SiJavascript,
  SiNextdotjs,
  SiNodedotjs,
  SiReact,
  SiSupabase,
  SiTailwindcss,
  SiTypescript,
  SiPrisma,
  SiMongodb

} from 'react-icons/si';
import { TiWeatherPartlySunny } from "react-icons/ti";
import { SiAccuweather } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";

import sentinelHub from "@/images/project/s2c/icon/sh-api.png"
import Image from "next/image";

type stacksProps = {
  [key: string]: JSX.Element;
};

type StackPalette = {
  light: string
  dark: string
  accent: string
}

export const STACK_COLORS: Record<string, StackPalette> = {
  JavaScript: {
    light: 'rgba(247, 223, 30, 0.04)',
    dark: 'rgba(247, 223, 30, 0.14)',
    accent: 'rgba(247, 223, 30, 0.22)'
  },
  TypeScript: {
    light: 'rgba(49, 120, 198, 0.04)',
    dark: 'rgba(49, 120, 198, 0.16)',
    accent: 'rgba(49, 120, 198, 0.24)'
  },
  'NextJs': {
    light: 'rgba(24, 24, 27, 0.04)',
    dark: 'rgba(255, 255, 255, 0.1)',
    accent: 'rgba(24, 24, 27, 0.2)'
  },
  TailwindCSS: {
    light: 'rgba(13, 148, 136, 0.04)',
    dark: 'rgba(13, 148, 136, 0.18)',
    accent: 'rgba(45, 212, 191, 0.24)'
  },
  'React Native': {
    light: 'rgba(56, 189, 248, 0.04)',
    dark: 'rgba(56, 189, 248, 0.18)',
    accent: 'rgba(56, 189, 248, 0.26)'
  },
  'Node JS': {
    light: 'rgba(34, 197, 94, 0.04)',
    dark: 'rgba(34, 197, 94, 0.18)',
    accent: 'rgba(34, 197, 94, 0.26)'
  },
  Java: {
    light: 'rgba(249, 115, 22, 0.04)',
    dark: 'rgba(249, 115, 22, 0.18)',
    accent: 'rgba(249, 115, 22, 0.24)'
  },
  Github: {
    light: 'rgba(24, 24, 27, 0.04)',
    dark: 'rgba(255, 255, 255, 0.12)',
    accent: 'rgba(24, 24, 27, 0.18)'
  },
  MySQL: {
    light: 'rgba(59, 130, 246, 0.04)',
    dark: 'rgba(59, 130, 246, 0.16)',
    accent: 'rgba(59, 130, 246, 0.24)'
  },
  Supabase: {
    light: 'rgba(16, 185, 129, 0.04)',
    dark: 'rgba(16, 185, 129, 0.16)',
    accent: 'rgba(16, 185, 129, 0.24)'
  },
  MongoDB: {
    light: 'rgba(34, 197, 94, 0.04)',
    dark: 'rgba(34, 197, 94, 0.18)',
    accent: 'rgba(34, 197, 94, 0.28)'
  },
  Prisma: {
    light: 'rgba(20, 184, 166, 0.04)',
    dark: 'rgba(20, 184, 166, 0.18)',
    accent: 'rgba(20, 184, 166, 0.26)'
  },
  Expo: {
    light: 'rgba(15, 118, 110, 0.04)',
    dark: 'rgba(59, 130, 246, 0.16)',
    accent: 'rgba(59, 130, 246, 0.24)'
  }

}

const iconSize = '34px';
const shAPI = sentinelHub;

export const STACKS: stacksProps = {
  JavaScript: <SiJavascript size={iconSize} className="text-yellow-400" />,
  TypeScript: <SiTypescript size={iconSize} className="text-blue-400" />,
  'NextJs': <SiNextdotjs size={iconSize} className='text-black dark:text-white' />,
  TailwindCSS: <SiTailwindcss size={iconSize} className="text-cyan-300" />,
  'React Native': <SiReact size={iconSize} className="text-sky-600" />,
  'Node JS': <SiNodedotjs size={iconSize} className="text-green-600" />,
  Github: <SiGithub size={iconSize} className="text-black dark:text-white" />,
  Java: <FaJava size={iconSize} className='dark:text-white text-orange-800' />,
  MySQL: <GrMysql size={iconSize} className=' text-blue-600' />,
  Supabase: <SiSupabase size={iconSize} className="text-green-600" />,
  MongoDB: <SiMongodb size={iconSize} className="text-green-600" />,
  Prisma: <SiPrisma size={iconSize} className="text-black dark:text-white" />,
  'Sentinel Hub API': <img src={shAPI.src ?? shAPI} alt="Sentinel Hub" style={{ width: iconSize, height: iconSize }} />,
  'OpenMeteo API': <TiWeatherPartlySunny size={iconSize} className="text-black dark:text-white" />,
  'AccuWeather API': <SiAccuweather size={iconSize} className="text-orange-600 dark:text-orange-500"  />,
  Expo: <SiExpo size={iconSize} className="text-black dark:text-white" />,
  PostgreSQL: <BiLogoPostgresql size={iconSize} className="text-blue-700 dark:text-blue-600"  />
};
