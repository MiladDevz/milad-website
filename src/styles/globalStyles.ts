import { createGlobalStyle } from 'styled-components'
import { theme } from './theme'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    box-sizing: border-box;
    padding: 0;
  }

  body {
    font-family: ${theme.typography.fontFamily};
    background-color: ${theme.colors.background};
    min-height: 100vh;
    color: ${theme.colors.text};
    line-height: ${theme.typography.body.lineHeight};
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: stretch;
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: ${theme.typography.heading.fontWeight};
    line-height: ${theme.typography.heading.lineHeight};
    margin-bottom: ${theme.spacing.md};
  }

  a {
    color: ${theme.colors.accent};
    text-decoration: none;
    transition: color 0.3s ease;

    &:hover {
      color: ${theme.colors.secondary};
    }
  }

  button {
    cursor: pointer;
    border: none;
    background: ${theme.colors.primary};
    color: white;
    padding: ${theme.spacing.sm} ${theme.spacing.md};
    border-radius: ${theme.borderRadius.medium};
    transition: background-color 0.3s ease;

    &:hover {
      background: ${theme.colors.accent};
    }
  }

  .card {
    background: ${theme.colors.cardBackground};
    border-radius: ${theme.borderRadius.medium};
    padding: ${theme.spacing.md};
    box-shadow: ${theme.shadows.card};
    transition: box-shadow 0.3s ease;

    &:hover {
      box-shadow: ${theme.shadows.hover};
    }
  }

  .container {
    max-width: ${theme.breakpoints.desktop};
    width: 100%;
    margin: 0 auto;
    padding: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 100vh;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  @media (max-width: ${theme.breakpoints.tablet}) {
    html {
      font-size: 14px;
    }

    .container {
      padding: 0 ${theme.spacing.sm};
    }
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    html {
      font-size: 12px;
    }
  }
`