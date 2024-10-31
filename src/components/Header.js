'use client';

import Link from 'next/link';

const Header = () => {
  return (
    <header className="py-4 border-b border-gray-700">
      <nav className="container mx-auto px-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-accent-500">Milads</div>
        <div className="flex gap-6">
          <a href="#collection" className="text-gray-300 hover:text-white">Collection</a>
          <a href="#about" className="text-gray-300 hover:text-white">About</a>
          <Link href="https://opensea.io" target="_blank" rel="noopener noreferrer" className="bg-accent-600 hover:bg-accent-700 px-4 py-2 rounded-lg font-semibold">
            View on OpenSea
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;