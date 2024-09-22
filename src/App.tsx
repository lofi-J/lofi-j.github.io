import {BrowserRouter} from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout.tsx";
import Home from "./pages/Home.tsx";
import { ThemeProvider } from './modules/ThemeContext.tsx';


export type Theme = 'light' | 'dark';

function App() {
  
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Layout />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<>about</>} />
          <Route path='/work' element={<>work</>} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
