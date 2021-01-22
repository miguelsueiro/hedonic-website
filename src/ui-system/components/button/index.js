import styled from '@emotion/styled'
import React from 'react'

const ButtonWrapper = styled.button`
  appearance: none;
  font: inherit;
  color: inherit;
  padding: 0.25rem 0.5rem;
  border: 1px solid var(--c-border);
  cursor: pointer;
  background: none;

  &:focus {
    border-color: var(--c-red);
    outline: none;
  }
`

const Button = ({children, onClick, ...rest}) => (
  <ButtonWrapper onClick={onClick} {...rest}>{children}</ButtonWrapper>
)

export default Button