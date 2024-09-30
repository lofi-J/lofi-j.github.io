import {css} from "@emotion/react";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import {Theme} from "../../App.tsx";
import { mq } from '../../styles/media.ts';


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
  return (
    <div className={className} onClick={onClick} css={main(theme)}>
      <IoIosArrowBack size={25} />
    </div>
  );
}

const main = (theme: Theme) => css`
  display: block;
  svg {
    fill: ${theme === 'dark' ? 'var(--white-alpha-500)' : 'var(--normal-gray)'};
  }
  &:hover > svg {
    fill: ${theme === 'dark' ? 'var(--accent-teal-background-hover)' : 'var(--accent-teal)'};
  }
  ${mq('mobile')} {
    svg {
      width: 2rem;
      height: 2rem;
    }
  }
  ${mq(undefined, 380, 'max')} {
    svg {
      display: none;
    }
  }
`;