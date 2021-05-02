import styled from '@emotion/styled'
import React from 'react'

const variants = {
  fill: {
    background: 'var(--bodyContent)',
    color: 'var(--bodyBg)',
    borderColor: 'transparent',
  },
  outline: {
    background: 'transparent',
    color: 'var(--bodyContent)',
    borderColor: 'var(--c-border)',
  }
}

const ButtonWrapper = styled.button`
  appearance: none;
  font: inherit;
  color: inherit;
  padding: 0.25rem 0.5rem;
  border: 1px solid var(--c-border);
  cursor: pointer;
  ${props => props.hasFullWidth && `width: 100%`};
  ${props => variants[props.variant]};
  display: inline-block;
  text-align: center;
  transition: 0.8s;

  &:focus {
    border-color: var(--c-red);
    outline: none;
  }
  
  &:hover {
    background-color: var(--c-red);
    color: white;
    transition: 0.3s;
  }
`

const Button = ({children, onClick, variant, ...rest}) => (
  <ButtonWrapper onClick={onClick} variant={variant} {...rest}>{children}</ButtonWrapper>
)

Button.defaultProps = {
  variant: 'outline',
}

export default Button