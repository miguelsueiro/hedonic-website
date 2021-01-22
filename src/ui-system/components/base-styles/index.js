import React from 'react'
import { Global, css } from '@emotion/core'
import { useBodyVars } from '../../../hooks';

const styles = css`
  :root {
    --c-darkBlue: #16242D;

    --bodyBg: white;
    --bodyContent: var(--c-darkBlue);
    
    --releasesBg: var(--c-darkBlue);
    --releasesContent: white;

    --text-l: clamp(1.5rem, 2.1vw, 1.8rem);
    --text-xl: clamp(2rem, 4.5vw, 4rem);
    --text-2xl: clamp(3rem, 6vw, 5rem);

    --c-red: #E3352E;
    --c-border: hsla(0,0%,0%,0.1);

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
  }

  body {
    background-color: var(--bodyBg);
    color: var(--bodyContent);
    transition: background 0.3s;
    font-family: QuioscoOne;
    margin: 0;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: 400;
    margin: unset;
  }

  h1 {
    font-size: var(--text-xl);
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