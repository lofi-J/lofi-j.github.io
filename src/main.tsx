import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import {css, Global} from "@emotion/react";
import App from './App.tsx';


const globalStyle = css`
  @import url('https://fonts.googleapis.com/css2?family=M+PLUS+Rounded+1c:wght@100;300;400;500;700;800;900&display=swap');
  
  
  // CSS Var
  :root {
    --background-color: rgb(24, 24, 24);
    --color: rgb(233, 233, 233);
    
    --max-width: 120rem;
    --header-height: 4rem;
    --backdrop: 1rem;
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
  header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    padding: 0.8rem;
    background: #20202380;
    height: var(--header-height);
  }
  main {
    padding-top: var(--header-height);
  }
  * {
    box-sizing: border-box;
  }
`;

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
    <Global styles={globalStyle} />
  </StrictMode>,
)
