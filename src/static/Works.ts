export const Works = {
  homepage: {
    id: 'homepage',
    date: 2024,
    imgSrc: '/assets/thumbnail/home_thumb.png',
    title: 'Seong Jun - Homepage',
    description: '작업물을 소개하는 포트폴리오용 프로젝트입니다.',
    website: 'https://lofi-j.github.io',
    github: 'https://github.com/lofi-J/HomePage',
    stack: ['React.js', 'TypeScript', 'Emotion'],
    deploy: 'GitHub Pages',
    slideImgs: [
      'homepage/homepage1.png',
      'homepage/homepage2.png',
      'homepage/homepage3.png',
    ],
    detailDescriptions: [
      '포트폴리오 용도로 제작한 웹사이트입니다.\n지금 계신 이 웹사이트에 해당합니다.',
      '@react-three/fiber와 three.js를 활용해 3D 웹 개발에 대한 이해와 적용을 해볼 수 있는 기회가 되었습니다.',
      '해당 프로젝트는 특히 다양한 이미지 파일과 아이콘을 사용하며 효율적인 관리법에 대한 다양한 방법들을 적용하고 배울 수 있는 좋은 계기가 되었습니다.',
    ],
  },

  typinglab: {
    id: 'typinglab',
    date: 2024,
    imgSrc: '/assets/thumbnail/typinglab_thumb.png',
    title: 'Typing Lab',
    description:
      '타이핑할 문장을 선택해 \n타이핑 연습을 할 수 있는 사이트입니다.',
    website: 'https://typing-lab.vercel.app/',
    github: 'https://github.com/lofi-J/Typing-Lab',
    stack: ['Next.js', 'TypeScript', 'CSS Modules'],
    deploy: 'Netlify',
    slideImgs: [
      'typinglab/typinglab1.png',
      'typinglab/typinglab2.png',
      'typinglab/typinglab3.png',
      'typinglab/typinglab4.png',
      'typinglab/typinglab5.png',
    ],
    detailDescriptions: [
      '처음으로 Next.js로 작업해본 타이핑 연습 웹 프로젝트입니다.',
      'input 태그를 통해 유저의 입력을 받는 기능을 구현하면서 특히 한국어 IME 시스템과 관련된 입력 검증 문제를 해결해야 했습니다. 이 과정에서 다양한 input 이벤트를 활용하여 검증을 진행했습니다.',
      'Chart.js를 활용한 WPM(분당 타자 수) 그래프와 사용자 설정 기능을 도입하면서 사용자 경험을 개선하는 것의 중요성을 더욱 체감할 수 있었습니다.',
    ],
  },

  tetris: {
    id: 'tetris',
    date: 2023,
    imgSrc: '/assets/thumbnail/tetris_thumb.png',
    title: 'Web Tetris (game)',
    description:
      '웹 테트리스 게임으로 React hook \n사용법을 익히기 위해 제작했습니다.',
    website: 'https://tetris-v1-two.vercel.app/',
    github: 'https://github.com/lofi-J/tetris-v1',
    stack: [
      'React.js',
      'JavaScript',
      'styled-components',
      'Redux',
      'Node.js',
      'Express.js',
    ],
    deploy: 'Railway',
    slideImgs: [
      'tetris/tetris1.png',
      'tetris/tetris2.png',
      'tetris/tetris3.png',
    ],
    detailDescriptions: [
      'React.js로 만들어진 웹 테트리스 게임입니다.',
      '주요 기능들을 훅으로 정의해 재사용이 가능하도록 모듈화되어있으며 개인적으로 React 숙련도를 높이는데 많은 도움이되었던 고마운 프로젝트입니다.',
    ],
  },

  sorting: {
    id: 'sorting',
    date: 2023,
    imgSrc: '/assets/thumbnail/sorting_thumb.png',
    title: 'Sorting Algorithm Visualization',
    description:
      '웹 개발을 시작한 이후 첫 작업물로 \n정렬 알고리즘을 시각화한 프로젝트입니다.',
    website: 'https://algorithm-visualization-steel.vercel.app/',
    github: 'https://github.com/lofi-J/Algorithm-Visualization',
    stack: ['React.js', 'TypeScript', 'styled-components', 'Recoil'],
    deploy: 'Netlify',
    slideImgs: [
      'sorting/sorting1.png',
      'sorting/sorting2.png',
      'sorting/sorting3.png',
    ],
    detailDescriptions: [
      '첫 웹 프로젝트로 HTML canvas와 Web Audio API를 이용해\n정렬알고리즘들의 진행과정을 시각화한 프로젝트입니다.',
    ],
  },

  ascii: {
    id: 'ascii',
    date: 2024,
    imgSrc: '/assets/thumbnail/ascii_thumb.png',
    title: 'ASCII Art Maker',
    description:
      '이미지를 선택해 ASCII 아트를 생성하거나\nText를 입력해 ASCII 아트를 생성할 수 있습니다.',
    website: 'https://ascii-maker.vercel.app/',
    github: 'https://github.com/lofi-J/Ascii-Maker',
    stack: ['Next.js', 'TypeScript', 'CSS Modules'],
    deploy: 'Railway',
    slideImgs: [
      'ascii/ascii1.png',
      'ascii/ascii2.png',
      'ascii/ascii3.png',
      'ascii/ascii4.png',
      'ascii/ascii5.png',
    ],
    detailDescriptions: [
      'Next.js로 제작한 ASCII 아트 생성기입니다. HTML Canvas를 활용해 이미지를 분석하고 이를 ASCII 아트로 변환해줍니다.',
    ],
  },
};

export const isValidWorkId = (id: string) => {
  return !!Object.values(Works).find((work) => work.id === id);
};
