import { css } from '@emotion/react';
import TechStack from "../static/TechStacks";
import SVGIcon from '../assets/svg/svg.tsx';
import { Tooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css';


interface ITechStacks {
  type: keyof typeof TechStack;
}

const TechStacks = ({type}: ITechStacks) => {
  
  return (
    <div css={main}>
      <div className="title">
        <span>{TechStack[type].fullName}</span>
      </div>
      <div className="wrap">
        {TechStack[type].skills.map((skill, i) => (
          <div className={'icon-wrap'} key={`tech-icon-${i}`}>
            <SVGIcon
              className={skill.svg}
              name={skill.svg}
              color={skill.color}
              data-tooltip-id={`tooltip-${skill.name}`}
              data-tooltip-content={skill.name}
            />
            <Tooltip
              id={`tooltip-${skill.name}`}
              place={'top'}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

const main = css`
  display: flex;
  align-items: center;
  gap: 1rem;
  .title {
    display: flex;
    align-items: center;
    min-width: 10rem;
    span {
      font-family: apple-system, system-ui, sans-serif;
      font-size: 1.4rem;
      font-weight: 500;
      border-radius: 4px;
      padding: 0.4rem 0.8rem;
      color: var(--accent-teal);
      background-color: var(--accent-teal-background);
    }
  }
  .wrap {
    display: flex;
    gap: 1rem;
    svg {
      width: 2rem;
      height: 2rem;
    }
    .next, .railway, .github {
      border-radius: 50%;
      border: 0.1rem solid var(--color);
      background-color: var(--color);
    }
    .cssmodule {
      stroke: var(--origin-color);
    }
  }
`;

export default TechStacks;