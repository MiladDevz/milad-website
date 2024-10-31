const Header = () => {
  return (
    <header className="py-4 border-b border-gray-700">
      <nav className="container mx-auto px-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-accent-500">Milads</div>
        <div className="flex gap-6">
          <a href="#collection" className="text-gray-300 hover:text-white">Collection</a>
          <a href="#about" className="text-gray-300 hover:text-white">About</a>
          <button onClick={() => window.open('https://opensea.io', '_blank')} className="bg-accent-600 hover:bg-accent-700 px-4 py-2 rounded-lg font-semibold">
            View on OpenSea
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;