import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Container, Grid } from '../components/common/Container'
import { Title, Text } from '../components/common/Typography'
import { NFTCard } from '../components/nft/NFTCard'
import { theme } from '../styles/theme'

const CollectionHeader = styled.div`
  text-align: center;
  margin-bottom: ${theme.spacing.xl};
`

const FilterSection = styled.div`
  display: flex;
  justify-content: center;
  gap: ${theme.spacing.md};
  margin-bottom: ${theme.spacing.xl};
  flex-wrap: wrap;
`

const FilterButton = styled.button<{ active?: boolean }>`
  background: ${props => props.active ? theme.colors.primary : 'white'};
  color: ${props => props.active ? 'white' : theme.colors.text};
  border: 2px solid ${theme.colors.border};
  padding: ${theme.spacing.sm} ${theme.spacing.md};
  border-radius: ${theme.borderRadius.medium};
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: ${props => props.active ? theme.colors.accent : theme.colors.primary};
    color: white;
  }
`

// Mock data for demonstration
const mockNFTs = [
  {
    id: '1',
    image: '/nft-samples/happy.png',
    title: 'Milad #8524',
    description: 'Happy style Milad',
    tokenId: '1',
    style: 'Happy'
  },
  {
    id: '2',
    image: '/nft-samples/kawaii.png',
    title: 'Milad #8380',
    description: 'Kawaii style Milad',
    tokenId: '2',
    style: 'Kawaii'
  },
  {
    id: '3',
    image: '/nft-samples/gamer.png',
    title: 'Milad #1815',
    description: 'Gamer style Milad',
    tokenId: '3',
    style: 'Gamer'
  }
]

const styles = ['All', 'Happy', 'Kawaii', 'Gamer']

export const NFTCollection: React.FC = () => {
  const [selectedStyle, setSelectedStyle] = useState('All')
  const [filteredNFTs, setFilteredNFTs] = useState(mockNFTs)

  useEffect(() => {
    if (selectedStyle === 'All') {
      setFilteredNFTs(mockNFTs)
    } else {
      setFilteredNFTs(mockNFTs.filter(nft => nft.style === selectedStyle))
    }
  }, [selectedStyle])

  return (
    <Container>
      <CollectionHeader>
        <Title>Milad Maker Collection</Title>
        <Text>
          A collection of 10,000 generative pfpFTs in a special aesthetic inspired by modern fashion and nostalgia.
        </Text>
      </CollectionHeader>

      <FilterSection>
        {styles.map(style => (
          <FilterButton
            key={style}
            active={selectedStyle === style}
            onClick={() => setSelectedStyle(style)}
          >
            {style}
          </FilterButton>
        ))}
      </FilterSection>

      <Grid>
        {filteredNFTs.map(nft => (
          <NFTCard
            key={nft.id}
            image={nft.image}
            title={nft.title}
            description={nft.description}
            tokenId={nft.tokenId}
            style={nft.style}
          />
        ))}
      </Grid>
    </Container>
  )
}