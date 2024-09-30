import { useNavigate, useParams } from 'react-router-dom';
import Works, {isValidWorkId} from "../static/Works.ts";
import NotFoundPage from "./NotFoundPage.tsx";
import { MdArrowRight } from "react-icons/md";
import { IoIosLink } from "react-icons/io";
import {css} from "@emotion/react";
import { mq } from '../styles/media.ts';


const WorkDetailPage = () => {
  const navigate = useNavigate();
  const id = useParams().id;
  if (!isValidWorkId(String(id))) return <NotFoundPage />;
  const Work = Works[id as keyof typeof Works];
  
  const openNewTab = (url: string) => {
    window.open(url, '_blank');
  }
  
  return (
    <main css={main}>
      <div className='frame-container'>
        <div className='info-header'>
          <span className='accent link' onClick={() => navigate('/works')}>Works</span>
          <MdArrowRight size={18} />
          <div className='name-and-date'>
            <span className='work-name'>{Work.title}</span>
            <span className='date'>{Work.date}</span>
          </div>
        </div>
        <div className='info-body'>
          <p className='detail-desc'><span className='empty' />{Work.detailDesction}</p>
          <div className="info-wrap">
            <div className="info">
              <span className="label-frame"><span className="label">WEBSITE</span></span>
              <span className='value link' onClick={() => openNewTab(Work.website)}>{Work.website} <IoIosLink
                size={14}/></span>
            </div>
            <div className="info">
              <span className="label-frame"><span className="label">STACK</span></span>
              <span className='skills-frame'>{Work.stack.map((item, i) => (
                <span key={`${id}-stack-${i}`} className='value skill'>{item}</span>))}</span>
            </div>
            <div className="info">
              <span className="label-frame"><span className="label">DPLOY</span></span>
              <span className='value'>{Work.deploy}</span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

const main = css`
  .info-header {
    position: relative;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    
    .accent {
      font-size: 1.4rem;
      font-weight: 600;
    }
    
    .name-and-date {
      display: flex;
      align-items: center;
      .work-name {
        margin-right: 1rem;
        font-size: 1.8rem;
        font-weight: 500;
        text-wrap: nowrap;
      }
      .date {
        font-size: 1.2rem;
        background-color: var(--white-alpha-600);
        padding: 0.4rem 0.6rem;
        border-radius: 4px;
      }
    }
  }
  .info-body {
    margin-top: 2.5rem;
    .detail-desc {
      font-size: 1.5rem;
      line-height: 1.5;
      text-align: justify;
      .empty {
        display: inline-block;
        width: 1.4rem;
      }
    }
    .info-wrap {
      margin-top: 3rem;
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
      .info {
        display: flex;
        align-items: flex-start;
        gap: 1rem;
        span {
          font-size: 1.4rem;
        }
        .link {
          display: flex;
          align-items: center;
          svg {
            margin-left: 0.5rem;
          }
        }
        .label-frame {
          width: 6rem;
          .label {
            padding: 0.3rem 0.5rem;
            font-size: 1.2rem;
            font-weight: 600;
            background-color: var(--accent-teal-background);
            color: var(--accent-teal);
          }
        }
        .skills-frame {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          .skill {
            margin-right: 0.5rem;
          }
        }
      }
    }
  }
  
  ${mq('tablet')} {
  
  }
  ${mq('mobile')} {
    .info-header {
      .accent {
        font-size: 1.3rem;
      }
      .name-and-date {
        .work-name {
          font-size: 1.6rem;
          font-weight: 500;
        }
        .date {
          margin-left: 0.8rem;
          font-size: 1.1rem;
          padding: 0.2rem 0.4rem;
        }
      }
    }
    .info-body {
      margin-top: 1.5rem;
      .detail-desc {
        font-size: 1.3rem;
        .empty {
          width: 1rem;
        }
      }
      .info-wrap {
        margin-top: 2rem;
        .info {
          span {
            font-size: 1.2rem;
          }
          .label-frame {
            width: 5.5rem;
            .label {
              font-size: 1.1rem;
            }
          }
        }
      }
    }
  }
`;

export default WorkDetailPage;