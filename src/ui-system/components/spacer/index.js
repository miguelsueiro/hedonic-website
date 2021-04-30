import styled from '@emotion/styled'

const getSpace = (size) => {
  return `var(--space-${size})`
}

const Spacer = styled.div`
  padding-top: ${props => getSpace(props.t)};
  padding-bottom: ${props => getSpace(props.b)};
  padding-left: ${props => getSpace(props.l)};
  padding-right: ${props => getSpace(props.r)};
`

export default Spacer