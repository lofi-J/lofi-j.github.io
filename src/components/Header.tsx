import React, {useState} from "react";
import {css} from "@emotion/react";
import {Theme} from "../App.tsx";
import {IoSunnyOutline} from "react-icons/io5";
import {AiFillMoon} from "react-icons/ai";
import {RxHamburgerMenu} from "react-icons/rx";
import SVGIcon from "../assets/svg/svg.tsx";
import { Link, useLocation } from 'react-router-dom';
import {mq} from "../styles/media.ts";
import useMediaQuery from "../hooks/useMediaQuery.ts";
import {breakpoint} from "../styles/media.ts";
import useOutSideClick from '../hooks/useOutSideClick.ts';


interface IHeader {
  theme: Theme;
  setTheme: React.Dispatch<React.SetStateAction<Theme>>;
}

const Header = ({theme, setTheme}: IHeader) => {
  const pathname = useLocation().pathname;
  const isTablet = useMediaQuery('tablet');
  const [showSideBar, setShowSideBar] = useState(false);
  const ref = useOutSideClick<HTMLDivElement>(() => setShowSideBar(false));
  
  const changeTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  }
  
  const generatePathname = () => {
    const pathMap: {[key: string]: string} = {
      '/': 'home',
      '/works': 'works',
      '/playground': 'playground',
      '/resume': 'resume'
    };
    return pathMap[pathname] || '';
  }
  
  return (
    <header css={header(generatePathname())}>
      <div className={'container'}>
        <Link to={'/'} css={logoWrap} className={'logo-wrap'}>
          <SVGIcon name={'hmm'} />
          <span className={'name'}>Seong Jun</span>
        </Link>
        {!isTablet && (
          <nav css={navigation}>
            <Link to={'/'} className='home'>Home</Link>
            <Link to={'/works'} className='works'>Works</Link>
            <Link to={'/playground'} className='playground'>Playground</Link>
            <a href={'#'} className='resume'>Resume</a>
          </nav>
        )}
        <div className={'toggle-wrap'}>
          <div css={toggle(theme)} onClick={() => changeTheme()}>
            {theme === 'dark' ?
              <IoSunnyOutline />:
              <AiFillMoon />
            }
          </div>
          {isTablet && (
            <div ref={ref} css={toggle(theme)} className={'hamburger'} onClick={() => setShowSideBar(prev => !prev)}>
              <RxHamburgerMenu />
              {showSideBar && (
                <div css={sidebar(theme)}>
                  <Link to={'/'} className="home">Home</Link>
                  <Link to={'/works'} className="works">Works</Link>
                  <Link to={'/playground'} className="playground">Playground</Link>
                  <a href={'#'} className="resume">Resume</a>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

const header = (pathname: string) => css`
  width: 100%;
  display: flex;
  justify-content: center;
  backdrop-filter: blur(10px);
  
  .container {
    width: max-content;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  /* active */
  .${pathname} {
    background-color: var(--accent-teal-background-hover);
    &::after {
      content: "";
      position: absolute;
      left: 0;
      bottom: -0.2rem;
      width: 100%;
      height: 0.2rem;
      background-color: var(--accent-teal);
    }
  }
  
  /* media */
  ${mq('tablet')} {
    padding: 0.8rem 1.6rem;
    .container {
      width: ${breakpoint.tablet}px;
      justify-content: space-between;
    }
    .toggle-wrap {
      display: flex;
      align-items: center;
      gap: 1rem;
    }
  }
  
`;

const logoWrap = css`
  cursor: pointer;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  &:hover {
    svg {
      transform: rotate(10deg);
    }
  }
  svg {
    width: 2.2rem;
    height: 2.2rem;
    transition: transform .1s linear;
    g, rect, circle, ellipse {
      stroke: var(--color);
    }
    ellipse {
      fill: var(--color);
    }
  }
  .name {
    font-family: "M PLUS Rounded 1c", sans-serif;
    margin-left: 0.5rem;
    font-size: 1.6rem;
    font-weight: 500;
  }
`;

const navigation = css`
  min-width: 60rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5rem;
  a {
    position: relative;
    font-size: 1.4rem;
    font-weight: 600;
    color: var(--color);
    padding: 0.6rem 0.4rem;
    &:hover {
      &::after {
        content: "";
        position: absolute;
        left: 0;
        bottom: -0.2rem;
        width: 100%;
        height: 0.2rem;
        background-color: var(--accent-teal);
      }
    }
  }
  .resume {
    &:hover {
      &::after {
        background-color: var(--link-color);
      }
    }
  }
`;

const toggle = (theme: Theme) => css`
  cursor: pointer;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 0.5rem;
  border-radius: 4px;
  background-color: ${theme === 'dark' ? 'var(--orange)' : 'var(--purple)'};
  
  svg {
    width: 1.8rem;
    height: 1.8rem;
    fill: var(--background-color);
    stroke: var(--background-color);
    transition: all 0.3s ease-in-out;
  }
  &:hover {
    background-color: ${theme === 'dark' ? 'var(--orange-200)' : 'var(--purple-200)'};
    svg {
      transform: rotate(30deg);
    }
  }
  
  /* Hamburger */
  &.hamburger {
    position: relative;
    background-color: transparent;
    border: 1px solid ${theme === 'dark' ? 'var(--white-alpha-500)' : 'var(--gray-200)'};
    svg {
      transform: unset;
    }
    &:hover {
      background-color: ${theme === 'dark' ? 'var(--white-alpha-400)' : 'var(--gray-200)'};
    }
    &:has(div:hover) {
      background-color: transparent;
    }
  }
`;

const sidebar = (theme: Theme) => css`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 5rem;
  right: 0;
  width: 10rem;
  border: 1px solid ${theme === 'dark' ? 'var(--white-alpha-400)' : 'var(--gray-300)'};
  background-color: ${theme === 'dark' ? 'var(--white-alpha-500)' : 'white'};
  border-radius: 4px;
  a {
    position: relative;
    font-family: "M PLUS Rounded 1c", sans-serif;
    font-size: 1.3rem;
    font-weight: 500;
    padding: 0.8rem 0 0.8rem 0.8rem;
    &:hover {
      font-weight: bold;
    }
    &::after {
      display: none;
    }
  }
`;

export default Header;