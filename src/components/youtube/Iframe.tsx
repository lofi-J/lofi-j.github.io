import {css} from "@emotion/react";
import { useRef, useState } from 'react';
import { Brands } from '../../static/Brands.ts';
import { IoIosLink } from "react-icons/io";
import SVGIcon from '../../assets/svg/svg.tsx';


interface IframeProps {
  name: 'typinglab_demo' | 'tetris_demo';
  title: string;
  skills: Array<keyof typeof Brands>;
  url: string;
}

const Iframe = ({name, title, skills, url}: IframeProps) => {
  const playerRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setPlaying] = useState(false);
  
  const play = () => {
    if (playerRef.current) {
      playerRef.current.play().then();
      setPlaying(true);
    }
  }
  
  const handleReset = () => {
    if (playerRef.current) {
      playerRef.current.pause();
      playerRef.current.currentTime = 0;
      setPlaying(false);
    }
  }
  
  
  return (
    <div id='video' css={main}>
      <div className="video-container"
        onMouseEnter={() => play()}
        onMouseLeave={() => handleReset()}
      >
        {!isPlaying && (
          <div className={'thumbnail-wrap'}>
            <div className={'badge-wrap'}>
              {skills.map((skill, i) => (
                <SVGIcon name={skill} key={`badge-${i}`} color={Brands[skill].color} bgColor={Brands[skill].bgColor} className={skill} />
              ))}
            </div>
            <img className="thumbnail" src={`/assets/thumbnail/${name}.png`} alt={`${name}.png`} />
          </div>
        )}
        <video
          ref={playerRef}
          controls={false}
          muted
        >
          <source src={`/assets/mp4/${name}.mp4`} type="video/mp4" />
        </video>
      </div>
      <div className="link-wrap">
        <a
          className='title'
          target='_blank'
          rel='noopener noreferrer'
          href={url}
        >
          {title}
        </a>
        <IoIosLink />
      </div>
    </div>
  );
}

const main = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  .video-container {
    position: relative;
    .thumbnail-wrap {
      position: absolute;
      height: 100%;
      .badge-wrap {
        position: absolute;
        padding: 1rem 0 0 1rem;
        svg {
          width: 1.5rem;
          height: 1.5rem;
          margin-right: 0.5rem;
        }
        .next {
          border-radius: 50%;
          border: 1px solid white;
        }
      }
      .thumbnail {
        z-index: 2;
        width: 100%;
        height: 100%;
        border-radius: 8px;
        border: 1px solid var(--background-color);
      }
    }
  }
  video {
    cursor: pointer;
    width: 100%;
    border-radius: 8px;
    border: 1px solid var(--background-color);
  }
  .link-wrap {
    cursor: pointer;
    position: relative;
    display: flex;
    align-items: center;
    padding-top: 0.8rem;
    .title {
      font-family: -apple-system sans-serif;
      font-size: 1.5rem;
      font-weight: 600;
    }
    svg {
      width: 2.2rem;
      height: 1.3rem;
      display: none;
      position: absolute;
      right: -2.2rem;
      fill: var(--accent-teal);
    }
    &:hover {
      .title {
        text-decoration: underline;
        text-decoration-color: var(--accent-teal);
        text-underline-offset: 4px;
        text-decoration-thickness: 1px;
      }
      svg {
        display: block;
      }
    }
  }
  .description {
    margin-top: 1rem;
  }
`;

export default Iframe;