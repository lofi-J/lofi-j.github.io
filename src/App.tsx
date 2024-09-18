import {BrowserRouter} from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout.tsx";
import Home from "./pages/Home.tsx";
import {useEffect, useState} from "react";


export type Theme = 'light' | 'dark';

function App() {
  const [theme, setTheme] = useState<Theme>(() => {
    const userPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    return localStorage.getItem('theme') as Theme || (userPrefersDark ? 'dark' : 'light');
  });
  
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);
  
  return (
    <BrowserRouter>
      <Layout theme={theme} setTheme={setTheme} />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<>about</>} />
        <Route path='/work' element={<>work</>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
