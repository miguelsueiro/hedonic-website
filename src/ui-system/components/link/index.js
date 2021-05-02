import css from '@emotion/css';
import styled from '@emotion/styled';
import { NavLink } from "react-router-dom";

const styles = css`
  &:hover {
    color: var(--c-red);
  }
`

const NavLinkWrapper = styled(NavLink)`
  ${styles}

  ${props => props.hasUnderline && `
    text-decoration: underline;
    text-underline-position: under;
  `};
`
const LinkWrapper = styled.a`
  ${styles}

  ${props => props.hasUnderline && `
    text-decoration: underline;
    text-underline-position: under;
  `};
`

const Link = ({to, href, children, hasUnderline, ...props}) => {
  if(to) {
    return <NavLinkWrapper to={to} hasUnderline={hasUnderline} {...props}>{children}</NavLinkWrapper>
  }
  if(href) {
    return <LinkWrapper href={href} hasUnderline={hasUnderline} {...props}>{children}</LinkWrapper>
  }
}

export default Link