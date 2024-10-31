import Hero from '../components/Hero';
import NFTCollection from '../components/NFTCollection';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Header />
      <div className="container mx-auto px-4 py-8">
        <Hero />
        <NFTCollection />
      </div>
      <Footer />
    </div>
  );
}