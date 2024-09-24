/// <reference types="vite-plugin-svgr/client" />
import ReactIcon from "./react.svg?react";
import ViteIcon from "./vite.svg?react";
import HmmIcon from "./hmm.svg?react";
import TSIcon from "./typescript.svg?react";


// svgObj 객체 정의
const svgObj = {
  react: ReactIcon,
  vite: ViteIcon,
  hmm: HmmIcon,
  typescript: TSIcon,
};

// SVGIcon 컴포넌트
type SvgIconProps = keyof typeof svgObj;

interface ISVGIcon {
  name: SvgIconProps;
  className?: string;
}

const SVGIcon = ({ name, className }: ISVGIcon) => {
  const IconComponent = svgObj[name];
  
  if (!IconComponent) {
    return null;
  }
  
  return <IconComponent className={className} />
};

export default SVGIcon;
