import { useNavigate, useParams } from 'react-router-dom';
import Works, {isValidWorkId} from "../static/Works.ts";
import NotFoundPage from "./NotFoundPage.tsx";
import { MdArrowRight } from "react-icons/md";
import { IoIosLink } from "react-icons/io";
import {css} from "@emotion/react";
import { mq } from '../styles/media.ts';
import ImgSlider from "../components/slider/ImgSlider.tsx";
import Button from "../components/button/Button.tsx";
import SVGIcon from "../assets/svg/svg.tsx";
import {SlArrowLeft} from "react-icons/sl";


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
          <p className='desc'><span className='empty' />{Work.description}</p>
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
        <div className="slider-container">
          <ImgSlider
            slideImgs={Work.slideImgs}
            isAutoPlay={true}
            isInfinite={true}
            autoPlaySpeed={4}
            speed={2}
          />
        </div>
        <div className='detail-description'>
          {Work.detailDescriptions.map((desc, i) => (
            <p key={`${Work.title}-desc-${i}`}>{desc}</p>
          ))}
        </div>
        <div className='btn-wrap'>
          <Button
            prefix={<SlArrowLeft />}
            text={'Works'}
            onClick={() => navigate('/works')}
            color={'var(--color)'}
            bgColor={'var(--background-color)'}
            padding={1}
            height={3}
          />
          <Button
            prefix={<SVGIcon name={'github'} color={'var(--origin-color)'} />}
            text={'Source'}
            onClick={() => openNewTab(Work.github)}
            color={'var(--color)'}
            bgColor={'var(--background-color)'}
            padding={1}
            height={3}
          />
        </div>
      </div>
    </main>
  );
}

const main = css`
  .frame-container {
    display: flex;
    flex-direction: column;
    gap: 2.5rem;
  }
  .info-header {
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
    position: relative;
    .desc {
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
  .detail-description {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    p {
      margin: unset;
      font-size: 1.4rem;
      font-weight: 400;
      line-height: 1.4;
    }
  }
  .btn-wrap {
    display: flex;
    justify-content: center;
    gap: 1rem;
    margin-top: 1.8rem;
    button {
      border: 1px solid var(--normal-gray);
      opacity: 0.8;
      transition: all 0.3s ease-in-out;
      &:hover {
        opacity: 1;
        border-color: var(--origin-color);
      }
    }
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
      .desc {
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
            max-width: 5.5rem;
            display: flex;
            justify-content: flex-start;
            align-items: flex-start;
            height: 2rem;
            .label {
              font-size: 1.1rem;
            }
          }
        }
      }
    }
    .detail-description {
      gap: 1rem;
      p {
        font-size: 1.3rem;
        line-height: 1.3;
      }
    }
  }
  .btn-wrap {
    margin-top: 1rem;
  }
`;

export default WorkDetailPage;