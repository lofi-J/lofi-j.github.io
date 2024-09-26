import { css } from '@emotion/react';

interface IButton {
  text: string;
  onClick: () => void;
  color?: string;
  bgColor?: string;
  padding?: number;
  height?: number;
}

const Button = ({text, onClick, color, bgColor, padding=1.6, height=4}: IButton) => {
  
  return (
    <button
      css={main({ color, bgColor, padding, height })}
      onClick={onClick}
    >
      {text}
    </button>
  );
}

export default Button;

const main = (props: Omit<IButton, 'text' | 'onClick'>) => css`
  color: ${props.color || 'var(--accent-teal)'};
  background-color: ${props.bgColor || 'var(--accent-teal-background)'};
  padding: 0 ${props.padding}rem;
  height: ${props.height}rem;
`;
