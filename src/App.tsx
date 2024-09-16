import {BrowserRouter} from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout.tsx";
import Home from "./pages/Home.tsx";

function App() {
  return (
    <BrowserRouter>
      <Layout />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<>about</>} />
        <Route path='/work' element={<>work</>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
