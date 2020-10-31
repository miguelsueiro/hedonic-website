import React from 'react'
import { Global, css } from '@emotion/core'
import { useBodyVars } from '../../../hooks';

const styles = css`
  :root {
    --bodyBg: white;
    --bodyContent: #222;
    
    --releasesBg: #1B262F;
    --releasesContent: white;

    --text-l: 1.8rem;
    --text-xl: 4rem;

    --c-red: #E3352E;

    --lineHeightFixedAmount: 0.5rem;
    --lineHeightRelativeAmount: 0.9em;

    --globalLineHeight: calc(var(--lineHeightFixedAmount) + var(--lineHeightRelativeAmount));

    --space-m: 1.5rem;
    
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
    padding: var(--pagePadding);
    margin: 0;
  }

  a {
    color: inherit;
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: 400;
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