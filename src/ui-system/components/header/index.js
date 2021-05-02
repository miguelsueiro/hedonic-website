import styled from '@emotion/styled'
import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import Logo from '../../components/logo'

const NavItem = styled.li`
  a {
    text-decoration: none;
    transition: 0.3s;
    display: block;
    transform: translateX(0rem);
    position: relative;

    &:before {
      content: '';
      width: 1.5rem;
      height: 2px;
      display: block;
      position: absolute;
      left: -2rem;
      transform: scale(0, 1);
      top: 0;
      bottom: 0;
      margin: auto;
      transition: 0.3s;
    }

    &:hover {
      color: var(--c-red);
    }
  }

  .activeMenuNav {
    color: var(--c-red);
    transform: translateX(2rem);

    &:before {
      background-color: var(--c-red);
      transform: scale(1, 1);
    }
  }
`

const LogoSection = styled(Link)`
  width: 200px;

  @media (min-width: 1000px) {    
    width: 250px;
  }
`

const MenuWrapper = styled.ul`
  font-size: var(--text-l);
  max-width: 90%;
  ${p => p.menuTop && `margin-top: ${p.menuTop}`};

  @media (max-width: 600px) {    
    margin-top: var(--space-l);
  }
`

const Wrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
  position: absolute;
  top: var(--pagePadding);
  right: var(--pagePadding);
  z-index: 100;
`

export const Menu = ({ menuTop }) => (
  <MenuWrapper menuTop={menuTop}>
    <NavItem>
      <NavLink activeClassName="activeMenuNav" to="/releases">releases</NavLink>
    </NavItem>
    <NavItem>
      <NavLink activeClassName="activeMenuNav" to="/artists">artists</NavLink>
    </NavItem>
    <NavItem>
      <NavLink activeClassName="activeMenuNav" to="/info">info</NavLink>
    </NavItem>
  </MenuWrapper>
)

const Header = () => {
  return (
    <Wrapper>
      <LogoSection to="/">
        <Logo color="var(--c-red)" width="100%"/>
      </LogoSection>
    </Wrapper>
  )
}

export default Header