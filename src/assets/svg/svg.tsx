/// <reference types="vite-plugin-svgr/client" />
import ReactIcon from "./react.svg?react";
import NextIcon from "./next.svg?react";
import ViteIcon from "./vite.svg?react";
import HmmIcon from "./hmm.svg?react";
import TSIcon from "./typescript.svg?react";
import HTML5Icon from "./html5.svg?react";
import CSS3Icon from "./css3.svg?react";
import JavascriptIcon from "./javascript.svg?react";
import GitIcon from "./git.svg?react";
import GithubIcon from "./github.svg?react";
import GitlabIcon from "./gitlab.svg?react";
import NetlifyIcon from "./netlify.svg?react";
import RailwayIcon from "./railway.svg?react";
import CssModuleIcon from "./cssmodules.svg?react";
import StyledComponentsIcon from "./styledcomponents.svg?react";
import EmotionIcon from "./emotion.svg?react";


// svgObj 객체 정의
const svgObj = {
  react: ReactIcon,
  next: NextIcon,
  vite: ViteIcon,
  hmm: HmmIcon,
  typescript: TSIcon,
  html: HTML5Icon,
  css: CSS3Icon,
  javascript: JavascriptIcon,
  git: GitIcon,
  github: GithubIcon,
  gitlab: GitlabIcon,
  netlify: NetlifyIcon,
  railway: RailwayIcon,
  cssmodule: CssModuleIcon,
  styledcomponents: StyledComponentsIcon,
  emotion: EmotionIcon,
};

// SVGIcon 컴포넌트
type SvgIconProps = keyof typeof svgObj;

interface ISVGIcon {
  name: SvgIconProps;
  className?: string;
  color?: string;
  bgColor?: string;
}

const SVGIcon = ({ name, className, color, ...props }: ISVGIcon) => {
  const IconComponent = svgObj[name];
  
  if (!IconComponent) {
    return null;
  }
  
  return <IconComponent className={className} style={{fill: color}} {...props} />
};

export default SVGIcon;
