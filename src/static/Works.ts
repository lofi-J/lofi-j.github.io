const Works = {
  homepage: {
    id: 'homepage',
    date: 2024,
    imgSrc: '/assets/thumbnail/home_thumb.png',
    title: 'Seong Jun - Homepage',
    description: '가장 최근에 작업한 웹 사이트로\n 작업물을 소개하는 프로젝트입니다.',
    detailDesction: '가장 최근에 진행한 웹 프로젝트입니다.\n지금 까지 작업했던 프로젝트에 대한 정보와 소소한 미니 프로젝트를 전시하기 위해 제작했습니다.',
    website: '#',
    stack: ['React.js', 'TypeScript', 'Emotion']
  },
  typinglab: {
    id: 'typinglab',
    date: 2024,
    imgSrc: '/assets/thumbnail/typinglab_thumb.png',
    title: 'Typing Lab',
    description: '타이핑할 문장을 선택해 \n타이핑 연습을 할 수 있는 사이트입니다.',
    detailDesction: '타이핑 연습 웹 사이트로 Next.js의 기본적인 작업 흐름과 \nIME시스템을 사용하는 언어의 Validation체크에 대한 다양한 방법을 익힐 수 있었습니다.',
    website: 'https://typinglab.netlify.app',
    stack: ['Next.js', 'TypeScript', 'CSS Modules']
  },
  tetris: {
    id: 'tetris',
    date: 2023,
    imgSrc: '/assets/thumbnail/tetris_thumb.png',
    title: 'Web Tetris (game)',
    description: '웹 테트리스 게임으로 React hook \n사용법을 익히기 위해 제작했습니다.',
    detailDesction: '웹 테트리스 게임입니다. 주요 기능들을 훅으로 정의해 \n재사용이 가능하도록 모듈화되어있으며 React 숙력도를 높이는데 많은 도움이되었던 프로젝트입니다.',
    website: 'https://react-js-tetris.up.railway.app',
    stack: ['React.js', 'JavaScript', 'styled-components', 'Redux', 'Node.js', 'Express.js'],
  },
  sorting: {
    id: 'sorting',
    date: 2023,
    imgSrc: '/assets/thumbnail/sorting_thumb.png',
    title: 'Sorting Algorithm Visualization',
    description: '웹 개발을 시작한 이후 첫 작업물로 \n정렬 알고리즘을 시각화한 프로젝트입니다.',
    detailDesction: '첫 웹 프로젝트로 HTML canvas를 이용해\n정렬알고리즘들의 진행과정을 시각화한 프로젝트입니다.',
    website: 'https://main--sort-algorithms-visualization.netlify.app',
    stack: ['React.js', 'TypeScript', 'styled-components', 'Recoil'],
  }
}

export const isValidWorkId = (id: string) => {
  return !!Object.values(Works).find(work => work.id === id);
}


export default Works;