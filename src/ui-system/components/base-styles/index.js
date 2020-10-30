import React from 'react'
import { Global, css } from '@emotion/core'
import { useBodyVars } from '../../../hooks';

const styles = css`
  :root {
    --bodyBg: white;
    --bodyContent: #222;
    
    --releasesBg: #111;
    --releasesContent: white;
  }

  body {
    background-color: var(--bodyBg);
    color: var(--bodyContent);
    transition: background 0.3s;
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