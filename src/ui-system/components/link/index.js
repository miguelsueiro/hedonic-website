import css from '@emotion/css';
import styled from '@emotion/styled';
import { NavLink } from "react-router-dom";

const styles = css`
  &:hover {
    color: var(--c-red);
  }
`

const NavLinkWrapper = styled(NavLink)`${styles}`
const LinkWrapper = styled.a`${styles}`

const Link = ({to, href, children, ...props}) => {
  if(to) {
    return <NavLinkWrapper to={to} {...props}>{children}</NavLinkWrapper>
  }
  if(href) {
    return <LinkWrapper href={href} {...props}>{children}</LinkWrapper>
  }
}

export default Link