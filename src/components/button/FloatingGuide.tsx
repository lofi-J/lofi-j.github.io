import { useEffect, useState } from 'react';
import { css } from '@emotion/react';
import { HiArrowLongDown } from "react-icons/hi2";


const FloatingGuide = () => {
  const [isShow, setIsShow] = useState(false);
  
  useEffect(() => {
    const updateVisibility = () => {
      const scrollHeight = document.documentElement.scrollHeight;
      const innerHeight = window.innerHeight || document.documentElement.clientHeight;
      const yPos = window.scrollY;
      
      if (scrollHeight > innerHeight && (yPos + innerHeight) < scrollHeight) {
        setIsShow(true);
      } else  {
        setIsShow(false);
      }
    }
    updateVisibility();
    window.addEventListener('scroll', updateVisibility);
    window.addEventListener('resize', updateVisibility);
    
    return () => window.removeEventListener('scroll', updateVisibility);
  });
  
  return (
    <div css={main(isShow)}>
      <div className={'scroll_text'}>SCROLL</div>
      <HiArrowLongDown />
    </div>
  );
}

const main = (isShow: boolean) => css`
  z-index: 10;
  position: fixed;
  bottom: 3rem;
  right: 1rem;
  opacity: ${isShow ? 1 : 0};
  transition: opacity 0.3s ease-in-out;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 6.5rem;
  & > * {
    color: var(--normal-gray);
  }
  .scroll_text {
    font-family: sans-serif;
    font-size: 1.4rem;
    font-weight: 800;
    transform: rotate(90deg);
  }
  svg {
    width: 3rem;
    height: 3rem;
  }
`;

export default FloatingGuide;