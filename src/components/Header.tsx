import React from "react";
import {css} from "@emotion/react";
import {Theme} from "../App.tsx";
import {IoSunnyOutline} from "react-icons/io5";
import {AiFillMoon} from "react-icons/ai";
import SVGIcon from "../assets/svg/svg.tsx";
import {Link} from "react-router-dom";


interface IHeader {
  theme: Theme;
  setTheme: React.Dispatch<React.SetStateAction<Theme>>;
}

const Header = ({theme, setTheme}: IHeader) => {
  
  const changeTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  }
  
  return (
    <header css={header(theme)}>
      <div className={'container'}>
        <div className={'logo-wrap'}>
          <SVGIcon name={'hmm'} />
          <span className={'name'}>Seong Jun</span>
        </div>
        <nav>
          <Link to={'/'}>HOME</Link>
          <Link to={'/about'}>ABOUT</Link>
          <Link to={'/work'}>WORK</Link>
        </nav>
        <div className={'toggle-wrap'}>
          <div onClick={() => changeTheme()}>
            {theme === 'dark' ?
              <IoSunnyOutline />:
              <AiFillMoon />
            }
          </div>
        </div>
      </div>
    </header>
  );
}

const header = (theme: Theme) => css`
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
  
  .logo-wrap {
    cursor: pointer;
    width: max-content;
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
  }
  nav {
    min-width: 40rem;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1.5rem;
    a {
      position: relative;
      font-size: 1.4rem;
      font-weight: 400;
      color: var(--color);
      &:hover {
        &::after {
          content: "";
          position: absolute;
          left: 0;
          bottom: 0;
          width: 100%;
          height: 0.1rem;
          background-color: var(--color);
        }
      }
    }
  }
  
  .toggle-wrap > div {
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
      transition: transform 0.3s ease-in-out;
    }
    &:hover {
      svg {
        transform: rotate(30deg);
      }
    }
  }
`;

export default Header;