const NFTCollection = () => {
  const sampleNFTs = [
    { id: 1, rarity: 'Legendary', trait: 'Dragon Wings' },
    { id: 2, rarity: 'Rare', trait: 'Cyber Eyes' },
    { id: 3, rarity: 'Epic', trait: 'Golden Crown' },
    { id: 4, rarity: 'Uncommon', trait: 'Neon Halo' },
    { id: 5, rarity: 'Rare', trait: 'Crystal Armor' },
    { id: 6, rarity: 'Epic', trait: 'Flame Sword' },
  ];

  return (
    <div className="space-y-12">
      <div className="bg-gray-800/50 p-8 rounded-xl">
        <h2 className="text-3xl font-bold mb-8 text-center">Featured Milads</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sampleNFTs.map((nft) => (
            <div key={nft.id} className="bg-gray-700/50 rounded-xl overflow-hidden transform hover:scale-105 transition-transform duration-200">
              <div className="aspect-square bg-gradient-to-br from-accent-900/50 to-primary-900/50 relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-6xl opacity-50">#{nft.id}</span>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-bold text-lg">Milad #{nft.id}</h3>
                <p className="text-sm text-accent-400">{nft.rarity}</p>
                <p className="text-xs text-gray-300 mt-1">Trait: {nft.trait}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div id="about" className="bg-gray-800/50 p-8 rounded-xl">
        <h2 className="text-3xl font-bold mb-6 text-center">About Milads</h2>
        <p className="text-gray-300 mb-6">
          Milad Maker is a groundbreaking collection of 10,000 neochibi hellions, drawing inspiration from the iconic @miladymaker and the vibrant @remiliacorp ecosystem. Each Milad is a one-of-a-kind digital collectible on the blockchain, featuring unique traits and characteristics that make them truly special.
        </p>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-gray-700/50 p-6 rounded-xl">
            <h3 className="font-bold text-xl mb-4 text-accent-400">Collection Details</h3>
            <ul className="text-sm text-gray-300 space-y-2">
              <li>• Total Supply: 10,000 NFTs</li>
              <li>• Unique Traits: Over 150+ neochibi attributes</li>
              <li>• Blockchain: Ethereum</li>
              <li>• File Hosting: IPFS (Decentralized Storage)</li>
              <li>• Smart Contract: ERC-721</li>
            </ul>
          </div>

          <div className="bg-gray-700/50 p-6 rounded-xl">
            <h3 className="font-bold text-xl mb-4 text-accent-400">Mint Info</h3>
            <div className="text-sm text-gray-300">
              <ul className="space-y-2">
                <li>• Status: Sold Out</li>
                <li>• Total Minted: 10,000/10,000</li>
                <li>• Floor Price: Check OpenSea</li>
                <li>• Trading Volume: View Stats on OpenSea</li>
              </ul>
              <div className="mt-4">
                <button className="w-full bg-accent-600 hover:bg-accent-700 p-4 rounded-xl font-bold text-lg transition-colors duration-200">
                  Trade on OpenSea
                </button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-8 text-center">
          <p className="text-sm text-gray-400">
            Join our community and be part of the neochibi revolution
          </p>
        </div>
      </div>
    </div>
  );
};

export default NFTCollection;