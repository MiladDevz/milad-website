'use client';

import Link from 'next/link';

const NFTCollection = () => {
  const nfts = Array.from({ length: 9 }, (_, i) => ({
    id: i + 1,
    name: `Milad #${i + 1}`,
    traits: [
      { trait_type: 'Background', value: ['Pink', 'Blue', 'Purple'][i % 3] },
      { trait_type: 'Style', value: 'Neochibi' },
      { trait_type: 'Rarity', value: ['Common', 'Rare', 'Epic'][i % 3] }
    ],
    opensea_url: 'https://opensea.io/collection/miladmaker'
  }));

  return (
    <div className="space-y-12">
      <div className="bg-pink-100/5 p-8 rounded-xl backdrop-blur-sm">
        <h2 className="text-3xl font-bold mb-8 text-center">Latest Milads</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {nfts.map((nft) => (
            <Link 
              key={nft.id}
              href={nft.opensea_url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-pink-100/5 rounded-xl overflow-hidden transform hover:scale-[1.02] transition-all duration-200 hover:animate-glow"
            >
              <div className="aspect-square bg-gradient-to-br from-accent-900/50 to-primary-900/50 relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-6xl opacity-50">#{nft.id}</span>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-bold text-lg">{nft.name}</h3>
                {nft.traits && nft.traits.length > 0 && (
                  <div className="mt-2">
                    <div className="flex flex-wrap gap-2">
                      {nft.traits.map((trait) => (
                        <span key={trait.trait_type} className="text-xs px-2 py-1 bg-gray-600/50 rounded-full text-gray-300 hover:bg-accent-600/30 hover:text-accent-400 transition-colors duration-200">
                          {trait.trait_type}: {trait.value}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </Link>
          ))}
        </div>
      </div>

      <div id="about" className="bg-pink-100/5 p-8 rounded-xl backdrop-blur-sm">
        <h2 className="text-3xl font-bold mb-6 text-center">About Milads</h2>
        <p className="text-gray-300 mb-6">
          Milad Maker is a groundbreaking collection of 10,000 neochibi hellions, drawing inspiration from the iconic @miladymaker and the vibrant @remiliacorp ecosystem. Each Milad is a unique digital collectible on the Ethereum blockchain, featuring rare traits and characteristics that make them truly special. Our collection celebrates the fusion of cute and chaotic, bringing a new dimension to the NFT space.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-pink-100/10 p-6 rounded-xl">
            <h3 className="font-bold text-xl mb-4 text-accent-400">Collection Details</h3>
            <ul className="text-sm text-gray-300 space-y-2">
              <li>• Total Supply: 10,000 NFTs</li>
              <li>• Unique Traits: Over 200+ neochibi attributes</li>
              <li>• Blockchain: Ethereum</li>
              <li>• Storage: IPFS (Decentralized)</li>
              <li>• Smart Contract: ERC-721</li>
            </ul>
          </div>

          <div className="bg-pink-100/10 p-6 rounded-xl">
            <h3 className="font-bold text-xl mb-4 text-accent-400">Mint Info</h3>
            <div className="text-sm text-gray-300">
              <ul className="space-y-2">
                <li>• Status: Sold Out</li>
                <li>• Total Minted: 10,000/10,000</li>
                <li>• Floor Price: Check OpenSea</li>
                <li>• Trading Volume: View Stats on OpenSea</li>
              </ul>
              <div className="mt-4">
                <Link href="https://opensea.io" target="_blank" rel="noopener noreferrer" className="block w-full bg-accent-600 hover:bg-accent-700 p-4 rounded-xl font-bold text-lg transition-all duration-200 hover:animate-glow text-center">
                  Trade on OpenSea
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-sm text-gray-400">
            Join our community of neochibi hellions and become part of the Milads ecosystem
          </p>
        </div>
      </div>
    </div>
  );
};

export default NFTCollection;