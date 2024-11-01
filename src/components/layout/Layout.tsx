import React from 'react'
import styled from 'styled-components'
import { theme } from '../../styles/theme'
import { Container } from '../common/Container'

const LayoutWrapper = styled.div`
  min-height: 100vh;
  background-color: ${theme.colors.background};
`

const Header = styled.header`
  background-color: white;
  padding: ${theme.spacing.md} 0;
  border-bottom: 1px solid ${theme.colors.border};
`

const Main = styled.main`
  padding: ${theme.spacing.xl} 0;
`

const Footer = styled.footer`
  background-color: white;
  padding: ${theme.spacing.lg} 0;
  border-top: 1px solid ${theme.colors.border};
  margin-top: auto;
`

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <LayoutWrapper>
      <Header>
        <Container>
          <img src="/milad-maker-logo.png" alt="Milad Maker" style={{ height: '40px' }} />
        </Container>
      </Header>
      <Main>
        <Container>
          {children}
        </Container>
      </Main>
      <Footer>
        <Container>
          <p>© 2024 Milad Maker. All rights reserved.</p>
        </Container>
      </Footer>
    </LayoutWrapper>
  )
}