import {css} from "@emotion/react";
import {useEffect, useRef} from "react";

interface IframeProps {
  videoId: string;
}
const Iframe = ({videoId}: IframeProps) => {
  const playerRef = useRef<YT.Player | null>(null); // YT player
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const tag = document.createElement("script");
    tag.src = "https://www.youtube.com/iframe_api";
    document.body.appendChild(tag);
    
    window.onYouTubeIframeAPIReady = () => {
      if (!containerRef.current) return;
      playerRef.current = new window.YT.Player(containerRef.current.querySelector('iframe')!, {
        playerVars:{
          mute: 1,
          rel:0 //관련영상 표시하지 않기.
        },
        videoId: videoId,
        events: {
          onReady: (event) => {
            playerRef.current = event.target;
            console.log('player is ready');
          },
        },
      });
    }
    
    // handler
    const handleMouseEnter = () => {
      if (playerRef.current && typeof playerRef.current.playVideo === 'function') {
        playerRef.current.playVideo();
      }
    }
    
    const handleMouseLeave = () => {
      if (playerRef.current && typeof playerRef.current.pauseVideo === 'function') {
        playerRef.current.pauseVideo();
      }
    }
    
    // listener event
    containerRef.current?.addEventListener('mouseenter', handleMouseEnter);
    containerRef.current?.addEventListener('mouseleave', handleMouseLeave);
    // clean up
    return () => {
      containerRef.current?.removeEventListener('mouseenter', handleMouseEnter);
      containerRef.current?.removeEventListener('mouseleave', handleMouseLeave);
    }
  }, [videoId]);
  
  return (
    <div id='video' ref={containerRef} css={main}>
      <iframe
        src={`https://www.youtube.com/embed/${videoId}?enablejsapi=1`}
      ></iframe>
    </div>
  );
}

const main = css`
  width: max-content;
  
  iframe {
  }
`;

export default Iframe;