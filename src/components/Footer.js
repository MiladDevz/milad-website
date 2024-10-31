const Footer = () => {
  return (
    <footer className="bg-gray-800/50 mt-12 py-8 border-t border-gray-700">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold text-accent-500 mb-4">Milads</h3>
            <p className="text-gray-300 text-sm">
              A collection of 10k neochibi hellions bringing the spirit of @miladymaker to life.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#collection" className="hover:text-accent-400">Collection</a></li>
              <li><a href="#about" className="hover:text-accent-400">About</a></li>
              <li><a href="https://opensea.io" target="_blank" rel="noopener noreferrer" className="hover:text-accent-400">Trade</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Community</h4>
            <div className="flex gap-4">
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-accent-400">
                Twitter/X
              </a>
              <a href="https://discord.gg" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-accent-400">
                Discord
              </a>
              <a href="https://opensea.io" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-accent-400">
                OpenSea
              </a>
              <a href="https://etherscan.io" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-accent-400">
                Contract
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-sm text-gray-400">
          <p>© 2024 Milads. All rights reserved. • Fully minted collection • 10,000/10,000 NFTs</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;