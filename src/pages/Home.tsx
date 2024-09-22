import Character3D from "../components/Character3D.tsx";
import { css } from '@emotion/react';
import {mq} from "../styles/media.ts";
import { Theme } from '../App.tsx';
import useTheme from '../hooks/useTheme.ts';


const Home = () => {
  const { theme } = useTheme();
  
  return (
    <main css={main}>
      <section id={'aboutMe'}>
        <Character3D />
        <article>
          <div css={greetting(theme)}>
            <span className={'line1'}>안녕하세요! </span>
            <span className={'line2'}>Frontend 개발자 <b>조성준</b>입니다.</span>
          </div>
        </article>
      </section>
    </main>
  );
}

const main = css`
  #aboutMe {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    padding: 0 1.6rem 0;
  }
  
  article {
    z-index: 2;
    width: 60rem;
    /* 3D 오브젝트 Canvas 사이즈와 함께 margin-top이 조정되어야 함 */
    margin: 35rem auto 0;
    padding: 0 1.6rem 0;
  }
  ${mq('tablet')} {
    #aboutMe {
      margin-top: 4.6rem;
    }
    article {
      width: 48rem;
      margin-top: 25rem;
    }
  }
  ${mq('mobile')} {
    article {
      width: 32rem;
      margin-top: 18rem;
    }
  }
`;

const greetting = (theme: Theme) => css`
  padding: 0.8rem;
  border-radius: 0.8rem;
  background-color: ${theme === 'dark' ? 'var(--white-alpha-200)' : 'var(--white-alpha-500)'};
  text-align: center;
  font-size: 1.6rem;
  b {
    font-weight: 600;
    color: ${theme === 'dark' ? 'aqua' : 'black'};
  }
  
  ${mq('tablet')} {
    font-size: 1.5rem;
  }
  ${mq('mobile')} {
    font-size: 1.4rem;
    line-height: 1.5;
    display: flex;
    flex-direction: column;
  }
  
`;

export default Home;