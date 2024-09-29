import {css} from "@emotion/react";
import {useNavigate} from "react-router-dom";
import {mq} from "../../styles/media.ts";


interface IWorkCard {
  id: string;
  imgSrc: string;
  title: string;
  description: string;
}

const WorkCard = ({id, imgSrc, title, description}: IWorkCard) => {
  const navigate = useNavigate();
  const goToDetail = () => navigate(id);
  
  return (
    <div css={main}>
      <div onClick={() => goToDetail()}>
        <img src={imgSrc} alt={`${title}.png`} />
      </div>
      <div className="text-wrap">
        <div className="work-title" onClick={() => goToDetail()}>{title}</div>
        <div className="description" dangerouslySetInnerHTML={{ __html: description.replace(/\n/g, "<br />") }} />
      </div>
    </div>
  );
}

const main = css`
  img {
    cursor: pointer;
    max-width: 100%;
    border: 1px solid var(--normal-gray);
    border-radius: 8px;
  }
  .text-wrap {
    .work-title {
      cursor: pointer;
      margin-top: 1rem;
      font-family: "Nanum Gothic", sans-serif;
      font-size: 1.6rem;
      font-weight: 700;
      text-align: center;
    }
    .description {
      font-family: -apple-system, sans-serif;
      font-size: 1.4rem;
      font-weight: 400;
      line-height: 2rem;
      margin-top: 0.8rem;
      text-wrap: wrap;
      word-break: break-word;
      text-align: center;
    }
  }
  ${mq('desktop')} {
    .work-title {
      font-size: 1.4rem;
    }
    .description {
      font-size: 1.2rem;
      font-weight: 100;
    }
  }
  ${mq('mobile')} {
    .text-wrap {
      .work-title {
        font-size: 1.5rem;
      }
      .description {
        font-size: 1.2rem;
        line-height: 1.4;
      }
    }
  }
`;

export default WorkCard;