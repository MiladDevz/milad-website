import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './styles/globalStyles'
import { theme } from './styles/theme'
import { Layout } from './components/layout/Layout'
import { Navbar } from './components/navigation/Navbar'
import { Footer } from './components/navigation/Footer'
import { NFTCollection } from './pages/NFTCollection'
import { MemeGenerator } from './pages/MemeGenerator'

const Home: React.FC = () => (
  <div style={{ textAlign: 'center', padding: '2rem' }}>
    <h1>Welcome to Milad Maker</h1>
    <p>A collection of 10,000 generative pfpFTs in a special aesthetic inspired by Milad Mohseni</p>
  </div>
)

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router>
        <Layout>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/nft-collection" element={<NFTCollection />} />
            <Route path="/meme-generator" element={<MemeGenerator />} />
          </Routes>
          <Footer />
        </Layout>
      </Router>
    </ThemeProvider>
  )
}
