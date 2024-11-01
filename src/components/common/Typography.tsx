import styled from 'styled-components'
import { theme } from '../../styles/theme'

export const Title = styled.h1`
  font-size: ${theme.typography.heading.fontSize};
  font-weight: ${theme.typography.heading.fontWeight};
  color: ${theme.colors.text};
  margin-bottom: ${theme.spacing.md};
`

export const Subtitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 600;
  color: ${theme.colors.text};
  margin-bottom: ${theme.spacing.sm};
`

export const Text = styled.p`
  font-size: ${theme.typography.body.fontSize};
  line-height: ${theme.typography.body.lineHeight};
  color: ${theme.colors.text};
  margin-bottom: ${theme.spacing.sm};
`

export const SmallText = styled.span`
  font-size: 0.875rem;
  color: ${theme.colors.text};
  opacity: 0.8;
`

export const Link = styled.a`
  color: ${theme.colors.accent};
  text-decoration: none;
  transition: color 0.3s ease;

  &:hover {
    color: ${theme.colors.secondary};
  }
`

export const Label = styled.label`
  font-size: 0.875rem;
  font-weight: 600;
  color: ${theme.colors.text};
  margin-bottom: ${theme.spacing.xs};
  display: block;
`