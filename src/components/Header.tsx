import React from "react";
import {css} from "@emotion/react";
import {IoSunnyOutline} from "react-icons/io5";
import {AiFillMoon} from "react-icons/ai";
import {Theme} from "../App.tsx";


interface IHeader {
  theme: Theme;
  setTheme: React.Dispatch<React.SetStateAction<Theme>>;
}

const Header = ({theme, setTheme}: IHeader) => {
  
  const changeTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  }
  
  return (
    <header css={header}>
      <div className={'logo-wrap'}>
        <img src={'/assets/hmm.svg'} alt="logo" />
        <span className={'name'}>Seong Jun</span>
      </div>
      <nav>
        <span>HOME</span>
        <span>ABOUT</span>
        <span>WORK</span>
      </nav>
      <div css={themeBtn}>
        <div onClick={() => changeTheme()}>
          {theme === 'dark' ?
            <IoSunnyOutline />:
            <AiFillMoon />
          }
        </div>
      </div>
    </header>
  );
}

const header = css`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  backdrop-filter: blur(10px);
  
  .logo-wrap {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    img {
      width: 2rem;
      height: 2rem;
    }
    .name {
      font-family: "M PLUS Rounded 1c", sans-serif;
      margin-left: 0.1rem;
      font-size: 1.6rem;
    }
  }
  nav {
    width: 30rem;
    display: flex;
  }
`;

const themeBtn = css`
  width: 100%;
  
`;
export default Header;