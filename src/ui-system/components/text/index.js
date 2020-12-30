import { css } from '@emotion/core'
import styled from '@emotion/styled'
import React from 'react'

const TextWrapper = styled.div`
  font-size: ${p => `var(--text-${p.size})`};
  color: ${p => `var(--c-${p.color})`};
  text-align: ${p => p.align};
  display: ${p => p.display};
  
  ${p => p.hasCaps && css`
    letter-spacing: 0.7em;
    text-transform: uppercase;
  `};
`

const Text = ({children, size, hasCaps, color, align, display, ...props}) => {
  return (
    <TextWrapper size={size} hasCaps={hasCaps} color={color} align={align} display={display} {...props}>
      {children}
    </TextWrapper>
  )
}

export default Text