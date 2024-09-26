import {css} from "@emotion/react";
import { Brands } from '../../utills/Brands.ts';
import { useRef, useState } from 'react';

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
      <div className="video-container">
        {!isPlaying && <img className="thumbnail" src={`/assets/thumbnail/${name}.png`} alt={`${name}.png`} />}
        <video
          ref={playerRef}
          controls={false}
          muted
          onMouseEnter={() => play()}
          onMouseLeave={() => handleReset()}
        >
          <source src={`/assets/mp4/${name}.mp4`} type="video/mp4" />
        </video>
      </div>
      <a
        className='title'
        target='_blank'
        rel='noopener noreferrer'
        href={url}
      >
        {title}
      </a>
      <div className='description'>
        {skills.map((skill, i) => {
          const obj = Brands[skill];
          return (
            <b key={i} css={badge(obj.color, obj.bgColor)} id={`project_${i}`}>
              {obj.fullName}
            </b>
          );
        })}
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
    .thumbnail {
      position: absolute;
      width: 100%;
      height: 100%;
      border-radius: 8px;
      border: 1px solid var(--background-color);
    }
  }
  video {
    cursor: pointer;
    width: 100%;
    border-radius: 8px;
    border: 1px solid var(--background-color);
  }
  .title {
    cursor: pointer;
    font-family: -apple-system sans-serif;
    padding-top: 0.8rem;
    font-size: 1.5rem;
    font-weight: 600;
    &:hover {
      text-decoration: underline;
      text-decoration-color: var(--normal-gray);
      text-decoration-thickness: 0.2rem;
    }
  }
  .description {
    margin-top: 1rem;
  }
`;

const badge = (color: string, bgColor: string) => css`
  font-family: -apple-system sans-serif;
  color: ${color};
  font-size: 1.4rem;
  margin-right: 1rem;
  padding: 0.1rem 0.6rem;
  background-color: ${bgColor};
  border-radius: 6px;
`

export default Iframe;