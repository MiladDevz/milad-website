import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Container } from '../components/common/Container';
import { Title, Text, Link } from '../components/common/Typography';
import { theme } from '../styles/theme';
import { MemeCanvas } from '../components/meme/MemeCanvas';
import { Footer } from '../components/navigation/Footer';
import { NFTCard } from '../components/nft/NFTCard';
import { openSeaService, NFTAsset, CollectionStats } from '../services/openSeaService';

const HomeContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0;
  margin: 0;
  overflow: hidden;

  > * {
    width: 100%;
  }
`;

const Banner = styled.div`
  width: 100%;
  margin: 0;
  padding: 0;
  line-height: 0;
  position: relative;
`;

const BannerImage = styled.img`
  width: 100%;
  height: auto;
  display: block;
  margin: 0;
  padding: 0;
`;

const Description = styled.div`
  padding: ${theme.spacing.xl};
  max-width: ${theme.breakpoints.desktop};
  margin: 0 auto;
  text-align: left;
  line-height: 1.5;
  background: white;
  box-sizing: border-box;
  width: 100%;
  padding: ${theme.spacing.xl} ${theme.spacing.xl};
`;

const SocialLinks = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: ${theme.spacing.md};
  margin-top: ${theme.spacing.lg};
`;

const SocialLink = styled(Link)`
  padding: ${theme.spacing.sm} ${theme.spacing.lg};
  background: ${theme.colors.primary};
  color: white;
  border-radius: ${theme.borderRadius.medium};
  text-decoration: none;
  font-weight: bold;
  &:hover {
    background: ${theme.colors.accent};
  }
`;

const Section = styled.div`
  max-width: ${theme.breakpoints.desktop};
  margin: ${theme.spacing.xl} auto;
  background-color: ${theme.colors.background};
  padding: ${theme.spacing.xl};
  border-radius: ${theme.borderRadius.medium};
  text-align: left;
  border: 1px solid ${theme.colors.border};
  background: white;
  box-sizing: border-box;
  width: 90%;

  @media (max-width: ${theme.breakpoints.tablet}) {
    width: 95%;
    padding: ${theme.spacing.lg};
  }
  
  @media (max-width: ${theme.breakpoints.mobile}) {
    width: 100%;
    padding: ${theme.spacing.md};
  }
`;

const NFTGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${theme.spacing.md};
  
  @media (max-width: ${theme.breakpoints.tablet}) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: ${theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
  margin-top: ${theme.spacing.lg};
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${theme.spacing.md};
  
  @media (max-width: ${theme.breakpoints.tablet}) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: ${theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
  margin-top: ${theme.spacing.lg};
`;

const StatCard = styled.div`
  background: ${theme.colors.background};
  padding: ${theme.spacing.md};
  border-radius: ${theme.borderRadius.medium};
  width: 100%;
  border: 1px solid ${theme.colors.border};
`;

const MemeSection = styled(Section)`
  margin: ${theme.spacing.xl} auto;
`;

const CanvasWrapper = styled.div`
  margin: ${theme.spacing.lg} auto;
  margin-left: 0;
  background: ${theme.colors.cardBackground};
  padding: ${theme.spacing.md};
  border-radius: ${theme.borderRadius.medium};
  border: 1px solid ${theme.colors.border};
  box-shadow: ${theme.shadows.card};
`;

export const Home: React.FC = () => {
  const [nfts, setNfts] = useState<NFTAsset[]>([]);
  const [stats, setStats] = useState<CollectionStats | null>(null);

  useEffect(() => {
    openSeaService.getCollectionNFTs().then(data => setNfts(data.nfts));
    openSeaService.getCollectionStats().then(data => setStats(data));
  }, []);

  return (
    <HomeContainer>
      <Banner>
        <BannerImage src="/banner.png" alt="Milad Maker" />
        <Description>
          <Title>Welcome to Milad Maker</Title>
          <Text>Welcome to Milad Maker! — ゆっくりしていってね! Milad Maker is a collection of 10,000 generative pfpNFT's in a neochibi aesthetic inspired by Milady Maker!</Text>
          <SocialLinks style={{ marginTop: theme.spacing.lg }}>
            <SocialLink href="https://twitter.com/MiladMaker" target="_blank" rel="noopener noreferrer">
              Twitter/X
            </SocialLink>
            <SocialLink href="https://discord.gg/miladmaker" target="_blank" rel="noopener noreferrer">
              Discord
            </SocialLink>
            <SocialLink href="https://opensea.io/collection/miladmaker" target="_blank" rel="noopener noreferrer">
              OpenSea
            </SocialLink>
          </SocialLinks>
        </Description>
      </Banner>

      <Section>
        <Title>Collection Stats</Title>
        <StatsGrid>
          <StatCard>
            <Title>10,000</Title>
            <Text>Total Supply</Text>
          </StatCard>
          <StatCard>
            <Title>{stats?.floor_price || '---'} ETH</Title>
            <Text>Floor Price</Text>
          </StatCard>
          <StatCard>
            <Title>{stats?.num_owners || '---'}</Title>
            <Text>Owners</Text>
          </StatCard>
        </StatsGrid>
      </Section>

      <Section>
        <Title>Featured NFTs</Title>
        <Text>
          Milad's style is inspired by modern day fashion with a hint of nostalgia for a wide variety of existing communities.
        </Text>
        <NFTGrid>
          {nfts.slice(0, 3).map(nft => (
            <NFTCard
              key={nft.identifier}
              image={nft.image_url}
              title={nft.name}
              price={nft.price}
              style={nft.style}
            />
          ))}
        </NFTGrid>
        <Link 
          href="https://opensea.io/collection/miladmaker" 
          target="_blank" 
          rel="noopener noreferrer"
          style={{ display: 'inline-block', marginTop: theme.spacing.lg, padding: `${theme.spacing.sm} ${theme.spacing.lg}`, background: theme.colors.primary, color: 'white', borderRadius: theme.borderRadius.medium, textDecoration: 'none', fontWeight: 'bold' }}
        >
          View Collection on OpenSea
        </Link>
      </Section>

      <MemeSection>
        <Title>Milad Meme Generator</Title>
        <Text>Create your own Milad memes! Upload an image, add text, and share your creation with the community</Text>
        <CanvasWrapper>
          <MemeCanvas width={500} height={500} />
        </CanvasWrapper>
      </MemeSection>
    </HomeContainer>
  );
};