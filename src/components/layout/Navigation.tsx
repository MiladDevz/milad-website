import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { theme } from '../../styles/theme'

const Nav = styled.nav`
  width: 100%;
  padding: ${theme.spacing.md} ${theme.spacing.xl};
  background: ${theme.colors.background};
  border-bottom: 1px solid ${theme.colors.border};
`

const NavContainer = styled.div`
  max-width: ${theme.breakpoints.desktop};
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const NavLink = styled(Link)`
  color: ${theme.colors.text};
  text-decoration: none;
  font-size: 1.1rem;
  padding: ${theme.spacing.sm} ${theme.spacing.md};
  border-radius: 4px;
  transition: background-color 0.2s;

  &:hover {
    background-color: ${theme.colors.hover};
  }
`

export const Navigation = () => {
  return (
    <Nav>
      <NavContainer>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/nfts">NFTs</NavLink>
      </NavContainer>
    </Nav>
  )
}