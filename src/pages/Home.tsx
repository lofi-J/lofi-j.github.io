import Character3D from "../components/Character3D.tsx";
import { css } from '@emotion/react';
import {mq} from "../styles/media.ts";
import { Theme } from '../App.tsx';
import useTheme from '../hooks/useTheme.ts';


const Home = () => {
  const { theme } = useTheme();
  
  return (
    <main css={main}>
      <Character3D />
      <section>
        <div css={greetting(theme)}>
          Hello world!
        </div>
        
      </section>
    </main>
  );
}

const main = css`
  section {
  
  }
  ${mq('tablet')} {
    margin-top: 4.6rem;
  }
`;

const greetting = (theme: Theme) => css`
  width: 60rem;
  padding: 0.8rem;
  border-radius: 0.8rem;
  background-color: ${theme === 'dark' ? 'var(--white-alpha-200)' : 'var(--white-alpha-500)'};
`;

export default Home;