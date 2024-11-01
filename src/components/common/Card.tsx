import styled from 'styled-components'
import { theme } from '../../styles/theme'

export const Card = styled.div`
  background: ${theme.colors.cardBackground};
  border-radius: ${theme.borderRadius.medium};
  padding: ${theme.spacing.md};
  box-shadow: ${theme.shadows.card};
  border: 1px solid ${theme.colors.border};
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: ${theme.shadows.hover};
  }
`

export const NFTCard = styled(Card)`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: ${theme.spacing.lg};
  
  img {
    width: 100%;
    height: auto;
    border-radius: ${theme.borderRadius.small};
    margin-bottom: ${theme.spacing.md};
  }

  h3 {
    color: ${theme.colors.text};
    margin-bottom: ${theme.spacing.sm};
  }

  p {
    color: ${theme.colors.text};
    font-size: 0.9rem;
    margin-bottom: ${theme.spacing.md};
  }
`

export const StatsCard = styled(Card)`
  background: ${theme.colors.primary};
  color: white;
  text-align: center;
  padding: ${theme.spacing.md};

  h4 {
    font-size: 1.2rem;
    margin-bottom: ${theme.spacing.xs};
  }

  p {
    font-size: 2rem;
    font-weight: bold;
  }
`