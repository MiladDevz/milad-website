import React from 'react'
import styled from 'styled-components'
import { Link as RouterLink } from 'react-router-dom'
import { theme } from '../../styles/theme'
import { Container } from '../common/Container'

const Nav = styled.nav`
  background-color: white;
  padding: ${theme.spacing.md} 0;
  border-bottom: 1px solid ${theme.colors.border};
`

const NavContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const NavLink = styled(RouterLink)`
  color: ${theme.colors.text};
  text-decoration: none;
  padding: ${theme.spacing.sm} ${theme.spacing.md};
  border-radius: ${theme.borderRadius.medium};
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${theme.colors.background};
    color: ${theme.colors.accent};
  }

  &.active {
    color: ${theme.colors.accent};
  }
`

const NavLinks = styled.div`
  display: flex;
  gap: ${theme.spacing.md};
`

const Logo = styled.img`
  height: 40px;
  cursor: pointer;
`

export const Navbar: React.FC = () => {
  return (
    <Nav>
      <NavContainer>
        <RouterLink to="/">
          <Logo src="/milad-maker-logo.png" alt="Milad Maker" />
        </RouterLink>
        <NavLinks>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/nft-collection">NFT Collection</NavLink>
          <NavLink to="/meme-generator">Meme Generator</NavLink>
        </NavLinks>
      </NavContainer>
    </Nav>
  )
}