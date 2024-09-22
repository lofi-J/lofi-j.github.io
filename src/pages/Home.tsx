import Character3D from "../components/Character3D.tsx";
import {css} from "@emotion/react";
import {mq} from "../styles/media.ts";

const Home = () => {
  
  return (
    <main css={main}>
      <Character3D />
    </main>
  );
}

const main = css`
  ${mq('tablet')} {
    margin-top: 4.6rem;
  }
`;
export default Home;