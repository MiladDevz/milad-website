import React from 'react';
import styled from 'styled-components';
import { Container } from '../components/common/Container';
import { Title, Text } from '../components/common/Typography';
import { MemeCanvas } from '../components/meme/MemeCanvas';
import { theme } from '../styles/theme';

const MemeGeneratorContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: ${theme.spacing.xl} 0;
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: ${theme.spacing.xl};
  max-width: 600px;
`;

const CanvasWrapper = styled.div`
  background: white;
  padding: ${theme.spacing.lg};
  border-radius: ${theme.borderRadius.large};
  box-shadow: ${theme.shadows.card};
  border: 1px solid ${theme.colors.border};
  margin-bottom: ${theme.spacing.xl};
`;

const Instructions = styled.div`
  margin-top: ${theme.spacing.xl};
  padding: ${theme.spacing.lg};
  background: white;
  border-radius: ${theme.borderRadius.medium};
  border: 1px solid ${theme.colors.border};
  max-width: 600px;

  ul {
    list-style-type: none;
    padding: 0;
    margin: ${theme.spacing.md} 0;
  }

  li {
    margin-bottom: ${theme.spacing.sm};
    padding-left: ${theme.spacing.md};
    position: relative;

    &:before {
      content: "•";
      color: ${theme.colors.primary};
      position: absolute;
      left: 0;
    }
  }
`;

export const MemeGenerator: React.FC = () => {
  return (
    <MemeGeneratorContainer>
      <Header>
        <Title>Milad Meme Generator</Title>
        <Text>
          Create your own Milad memes! Upload an image, add text, and share your creation with the community.
        </Text>
      </Header>

      <CanvasWrapper>
        <MemeCanvas width={500} height={500} />
      </CanvasWrapper>

      <Instructions>
        <Text>How to create your Milad meme:</Text>
        <ul>
          <li>Upload your favorite Milad NFT or any image</li>
          <li>Add your creative text at the bottom</li>
          <li>Adjust the font size to perfect your meme</li>
          <li>Download and share your creation</li>
        </ul>
        <Text>
          Milad's style is inspired by modern day fashion with a hint of nostalgia for a wide variety of existing communities.
        </Text>
      </Instructions>
    </MemeGeneratorContainer>
  );
};