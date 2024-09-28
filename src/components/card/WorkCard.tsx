import {css} from "@emotion/react";


interface IWorkCard {
  imgSrc: string;
  title: string;
  description: string;
}

const WorkCard = ({imgSrc, title, description}: IWorkCard) => {
  console.log(imgSrc)
  console.log(title)
  console.log(description)
  return (
    <div css={main}>
    
    </div>
  );
}

const main = css``;

export default WorkCard;