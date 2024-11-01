import React from 'react'
import styled from 'styled-components'
import { theme } from '../../styles/theme'
import { Card } from '../common/Card'
import { Text, SmallText } from '../common/Typography'

const NFTCardWrapper = styled(Card)`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  background: white;
  border: 1px solid ${theme.colors.border};
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`

const NFTImage = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
  border-bottom: 1px solid ${theme.colors.border};
`

const NFTInfo = styled.div`
  padding: ${theme.spacing.md};
`

const NFTTitle = styled.h3`
  font-size: 1.2rem;
  margin-bottom: ${theme.spacing.sm};
  color: ${theme.colors.text};
`

const NFTDescription = styled(Text)`
  font-size: 0.9rem;
  color: ${theme.colors.text};
  margin-bottom: ${theme.spacing.sm};
`

const NFTStats = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: ${theme.spacing.sm};
`

interface NFTCardProps {
  image: string;
  title: string;
  description: string;
  tokenId: string;
  style?: string;
}

export const NFTCard: React.FC<NFTCardProps> = ({
  image,
  title,
  description,
  tokenId,
  style
}) => {
  return (
    <NFTCardWrapper>
      <NFTImage src={image} alt={title} />
      <NFTInfo>
        <NFTTitle>{title}</NFTTitle>
        <NFTDescription>{description}</NFTDescription>
        <NFTStats>
          <SmallText>Token ID: {tokenId}</SmallText>
          {style && <SmallText>Style: {style}</SmallText>}
        </NFTStats>
      </NFTInfo>
    </NFTCardWrapper>
  )
}