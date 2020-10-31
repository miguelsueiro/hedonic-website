import { css } from '@emotion/core'
import styled from '@emotion/styled'
import React from 'react'

const TextWrapper = styled.div`
  font-size: ${p => `var(--text-${p.size})`};
  
  ${p => p.hasCaps && css`
    letter-spacing: 0.7em;
    text-transform: uppercase;
  `};
`

const Text = ({children, size, hasCaps, ...props}) => {
  return (
    <TextWrapper size={size} hasCaps={hasCaps} {...props}>
      {children}
    </TextWrapper>
  )
}

export default Text