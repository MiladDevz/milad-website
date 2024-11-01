import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './styles/globalStyles'
import { theme } from './styles/theme'
import { Layout } from './components/layout/Layout'
import { Home } from './pages/Home'
import { NFTs } from './pages/NFTs'

export const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/nfts" element={<NFTs />} />
          </Routes>
        </Layout>
      </Router>
    </ThemeProvider>
  )
}
export default App