import { useNavigate } from 'react-router-dom';
import { css } from '@emotion/react';
import Button from '../components/button/Button.tsx';
import { mq } from '../styles/media.ts';

const NotFoundPage = () => {
  const navigate = useNavigate();
  const goHome = () => navigate('/');

  return (
    <main css={main}>
      <div className="frame-container">
        <div className="text-wrap">
          <h1>NOT FOUND</h1>
          <div className="desc">
            페이지를 찾을 수 없습니다.
            <br />
            하단 버튼 또는 네비게이션 메뉴를 통해 메인 페이지로 이동하실 수
            있습니다.
          </div>
        </div>
        <div className="btn-wrap">
          <Button text={'Return to home'} onClick={goHome} />
        </div>
      </div>
    </main>
  );
};

const main = css`
  background-color: transparent;
  width: 100%;
  height: 100%;
  .text-wrap {
    padding-bottom: 2.4rem;
    margin-bottom: 2.4rem;
    border-bottom: 0.1rem solid var(--normal-gray);
  }
  h1 {
    font-family: 'M PLUS Rounded 1c', sans-serif;
    font-size: 3.3rem;
    font-weight: bold;
  }
  .desc {
    font-size: 1.4rem;
    font-weight: 500;
    text-wrap: wrap;
  }
  .btn-wrap {
    display: flex;
    justify-content: center;
    button {
      font-weight: 600;
    }
  }
  ${mq('tablet')} {
    h1 {
      font-size: 3rem;
    }
    .desc {
      font-size: 1.2rem;
    }
  }
  ${mq('mobile')} {
    h1 {
      font-size: 2.2rem;
    }
    .desc {
      font-size: 1.2rem;
    }
  }
`;

export default NotFoundPage;
