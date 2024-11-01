import styled from 'styled-components'
import { theme } from '../../styles/theme'

export const Button = styled.button`
  background: ${theme.colors.primary};
  color: white;
  padding: ${theme.spacing.sm} ${theme.spacing.md};
  border-radius: ${theme.borderRadius.medium};
  border: none;
  font-size: ${theme.typography.body.fontSize};
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background: ${theme.colors.accent};
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`

export const OutlineButton = styled(Button)`
  background: transparent;
  border: 2px solid ${theme.colors.primary};
  color: ${theme.colors.primary};

  &:hover {
    background: ${theme.colors.primary};
    color: white;
  }
`