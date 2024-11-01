import axios from 'axios';

const API_KEY = '244fb8527e8e4a5d8ba6968efee0c906';
const BASE_URL = 'https://api.opensea.io/api/v2';

const openSeaApi = axios.create({
  baseURL: BASE_URL,
  headers: {
    'X-API-KEY': API_KEY,
    'Accept': 'application/json',
  }
});

export interface NFTAsset {
  identifier: string;
  collection: {
    slug: string;
    name: string;
  };
  contract_address: string;
  name: string;
  description: string;
  image_url: string;
  permalink: string;
  price?: string;
  style?: string;
}

export interface CollectionStats {
  stats: {
    total_supply: number;
    floor_price: number;
    num_owners: number;
  };
}

export const openSeaService = {
  async getCollection() {
    try {
      const response = await openSeaApi.get('/collections/miladmaker');
      return response.data;
    } catch (error) {
      console.error('Error fetching collection:', error);
      return null;
    }
  },

  async getCollectionNFTs(limit: number = 20, next: string = '') {
    try {
      const response = await openSeaApi.get('/assets', {
        params: {
          collection: 'miladmaker',
          limit,
          cursor: next
        }
      });
      
      const nfts = response.data.assets.map((nft: any) => ({
        identifier: nft.identifier,
        collection: nft.collection,
        contract_address: nft.contract,
        name: nft.name || `Milad #${nft.identifier}`,
        description: nft.description,
        image_url: nft.image_url,
        permalink: nft.permalink,
        price: nft.last_sale?.payment_token?.eth_price || null,
        style: this.getRandomStyle()
      }));

      return { nfts, next: response.data.next };
    } catch (error) {
      console.error('Error fetching collection NFTs:', error);
      return { nfts: [], next: null };
    }
  },

  async getCollectionStats() {
    try {
      const response = await openSeaApi.get('/collections/miladmaker/stats');
      return {
        stats: {
          total_supply: response.data.total_supply || 10000,
          floor_price: response.data.floor_price || null,
          num_owners: response.data.num_owners || null
        }
      };
    } catch (error) {
      console.error('Error fetching collection stats:', error);
      return { stats: { total_supply: 10000, floor_price: null, num_owners: null } };
    }
  },

  getRandomStyle() {
    const styles = ['Happy', 'Kawaii', 'Gamer', 'Cool', 'Punk'];
    return styles[Math.floor(Math.random() * styles.length)];
  }
};