import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import {css, Global} from "@emotion/react";
import App from './App.tsx';


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
    --gray-50: #F7FAFC;
    --gray-100: #EDF2F7;
    --gray-200: #E2E8F0;
    --gray-300: #CBD5E0;
    --gray-400: #A0AEC0;
    --gray-500: #718096;
    --gray-600: #4A5568;
    --gray-700: #2D3748;
    --gray-800: #1A202C;
    --gray-900: #171923;
    
    --white-alpha-100: rgba(255, 255, 255, 0.04);
    --white-alpha-200: rgba(255, 255, 255, 0.06);
    --white-alpha-300: rgba(255, 255, 255, 0.08);
    --white-alpha-400: rgba(255, 255, 255, 0.16);
    --white-alpha-500: rgba(255, 255, 255, 0.24);
    --white-alpha-600: rgba(255, 255, 255, 0.36);
    --white-alpha-700: rgba(255, 255, 255, 0.48);
    --white-alpha-800: rgba(255, 255, 255, 0.64);
    --white-alpha-900: rgba(255, 255, 255, 0.80);
    
    --teal-100: #B2F5EA;
    --teal-200: #81E6D9;
    --teal-300: #4FD1C5;
    --teal-400: #38B2AC;
    --teal-500: #319795;
    --teal-600: #2C7A7B;
    --teal-700: #285E61;
    --teal-800: #234E52;
    --teal-900: #1D4044;
    
    --accent-teal: var(--teal-200);
    --accent-teal-background: rgba(129, 230, 217, 0.12);
    --orange: #FBD38D;
    --orange-100: #EEC886;
    --orange-200: #E2BE7F;
    --purple: #6B46C1;
    --purple-100: #6642B7;
    --purple-200: #603FAE;
    
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
    --accent-teal: var(--teal-400);
    --accent-teal-background: var(--teal-100);
  }
  
  // initial CSS
  html {
    font-size: 62.5%;
  }
  main, body {
    margin: 0;
    background-color: var(--background-color);
    color: var(--color);
  }
  main {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 6rem;
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
    font-family: "Nanum Gothic", sans-serif;
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
  
  // keyframes
  @keyframes spin {
    from { transform: rotate(0); }
    to { transform: rotate(359deg); }
  }
  @keyframes minusSpin {
    from { transform: rotate(0); }
    to { transform: rotate(-359deg); }
  }
`;

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
    <Global styles={globalStyle} />
  </StrictMode>,
)
