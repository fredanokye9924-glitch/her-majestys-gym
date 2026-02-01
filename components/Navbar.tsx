
import React from 'react';
import { Crown, Menu } from 'lucide-react';

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-orange-500/20 px-6 py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center gap-2 group cursor-pointer">
          <div className="bg-orange-500 p-2 rounded-lg group-hover:rotate-12 transition-transform">
            <Crown className="text-black" size={24} />
          </div>
          <span className="font-bebas text-3xl tracking-widest text-white group-hover:text-orange-500 transition-colors">
            HER MAJESTY'S GYM
          </span>
        </div>
        
        <div className="hidden md:flex gap-8 items-center font-bold uppercase text-sm tracking-widest">
          <a href="#tour" className="hover:text-orange-500 transition-colors">Tour</a>
          <a href="#booking" className="hover:text-orange-500 transition-colors">Classes</a>
          <a href="#nutrition" className="hover:text-orange-500 transition-colors">Nutrition</a>
          <a href="#membership" className="hover:text-orange-500 transition-colors">Pricing</a>
          <button className="bg-orange-500 text-black px-6 py-2 rounded-full font-black hover:bg-orange-400 transition-all transform hover:scale-105">
            JOIN NOW
          </button>
        </div>
        
        <button className="md:hidden text-orange-500">
          <Menu size={24} />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
