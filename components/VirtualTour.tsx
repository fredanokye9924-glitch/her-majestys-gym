
import React from 'react';
import { Maximize2, Move } from 'lucide-react';

const VirtualTour: React.FC = () => {
  const photos = [
    "https://lh3.googleusercontent.com/gps-cs-s/AHVAwerAD-SqPSkACiCNXWWekJyVru8lHjiFg_xPSehziUkXtZAbZoVzMFwtM5znTIXYi8ObRqiFOopm5zdsczToQg31xjuZ0Z_DmzVYF-SpwL25mHm2m2--Z9Md9HvEnBQE5RGWHBRk=w1200",
    "https://lh3.googleusercontent.com/gps-cs-s/AHVAwepeVIfCYeHjOYoxCgdEEnde9aUk3NMOJ4evroH7lkwEjYwF-txxE5QApziL7dg4amz8AtfvgsZZ_M9BS8XMsWFdgl9N-hMdx7sSeXWitLOonzxCnzdShFB6EkP5kww4-qegmfAUxY4Yo9U=w1200",
    "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&q=80&w=1200",
    "https://images.unsplash.com/photo-1593079831268-3381b0db4a77?auto=format&fit=crop&q=80&w=1200"
  ];

  return (
    <div>
      <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
        <div className="max-w-xl">
          <h2 className="text-6xl font-bebas text-orange-500">INSIDE THE KINGDOM</h2>
          <p className="text-xl text-zinc-400 mt-4 leading-relaxed">
            Take a high-definition tour of our premium training facilities. Designed for privacy, performance, and power.
          </p>
        </div>
        <button className="flex items-center gap-2 bg-orange-500 text-black px-8 py-4 rounded-xl font-black hover:bg-orange-400 transition-all">
          <Maximize2 size={20} /> START VR TOUR
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 h-[600px]">
        <div className="md:col-span-2 group relative overflow-hidden rounded-3xl cursor-pointer">
          <img src={photos[0]} alt="Gym Area" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-8 flex flex-col justify-end">
            <h4 className="text-2xl font-bebas text-orange-500">Main Strength Floor</h4>
            <p className="text-white text-sm">Our primary arena for heavy lifting and conditioning.</p>
          </div>
        </div>
        <div className="grid grid-rows-2 gap-6 md:col-span-1">
          <div className="group relative overflow-hidden rounded-3xl cursor-pointer">
            <img src={photos[1]} alt="Weights" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors"></div>
          </div>
          <div className="group relative overflow-hidden rounded-3xl cursor-pointer">
            <img src={photos[2]} alt="Machines" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors"></div>
          </div>
        </div>
        <div className="md:col-span-1 group relative overflow-hidden rounded-3xl cursor-pointer">
          <img src={photos[3]} alt="Elite Lounge" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-8 flex flex-col justify-end">
             <h4 className="text-2xl font-bebas text-orange-500">Royal Recovery</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VirtualTour;
