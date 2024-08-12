import { GrMysql } from "react-icons/gr";
import { FaJava } from 'react-icons/fa';
import {
  SiExpo,
  SiGithub,
  SiJavascript,
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiReact,
  SiSupabase,
  SiTailwindcss,
  SiTypescript

} from 'react-icons/si';


type stacksProps = {
  [key: string]: JSX.Element;
};

const iconSize = '34px';

export const STACKS: stacksProps = {
  JavaScript: <SiJavascript size={iconSize} className="text-yellow-400" />,
  TypeScript: <SiTypescript size={iconSize} className="text-blue-400" />,
  'Next.js': <SiNextdotjs size={iconSize} className='text-black dark:text-white' />,
  TailwindCSS: <SiTailwindcss size={iconSize} className="text-cyan-300" />,
  'React Native': <SiReact size={iconSize} className="text-sky-600" />,
  'Node JS': <SiNodedotjs size={iconSize} className="text-green-600" />,
  Github: <SiGithub size={iconSize} className="text-black dark:text-white" />,
  Java: <FaJava size={iconSize} className='dark:text-white text-orange-800' />,
  MySQL: <GrMysql size={iconSize} className=' text-blue-600' />,
  Supabase: <SiSupabase size={iconSize} className="text-green-600" />
};
