import Header from "./Header.tsx";
import {css} from "@emotion/react";

const Layout = () => {
  return (
    <div css={layout}>
      <Header />
    </div>
  );
}

const layout = css`
  display: block;
  margin: 0 auto;
  max-width: 1700px;
`;

export default Layout;