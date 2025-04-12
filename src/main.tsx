import { createRoot } from 'react-dom/client';
import { css, Global } from '@emotion/react';
import App from './App.tsx';
import { mq } from './styles/media.ts';

const globalStyle = css`
  @import url('https://fonts.googleapis.com/css2?family=M+PLUS+Rounded+1c:wght@100;300;400;500;700;800;900&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Nanum+Gothic:wght@100;200;300;400;500;700;800;900&display=swap');

  // CSS Var
  :root {
    --background-color: rgb(24, 24, 24);
    --color: rgb(233, 233, 233);
    --header-background-color: #20202380;
    --origin-color: #fff;
    --origin-background: #000;

    --normal-gray: #525252;
    --gray-50: #f7fafc;
    --gray-100: #edf2f7;
    --gray-200: #e2e8f0;
    --gray-300: #cbd5e0;
    --gray-400: #a0aec0;
    --gray-500: #718096;
    --gray-600: #4a5568;
    --gray-700: #2d3748;
    --gray-800: #1a202c;
    --gray-900: #171923;

    --white-alpha-100: rgba(255, 255, 255, 0.04);
    --white-alpha-200: rgba(255, 255, 255, 0.06);
    --white-alpha-300: rgba(255, 255, 255, 0.08);
    --white-alpha-400: rgba(255, 255, 255, 0.16);
    --white-alpha-500: rgba(255, 255, 255, 0.24);
    --white-alpha-600: rgba(255, 255, 255, 0.36);
    --white-alpha-700: rgba(255, 255, 255, 0.48);
    --white-alpha-800: rgba(255, 255, 255, 0.64);
    --white-alpha-900: rgba(255, 255, 255, 0.8);

    --teal-100: #b2f5ea;
    --teal-200: #81e6d9;
    --teal-300: #4fd1c5;
    --teal-400: #38b2ac;
    --teal-500: #319795;
    --teal-600: #2c7a7b;
    --teal-700: #285e61;
    --teal-800: #234e52;
    --teal-900: #1d4044;

    // teal accent
    --accent-teal: var(--teal-200);
    --accent-teal-background: rgba(129, 230, 217, 0.12);
    --accent-teal-background-hover: rgba(129, 230, 217, 0.5);

    // button
    --button-bg: var(--accent-teal-background);
    --button-bg-hover: var(--accent-teal-background-hover);

    --orange: #fbd38d;
    --orange-100: #eec886;
    --orange-200: #e2be7f;
    --purple: #6b46c1;
    --purple-100: #6642b7;
    --purple-200: #603fae;
    --link-color: #ff63c3;

    --max-header-height: 5rem;
    --max-width: 120rem;
    --backdrop: 1rem;
  }
  [data-theme='light'] {
    --background-color: rgb(237, 225, 210);
    --color: rgb(20, 24, 33);
    --origin-color: #000;
    --origin-background: #fff;

    --header-background-color: #ffffff40;
    --link-color: rgb(61, 122, 237);

    // accent teal
    --accent-teal: var(--teal-400);
    --accent-teal-background: var(--teal-100);
    --accent-teal-background-hover: var(--teal-200);
    // button
    --button-bg: var(--teal-100);
    --button-bg-hover: var(--teal-200);
  }

  // initial CSS
  html {
    font-size: 62.5%;
    // scrollbar custom
    scrollbar-width: thin;
    scrollbar-color: var(--normal-gray) var(--background-color);
  }
  body {
    &::-webkit-scrollbar {
      scrollbar-width: thin;
      scrollbar-color: var(--normal-gray) var(--background-color);
    }
  }
  main,
  body {
    margin: 0;
    background-color: var(--background-color);
    color: var(--color);
  }
  main {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 6rem;
    margin-top: 35rem;
    .frame-container {
      position: relative;
      width: 60rem;
      padding: 0 1.6rem;
    }
    ${mq('tablet')} {
      margin-top: 25rem;
      .frame-container {
        width: 48rem;
      }
    }
    ${mq('mobile')} {
      margin-top: 18rem;
      .frame-container {
        width: 32rem;
        padding: 0 0.4rem;
      }
    }
  }
  header {
    z-index: 10;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    padding: 0.8rem;
    background: var(--header-background-color);
    max-height: var(--max-header-height);
  }
  * {
    box-sizing: border-box;
    font-family: 'Nanum Gothic', sans-serif;
    font-weight: 400;
    font-style: normal;
  }
  a {
    color: var(--color);
    text-decoration: unset;
  }
  button {
    cursor: pointer;
    outline: none;
    border: none;
  }
  .link {
    cursor: pointer;
    color: var(--link-color);
    &:hover {
      text-decoration: underline;
      text-underline-offset: 0.4rem;
    }
  }

  // keyframes
  @keyframes spin {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(359deg);
    }
  }
  @keyframes minusSpin {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(-359deg);
    }
  }
`;

createRoot(document.getElementById('root')!).render(
  <>
    <App />
    <Global styles={globalStyle} />
  </>
);
