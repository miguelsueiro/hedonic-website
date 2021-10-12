import { css } from '@emotion/core'
import styled from '@emotion/styled'
import React from 'react'

const TextWrapper = styled.div`
  font-size: ${p => `var(--text-${p.size})`};
  color: ${p => `var(--c-${p.color})`};
  text-align: ${p => p.align};
  display: ${p => p.display};
  max-width: ${p => p.maxWidth};
  ${p => p.isDimmed && `opacity: 0.6`};
  
  ${p => p.hasCaps && css`
    letter-spacing: 0.6em;
    text-transform: uppercase;
    font-weight: 700;
  `};
`

const Text = ({children, size, hasCaps, color, align, display, maxWidth, isDimmed, ...props}) => {
  return (
    <TextWrapper size={size} hasCaps={hasCaps} color={color} align={align} display={display} maxWidth={maxWidth} isDimmed={isDimmed} {...props}>
      {children}
    </TextWrapper>
  )
}

export default Text