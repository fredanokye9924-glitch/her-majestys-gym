
import React from 'react';
import { ChevronRight, Play } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Background Video Simulator */}
      <div className="absolute inset-0 z-0">
        <video 
          autoPlay 
          muted 
          loop 
          playsInline
          className="w-full h-full object-cover opacity-50 grayscale hover:grayscale-0 transition-all duration-1000"
          poster="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=2070"
        >
          <source src="https://assets.mixkit.co/videos/preview/mixkit-man-training-at-the-gym-lifting-weights-23253-large.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/60"></div>
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl">
        <div className="inline-block bg-orange-500 text-black font-black px-4 py-1 rounded mb-6 animate-bounce">
          EST. 2024
        </div>
        <h1 className="text-7xl md:text-9xl font-bebas leading-none mb-6">
          RULE YOUR <span className="text-orange-500">PHYSIQUE</span>
        </h1>
        <p className="text-xl md:text-2xl text-zinc-300 mb-10 font-medium tracking-wide">
          Elite training for those who demand excellence. 
          Experience the most exclusive workout environment in the city.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-orange-500 text-black px-10 py-5 rounded-full font-black text-lg flex items-center justify-center gap-2 hover:bg-orange-400 transition-all transform hover:scale-105">
            GET 7-DAY PASS <ChevronRight size={20} />
          </button>
          <button className="bg-white/10 backdrop-blur-md border border-white/20 px-10 py-5 rounded-full font-black text-lg flex items-center justify-center gap-2 hover:bg-white/20 transition-all">
            WATCH FILM <Play size={20} fill="white" />
          </button>
        </div>
      </div>

      <div className="absolute bottom-10 left-10 hidden lg:flex flex-col gap-4 text-orange-500">
        <div className="flex items-center gap-3">
          <div className="w-12 h-px bg-orange-500"></div>
          <span className="font-bebas text-xl tracking-widest">SCROLL TO DISCOVER</span>
        </div>
      </div>
    </div>
  );
};

export default Hero;
