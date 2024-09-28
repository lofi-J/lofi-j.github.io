import {css} from "@emotion/react";


interface IWorkCard {
  imgSrc: string;
  title: string;
  description: string;
}

const WorkCard = ({imgSrc, title, description}: IWorkCard) => {
  
  return (
    <div css={main}>
      <div>
        <img src={imgSrc} alt={`${title}.png`} />
      </div>
      <div className="text-wrap">
        <div className="work-title">{title}</div>
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
`;

export default WorkCard;