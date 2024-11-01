import axios from 'axios';

const API_KEY = import.meta.env.VITE_OPENSEA_API_KEY;
const COLLECTION_SLUG = 'miladmaker';
const BASE_URL = 'https://api.opensea.io/api/v2';

const openSeaApi = axios.create({
  baseURL: BASE_URL,
  headers: {
    'X-API-KEY': API_KEY,
    'Accept': 'application/json'
  }
});

export interface NFT {
  identifier: string;
  collection: string;
  contract: string;
  token_standard: string;
  name: string;
  description: string;
  image_url: string;
  metadata_url: string;
  created_at: string;
  updated_at: string;
  permalink: string;
}

export const getNFTsByCollection = async (): Promise<NFT[]> => {
  try {
    const response = await openSeaApi.get(`/chain/ethereum/contract/${COLLECTION_SLUG}/nfts`, {
      params: {
        limit: 50,
        next: ''
      }
    });
    return response.data.nfts;
  } catch (error) {
    console.error('Error fetching NFTs:', error);
    throw error;
  }
};