import React from "react";
import Header from "./Header.tsx";
import {css} from "@emotion/react";
import {Theme} from "../App.tsx";


interface ILayout {
  theme: Theme;
  setTheme: React.Dispatch<React.SetStateAction<Theme>>
}

const Layout = ({theme, setTheme}: ILayout) => {
  return (
    <div css={layout}>
      <Header theme={theme} setTheme={setTheme} />
    </div>
  );
}

const layout = css`
  display: block;
  margin: 0 auto;
  max-width: 1700px;
`;

export default Layout;