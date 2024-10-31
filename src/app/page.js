'use client';

import Hero from '../components/Hero';
import NFTCollection from '../components/NFTCollection';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen">
      <div className="sticky top-0 z-50 bg-gray-900/95 backdrop-blur-sm">
        <Header />
      </div>
      <div className="container mx-auto px-4 py-8">
        <Hero />
        <NFTCollection />
      </div>
      <Footer />
    </div>
  );
}