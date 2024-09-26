import {css} from "@emotion/react";
import TechStack from "../static/TechStacks";


interface ITechStacks {
  type: keyof typeof TechStack;
}
const TechStacks = ({type}: ITechStacks) => {
  return (
    <div css={main}>
      <div className="title">{TechStack[type].fullName}</div>
      <div className="wrap">
      
      </div>
    </div>
  );
}

const main = css`
  display: flex;
  gap: 2rem;
  .title {
    font-size: 1.4rem;
    font-weight: bold;
    min-width: 10rem;
  }
  .wrap {
    display: flex;
    gap: 1rem;
  }
`;

export default TechStacks;