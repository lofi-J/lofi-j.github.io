import {useParams} from "react-router-dom";
import Works, {isValidWorkId} from "../static/Works.ts";
import NotFoundPage from "./NotFoundPage.tsx";
import { MdArrowRight } from "react-icons/md";
import {css} from "@emotion/react";


const WorkDetailPage = () => {
  const id = useParams().id;
  if (!isValidWorkId(String(id))) return <NotFoundPage />
  const Work = Works[id as keyof typeof Works];
  
  return (
    <main css={main}>
      <div className='frame-container'>
        <div className='work-info'>
          <span className='accent'>Works</span>
          <MdArrowRight size={18} />
          <span className='work-name'>{Work.title}</span>
          <span className='date'>{Work.date}</span>
        </div>
        
        
      </div>
    </main>
  );
}

const main = css`
  .work-info {
    display: flex;
    align-items: center;
    .accent {
      font-size: 1.4rem;
      color: var(--accent-teal);
    }
    .work-name {
      font-size: 1.6rem;
      font-weight: 500;
    }
    .date {
      margin-left: 1rem;
      font-size: 1.2rem;
      background-color: var(--white-alpha-600);
      padding: 0.4rem 0.6rem;
      border-radius: 4px;
    }
  }
`;

export default WorkDetailPage;