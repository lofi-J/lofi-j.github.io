import {css} from "@emotion/react";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import {Theme} from "../../App.tsx";


interface ISliderArrow {
  className?: string;
  onClick?: () => void;
  theme: Theme;
}

export const NextSliderArrow = ({className, onClick, theme}: ISliderArrow) => {
  return (
    <div className={className} onClick={onClick} css={main(theme)}>
      <IoIosArrowForward size={25} />
    </div>
  );
}

export const PrevSliderArrow = ({className, onClick, theme}: ISliderArrow) => {
  console.log(theme);
  return (
    <div className={className} onClick={onClick} css={main(theme)}>
      <IoIosArrowBack size={25} />
    </div>
  );
}

const main = (theme: Theme) => css`
  display: block;
  svg {
    fill: ${theme === 'dark' ? 'var(--white-alpha-500)' : 'red'};
  }
  &:hover > svg {
    fill: var(--accent-teal-background-hover);
  }
`;