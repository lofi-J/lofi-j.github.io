import { useContext } from 'react';
import { ThemeContext } from '../modules/ThemeContext.tsx';


const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme은 ThemeProvider 내부에서 사용되어야 합니다.');
  }
  return context;
}

export default useTheme;