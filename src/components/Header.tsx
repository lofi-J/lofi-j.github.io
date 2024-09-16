import {css} from "@emotion/react";

const Header = () => {
  return (
    <header css={header}>
      <img src={'/react.svg'} alt="logo" />
      
      <nav>
        <span>HOME</span>
        <span>ABOUT</span>
        <span>WORK</span>
      </nav>
    </header>
  );
}

const header = css`
  width: 100%;
  display: flex;
  justify-content: space-between;
  nav {
    width: 300px;
    display: flex;
  }
`;
export default Header;