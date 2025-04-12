import { BrowserRouter } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout.tsx';
import HomePage from './pages/HomePage.tsx';
import FloatingGuide from './components/button/FloatingGuide.tsx';
import { ThemeProvider } from './modules/ThemeContext.tsx';
import WorksPage from './pages/WorksPage.tsx';
import WorkDetailPage from './pages/WorkDetailPage.tsx';
import NotFoundPage from './pages/NotFoundPage.tsx';

export type Theme = 'light' | 'dark';

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <FloatingGuide />
        <Layout />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/works" element={<WorksPage />} />
          <Route path="/works/:id" element={<WorkDetailPage />} />

          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
