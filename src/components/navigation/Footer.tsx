import React from 'react'
import styled from 'styled-components'
import { theme } from '../../styles/theme'
import { Container } from '../common/Container'
import { Link } from '../common/Typography'

const FooterWrapper = styled.footer`
  background-color: white;
  padding: ${theme.spacing.xl} 0;
  border-top: 1px solid ${theme.colors.border};
`

const FooterContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`

const SocialLinks = styled.div`
  display: flex;
  gap: ${theme.spacing.md};
  margin: ${theme.spacing.md} 0;
`

const FooterText = styled.p`
  color: ${theme.colors.text};
  font-size: 0.875rem;
  margin-top: ${theme.spacing.md};
`

const FooterLink = styled(Link)`
  color: ${theme.colors.text};
  transition: color 0.3s ease;

  &:hover {
    color: ${theme.colors.accent};
  }
`

export const Footer: React.FC = () => {
  return (
    <FooterWrapper>
      <FooterContainer>
        <SocialLinks>
          <FooterLink href="https://twitter.com/MiladMaker" target="_blank" rel="noopener noreferrer">
            Twitter
          </FooterLink>
          <FooterLink href="https://discord.gg/miladmaker" target="_blank" rel="noopener noreferrer">
            Discord
          </FooterLink>
          <FooterLink href="https://opensea.io/collection/miladmaker" target="_blank" rel="noopener noreferrer">
            OpenSea
          </FooterLink>
        </SocialLinks>
        <FooterText>
          Milad Maker is a collection of 10,000 generative pfpFTs in a special aesthetic inspired by Milad Mohseni
        </FooterText>
        <FooterText>
          © {new Date().getFullYear()} Milad Maker. All rights reserved.
        </FooterText>
      </FooterContainer>
    </FooterWrapper>
  )
}