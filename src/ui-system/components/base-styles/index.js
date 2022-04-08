import React from 'react'
import { Global, css } from '@emotion/core'
import { useBodyVars } from '../../../hooks';

const styles = css`
  :root {
    --c-darkBlue: hsl(203, 34%, 13%);

    --bodyBg: white;
    --bodyContent: var(--c-darkBlue);
    --bodyContentDimmed: hsla(203, 34%, 13%, 60%);
    
    --releasesBg: var(--c-darkBlue);
    --releasesContent: white;
    --releasesContentDimmed: hsla(203, 34%, 83%, 70%);  

    --text-l: clamp(1.5rem, 2.1vw, 1.8rem);
    --text-xl: clamp(2rem, 4.5vw, 3rem);
    --text-2xl: clamp(3rem, 6vw, 5rem);

    --c-red: #E3352E;
    --c-border: hsl(203, 34%, 13%, 10%);
    --c-borderLight: hsla(203, 34%, 83%, 10%);

    --lineHeightFixedAmount: 0.5rem;
    --lineHeightRelativeAmount: 0.9em;

    --globalLineHeight: calc(var(--lineHeightFixedAmount) + var(--lineHeightRelativeAmount));

    --space-s: 0.5rem;
    --space-m: 1.5rem;
    --space-l: 3rem;
    --space-xl: 6rem;
    --space-2xl: 8rem;
    
    --pagePadding: var(--space-m);
  }

  * {
    line-height: var(--globalLineHeight);
    box-sizing: border-box;
  }

  html, body, #root {
    height: 100%;
  }

  body {
    background-color: var(--bodyBg);
    color: var(--bodyContent);
    transition: background 0.3s;
    margin: 0;
    font-family: "QuioscoOne", -apple-system, BlinkMacSystemFont, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  a {
    color: inherit;
    text-decoration: none;

    &:hover {
      color: var(--c-red);
    }
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: 400;
    margin: unset;
  }

  h1 {
    font-size: var(--text-xl);
  }

  ul {
    margin: unset;
    padding: unset;
  }

  li {
    list-style: none;
    margin: unset;
  }

  img {
    max-width: 100%;
    display: block;
  }
`

const BaseStyles = () => {
  useBodyVars();

  return(
    <Global
      styles={styles}
    />
  )
}

export default BaseStyles