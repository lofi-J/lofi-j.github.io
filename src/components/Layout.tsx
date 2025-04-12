import Header from './Header.tsx';
import { css } from '@emotion/react';
import useTheme from '../hooks/useTheme.ts';
import Character3D from './Character3D.tsx';

const Layout = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div css={layout}>
      <Header theme={theme} setTheme={setTheme} />
      <Character3D />
    </div>
  );
};

const layout = css`
  display: block;
  margin: 0 auto;
  max-width: 1700px;
`;

export default Layout;
