import Character3D from '../components/Character3D.tsx';
import { css } from '@emotion/react';
import {mq} from '../styles/media.ts';
import { Theme } from '../App.tsx';
import useTheme from '../hooks/useTheme.ts';
import githubProfile from '../assets/img/github_profile.png';
import SVGIcon from "../assets/svg/svg.tsx";
import Iframe from "../components/youtube/Iframe.tsx";
import TechStacks from "../components/TechStacks.tsx";


const Home = () => {
  const { theme } = useTheme();
  
  return (
    <main css={main}>
      <section id="aboutMe">
        <Character3D />
        <article>
          <div css={greetting(theme)}>
            <span className="line1">안녕하세요! </span>
            <span className="line2">Frontend 개발자 <b>조성준</b>입니다.</span>
          </div>
          <div css={profile}>
            <div className="left">
              <div className="en_name">Jo Seong Jun</div>
              <div className="trait">
                <span>Joyful Coding</span>
                <span>|</span>
                <span>Learning Mindset</span>
              </div>
            </div>
            <div className="right">
              <img src={githubProfile} alt="github_profile" loading={'lazy'}/>
            </div>
          </div>
          <div css={description}>
            <strong>I'm</strong>
            <div className="desc">
              <p>유지 보수에 용이한 코드를 작성하기 위한 공을 들이고, 퍼포먼스 중심의 코드를 작성하기 위한 다양한 시도와 테스트를 진행하는 프론트엔드 개발자입니다.</p>
              <p>새로운 도전 속에서 얻게 되는 배움을 좋아하며, 책임감과 끈기로 성장해 나아가고 있습니다.</p>
            </div>
          </div>
          <div css={description}>
            <strong>I ♥</strong>
            <div className="desc">
              <p className="nowrap">
                <SVGIcon name={'react'} /><em>React.js</em>
                <span className="m-r">,</span>
                <SVGIcon name={'typescript'} className={'tsSVG'} /><em>Typescript</em>
                조합을 사랑합니다. 😊
              </p>
            </div>
          </div>
          <div css={description}>
            <strong>Work</strong>
            <div className="desc video_wrap">
              <Iframe
                name={'tetris_demo'}
                title={'TETRIS'}
                skills={['react', 'javascript']}
                url={'https://react-js-tetris.up.railway.app/'}
              />
              <Iframe
                name={'typinglab_demo'}
                title={'TypingLab'}
                skills={['next', 'typescript']}
                url={'https://typinglab.netlify.app/'}
              />
            </div>
          </div>
          <div css={description}>
            <strong>Tech</strong>
            <div className="desc tech-container">
              <TechStacks type={'frontend'} />
              <TechStacks type={'style'} />
              <TechStacks type={'deployment'} />
              <TechStacks type={'devOps'} />
            </div>
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
    display: flex;
    flex-direction: column;
    gap: 3.2rem;
  }
  
  ${mq('tablet')} {
    #aboutMe {
      margin-top: 4.6rem;
    }
    
    article {
      width: 48rem;
      margin-top: 25rem;
      gap: 2.8rem;
    }
  }
  
  ${mq('mobile')} {
    article {
      width: 32rem;
      margin-top: 18rem;
      gap: 2rem;
    }
  }
`;

const greetting = (theme: Theme) => css`
  padding: 1.2rem 0.8rem;
  border-radius: 8px;
  background-color: ${theme === 'dark' ? 'var(--white-alpha-200)' : 'var(--white-alpha-500)'};
  text-align: center;
  font-size: 1.6rem;
  b {
    font-weight: 600;
    color: ${theme === 'dark' ? 'var(--teal-200)' : 'black'};
  }
  
  ${mq('tablet')} {
    padding: 1rem 0.8rem;
    font-size: 1.4rem;
  }
  ${mq('mobile')} {
    padding: 0.6rem 0;
    font-size: 1.3rem;
    line-height: 1.5;
    display: flex;
    flex-direction: column;
  }
`;

const profile = css`
  display: flex;
  justify-content: space-between;
  .left {
    .en_name {
      font-size: 3.6rem;
      font-weight: 600;
      font-family: "M PLUS Rounded 1c", sans-serif;
      margin-bottom: 1rem;
    }
    .trait {
      display: flex;
      gap: 1rem;
      span {
        font-size: 1.5rem;
        font-weight: 100;
      }
    }
  }
  .right {
    position: relative;
    img {
      padding: 2px;
      border-radius: 50%;
      border: 1px solid var(--gray-500);
      width: 10rem;
      height: 10rem;
    }
    &:hover {
      &::after {
        content: 'Github Profile img';
        font-size: 1rem;
        font-weight: 300;
        color: var(--normal-gray);
        position: absolute;
        text-align: center;
        width: max-content;
        bottom: -2rem;
        left: 50%;
        transform: translateX(-50%);
      }
    }
  }
  
  ${mq("tablet")} {
    .left {
      .en_name {
        font-size: 3rem;
        margin-bottom: 0.8rem;
      }
      .trait {
        gap: 0.5rem;
        span {
          font-size: 1.3rem;
        }
      }
    }
    .right {
      img {
        width: 8rem;
        height: 8rem;
      }
    }
  }
  ${mq("mobile")} {
    flex-direction: column;
    .right {
      display: flex;
      justify-content: center;
      margin-top: 1rem;
    }
  }
`;

const description = css`
  strong {
    position: relative;
    font-family: "M PLUS Rounded 1c", sans-serif;
    font-size: 2rem;
    font-weight: bold;
    text-decoration: underline;
    text-decoration-color: var(--normal-gray);
    text-decoration-thickness: 3px;
    text-underline-offset: 0.5rem;
  }
  .desc {
    margin-top: 1.2rem;
    p {
      display: flex;
      align-items: center;
      font-size: 1.4rem;
      font-weight: 400;
      line-height: 1.2;
      word-break: keep-all;
      margin: unset;
      &:not(:first-of-type) {
        margin-top: 0.5rem;
      }
      em {
        font-family: "Yu Gothic UI", sans-serif;
        font-size: 1.3rem;
        font-weight: 600;
        margin-right: 0.2rem;
        color: var(--accent-teal);
      }
      .m-r {
        margin-right: 0.5rem;
      }
      svg {
        width: 1.8rem;
        height: 1.8rem;
        margin-right: 0.3rem;
        &.tsSVG {
          fill: #3178C6;
        }
      }
    }
    .nowrap {
      white-space: nowrap;
    }
  }
  .video_wrap {
    display: flex;
    justify-content: space-between;
    gap: 3rem;
    margin-top: 2rem;
    ${mq('tablet')} {
      gap: 2rem;
    }
    ${mq('mobile')} {
      flex-direction: column;
      gap: 3rem;
    }
  }
  .tech-container {
    margin-top: 2rem;
    display: flex;
    flex-direction: column;
    gap: 1.8rem;
  }
`

export default Home;