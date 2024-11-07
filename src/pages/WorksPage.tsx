import { css } from '@emotion/react';
import {mq} from "../styles/media.ts";
import WorkCard from "../components/card/WorkCard.tsx";
import Works from "../static/Works.ts";


const WorksPage = () => {
  return (
    <main css={main}>
      <section className="frame-container">
        <div className="title">Works</div>
        <div className="grid-container">
          <WorkCard {...Works['homepage']} />
          <WorkCard {...Works['typinglab']} />
          <WorkCard {...Works['tetris']} />
          <WorkCard {...Works['ascii']} />
          <WorkCard {...Works['sorting']} />
        </div>
      </section>
    </main>
  );
}

const main = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 1;
  
  .frame-container {
    margin-top: 1.2rem;
    .title {
      font-family: "M PLUS Rounded 1c", sans-serif;
      font-size: 2rem;
      font-weight: bold;
      margin-bottom: 1rem;
    }
    .grid-container {
      display: grid;
      grid-template-rows: repeat(2, 1fr);
      grid-template-columns: repeat(2, 1fr);
      gap: 1.5rem;
    }
  }
  
  ${mq('tablet')} {
    .frame-container {
      .title {
        font-size: 1.8rem;
      }
      .grid-container {
        grid-template-rows: repeat(1, 1fr);
        grid-template-columns: repeat(1, 1fr);
        gap: 2.5rem;
      }
    }
  }
`;

export default WorksPage;