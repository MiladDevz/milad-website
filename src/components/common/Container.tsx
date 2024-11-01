import styled from 'styled-components'
import { theme } from '../../styles/theme'

export const Container = styled.div`
  max-width: ${theme.breakpoints.desktop};
  width: 100%;
  margin: 0 auto !important;
  min-height: 100vh;
  padding: 0;
  box-sizing: border-box;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  
  @media (max-width: ${theme.breakpoints.tablet}) {
    margin: 0 auto !important;
    padding: 0;
    width: 100%;
  }
`

export const ContentWrapper = styled.div`
  padding: ${theme.spacing.xl} 0;
  width: 100%;
`

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: ${theme.spacing.md};
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