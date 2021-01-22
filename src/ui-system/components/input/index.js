import styled from '@emotion/styled'
import React from 'react'

const InputWrapper = styled.input`
  appearance: none;
  font: inherit;
  color: inherit;
  padding: 0.25rem 0;
  border: 1px solid transparent;
  border-bottom-color: var(--c-border);

  &:focus {
    border-bottom-color: var(--c-red);
    outline: none;
  }
`

const Input = React.forwardRef((props, ref) => (
  <InputWrapper ref={ref} placeholder={props.placeholder} type={props.type} />
))

export default Input