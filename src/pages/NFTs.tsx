import { useState, useEffect } from 'react'
import { Container, ContentWrapper, Grid } from '../components/common/Container'
import styled from 'styled-components'
import { theme } from '../styles/theme'
import { getNFTsByCollection } from '../services/opensea'

const NFTCard = styled.div`
  border: 1px solid ${theme.colors.border};
  border-radius: 8px;
  overflow: hidden;
  transition: transform 0.2s;
  cursor: pointer;

  &:hover {
    transform: translateY(-5px);
  }
`

const NFTImage = styled.img`
  width: 100%;
  height: 250px;
  object-fit: cover;
`

const NFTInfo = styled.div`
  padding: ${theme.spacing.md};
`

const NFTTitle = styled.h3`
  margin: 0;
  font-size: 1.1rem;
  color: ${theme.colors.text};
`

const NFTDescription = styled.p`
  color: ${theme.colors.textSecondary};
  font-size: 0.9rem;
  margin: ${theme.spacing.sm} 0;
`

const LoadingContainer = styled.div`
  width: 100%;
  text-align: center;
  padding: ${theme.spacing.xl};
  color: ${theme.colors.text};
`

export const NFTs = () => {
  const [nfts, setNfts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNFTs = async () => {
      try {
        const data = await getNFTsByCollection();
        setNfts(data);
      } catch (error) {
        console.error('Failed to fetch NFTs:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchNFTs();
  }, []);

  return (
    <Container>
      <ContentWrapper>
        {loading ? (
          <LoadingContainer>Loading NFTs...</LoadingContainer>
        ) : (
          <Grid>
            {nfts.map((nft: any) => (
              <NFTCard key={nft.id} onClick={() => window.open(nft.permalink, '_blank')}> 
                <NFTImage src={nft.image_url} alt={nft.name} />
                <NFTInfo>
                  <NFTTitle>{nft.name}</NFTTitle>
                  <NFTDescription>{nft.description}</NFTDescription>
                </NFTInfo>
              </NFTCard>
            ))}
          </Grid>
        )}
      </ContentWrapper>
    </Container>
  )
}
