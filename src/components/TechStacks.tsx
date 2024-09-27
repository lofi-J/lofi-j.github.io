import { css } from '@emotion/react';
import TechStack from "../static/TechStacks";
import SVGIcon from '../assets/svg/svg.tsx';
import { Tooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css';
import { Theme } from '../App.tsx';
import useTheme from '../hooks/useTheme.ts';
import {mq} from "../styles/media.ts";


interface ITechStacks {
  type: keyof typeof TechStack;
}

const TechStacks = ({type}: ITechStacks) => {
  const {theme} = useTheme();
  
  return (
    <div css={main(theme)}>
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

const main = (theme: Theme) => css`
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
      &:hover {
        transform: scale(1.15);
      }
    }
    /* svg icon exceptions */
    .javascript {
       background-color: ${theme === 'dark' ? 'var(--background-color)' : 'var(--color)'};
    }
    .next {
      border-color: ${theme === 'dark' ? 'transparent' : 'var(--background-color)'};
      background-color: ${theme === 'dark' ? '' : 'var(--background-color)'};
    }
    .cssmodule, .githubpages {
      stroke: var(--normal-gray);
    }
    .railway, .github, .next {
      fill: black;
      background-color: white;
      border: 0.1rem solid ${theme === 'dark' ? 'var(--color)' : 'var(--background-color)'};
      border-radius: 50%;
    }
  }
  ${mq('mobile')} {
    .title {
      min-width: 8rem;
      span {
        font-size: 1.2rem;
      }
    }
    .wrap {
      gap: 0.6rem;
    }
  }
`;

export default TechStacks;