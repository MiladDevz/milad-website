import styled from 'styled-components'
import { theme } from '../../styles/theme'

export const Container = styled.div`
  max-width: ${theme.breakpoints.desktop};
  margin: 0 auto;
  padding: 0 ${theme.spacing.md};

  @media (max-width: ${theme.breakpoints.tablet}) {
    padding: 0 ${theme.spacing.sm};
  }
`

export const ContentWrapper = styled.div`
  padding: ${theme.spacing.xl} 0;
`

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: ${theme.spacing.lg};
  padding: ${theme.spacing.md} 0;
`

export const FlexContainer = styled.div`
  display: flex;
  align-items: center;
  gap: ${theme.spacing.md};

  @media (max-width: ${theme.breakpoints.tablet}) {
    flex-direction: column;
  }
`