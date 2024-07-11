import { BiLogoPostgresql } from 'react-icons/bi';
import { BsFillBootstrapFill } from 'react-icons/bs';
import {
  SiExpo,
  SiGithub,
  SiJavascript,
  SiNextdotjs,
  SiNodedotjs,
  SiReact,
  SiTailwindcss,
  SiTypescript,

} from 'react-icons/si';

type stacksProps = {
  [key: string]: JSX.Element;
};

const iconSize = '40px';

export const STACKS: stacksProps = {
  JavaScript: <SiJavascript size={iconSize} className="text-yellow-400" />,
  TypeScript: <SiTypescript size={iconSize} className="text-blue-400" />,
  'Next.js': <SiNextdotjs size={iconSize} className='text-black dark:text-white' />,
  TailwindCSS: <SiTailwindcss size={iconSize} className="text-cyan-300" />,
  'React Native': <SiReact size={iconSize} className="text-sky-600" />,
  'Node JS': <SiNodedotjs size={iconSize} className="text-green-600" />,
};
