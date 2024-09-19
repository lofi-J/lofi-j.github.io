/// <reference types="vite-plugin-svgr/client" />
import ReactIcon from "./react.svg?react";
import ViteIcon from "./vite.svg?react";
import HmmIcon from "./hmm.svg?react";

// svgObj 객체 정의
const svgObj = {
  react: ReactIcon,
  vite: ViteIcon,
  hmm: HmmIcon,
};

// SVGIcon 컴포넌트
type SvgIconProps = keyof typeof svgObj;

const SVGIcon = ({ name }: { name: SvgIconProps }) => {
  const IconComponent = svgObj[name];
  
  if (!IconComponent) {
    return null;
  }
  
  return <IconComponent />
};

export default SVGIcon;
