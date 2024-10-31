'use client';

import Link from 'next/link';

const Hero = () => {
  return (
    <div className="mb-8">
      <div className="text-center py-16 max-w-4xl mx-auto bg-pink-100/5 rounded-2xl backdrop-blur-sm">
        <div className="h-32 mx-auto mb-6 bg-gradient-to-r from-primary-500/20 to-accent-500/20 rounded-full flex items-center justify-center">
          <span className="text-4xl">🌸</span>
        </div>
        <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary-500 to-accent-500 text-transparent bg-clip-text">Milad Maker</h1>
        <p className="text-lg text-gray-300 mb-8">
          A collection of 10k neochibi hellions inspired by @miladymaker and the @remiliacorp ecosystem
        </p>
        <div className="space-y-4">
          <div className="flex justify-center gap-4">
            <Link href="https://opensea.io" target="_blank" rel="noopener noreferrer" className="bg-primary-600 hover:bg-primary-700 px-8 py-3 rounded-lg font-semibold text-lg transition-all duration-200">
              Trade on OpenSea
            </Link>
            <Link href="https://discord.gg" target="_blank" rel="noopener noreferrer" className="bg-gray-700 hover:bg-gray-600 px-8 py-3 rounded-lg font-semibold text-lg transition-all duration-200">
              Join Discord
            </Link>
          </div>
          <p className="text-sm text-primary-400">
            Collection fully minted • 10,000/10,000 NFTs sold out
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;