export {};

declare global {
  interface Window {
    onYouTubeIframeAPIReady: () => void;
    YT: typeof YT;
  }

  namespace YT {
    interface Player {
      playVideo: () => void;
      pauseVideo: () => void;
      stopVideo: () => void;
      seekTo: (seconds: number, allowSeekAhead: boolean) => void;
      getPlayerState: () => PlayerState;
    }

    type PlayerState = -1 | 0 | 1 | 2 | 3 | 5;

    // YT.Player 생성자 인터페이스
    interface PlayerOptions {
      videoId: string;
      width?: number | string;
      height?: number | string;
      playerVars?: PlayerVars;
      events?: PlayerEvents;
    }

    interface PlayerVars {
      autoplay?: 0 | 1;
      controls?: 0 | 1;
      rel?: 0 | 1;
      showinfo?: 0 | 1;
      mute: 0 | 1;
    }

    interface PlayerEvents {
      onReady?: (event: PlayerEvent) => void;
      onStateChange?: (event: PlayerEvent) => void;
      onError?: (event: PlayerEvent) => void;
    }

    interface PlayerEvent {
      target: Player;
    }

    const Player: new (
      elementId: string | HTMLElement,
      options: PlayerOptions
    ) => Player;
  }
}
