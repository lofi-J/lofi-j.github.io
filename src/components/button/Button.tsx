import {css, SerializedStyles} from '@emotion/react';
import {ReactNode} from "react";
import {mq} from "../../styles/media.ts";

interface IButton {
  text: string;
  onClick: () => void;
  color?: string;
  weight?: 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | 'bold';
  size?: number;
  bgColor?: string;
  padding?: number;
  height?: number;
  prefix?: ReactNode;
  suffix?: ReactNode;
  style?: SerializedStyles;
}

const Button = (
  {text, onClick, color, weight, size, bgColor, padding=1.6, height=4, prefix, suffix, style
  }: IButton) => {
  
  return (
    <button
      css={[main({ color, bgColor, padding, height, weight, size }), style]}
      onClick={onClick}
      aria-label={text}
    >
      {prefix}
      {text}
      {suffix}
    </button>
  );
}

export default Button;

const main = (props: Omit<IButton, 'text' | 'onClick'>) => css`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.6rem;
  color: ${props.color || 'var(--accent-teal)'};
  font-weight: ${props.weight || 500};
  font-size: ${props.size || '1.4rem'};
  background-color: ${props.bgColor || 'var(--button-bg)'};
  padding: 0 ${props.padding}rem;
  height: ${props.height}rem;
  border-radius: 8px;
  transition: background-color 0.2s ease-in-out;
  svg {
    width: 1.2rem;
    height: 1.2rem;
  }
  &:hover {
    background-color: ${!props.bgColor && 'var(--button-bg-hover)'};
  }
  // default setting
  ${mq('mobile')} {
    font-size: 1.2rem;
    padding: 0 1rem;
    height: 3rem;
  }
`;
