
import React from 'react';
import { Smartphone, Bell, BarChart3, ShieldCheck } from 'lucide-react';

const AppShowcase: React.FC = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center gap-16 py-10">
      <div className="flex-1 order-2 lg:order-1">
        <h2 className="text-6xl font-bebas text-orange-500 mb-6">THE GYM IN YOUR POCKET</h2>
        <p className="text-xl text-zinc-400 mb-10 leading-relaxed">
          The HMG Mobile App gives you full control over your fitness journey. Track sets in real-time, 
          manage bookings, and access exclusive elite content anywhere in the world.
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {[
            { icon: <Smartphone size={24} />, title: "Digital Entry", desc: "No keycard needed. Open our gates with your phone." },
            { icon: <BarChart3 size={24} />, title: "Live Metrics", desc: "Sync your Apple Watch or Whoop directly to our systems." },
            { icon: <Bell size={24} />, title: "Smart Alerts", desc: "Never miss a booking with royal priority notifications." },
            { icon: <ShieldCheck size={24} />, title: "Private Locker", desc: "Remote lock and unlock your storage via the app." },
          ].map((feature, i) => (
            <div key={i} className="flex gap-4 group">
              <div className="p-3 bg-zinc-900 rounded-2xl group-hover:bg-orange-500 transition-all duration-300">
                <div className="group-hover:text-black text-orange-500">{feature.icon}</div>
              </div>
              <div>
                <h4 className="font-bold text-white mb-1">{feature.title}</h4>
                <p className="text-sm text-zinc-500 leading-snug">{feature.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-wrap gap-4">
          <img src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" alt="App Store" className="h-12 cursor-pointer hover:opacity-80 transition-opacity" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Google Play" className="h-12 cursor-pointer hover:opacity-80 transition-opacity" />
        </div>
      </div>
      
      <div className="flex-1 order-1 lg:order-2 relative">
        <div className="absolute -inset-4 bg-orange-500/20 blur-3xl rounded-full"></div>
        <div className="relative z-10 mx-auto w-72 h-[600px] bg-black border-[8px] border-zinc-800 rounded-[3rem] shadow-2xl overflow-hidden">
          <div className="absolute top-0 w-full h-6 bg-zinc-800 flex justify-center items-end pb-1">
            <div className="w-20 h-4 bg-black rounded-full"></div>
          </div>
          <div className="p-6 pt-12">
            <div className="w-12 h-12 bg-orange-500 rounded-xl mb-6 flex items-center justify-center">
              <Smartphone className="text-black" />
            </div>
            <div className="h-4 w-32 bg-zinc-800 rounded mb-2"></div>
            <div className="h-8 w-48 bg-white rounded mb-8"></div>
            <div className="space-y-4">
              {[1, 2, 3].map(i => (
                <div key={i} className="h-32 w-full bg-zinc-900 rounded-2xl p-4 flex flex-col justify-end">
                   <div className="h-3 w-20 bg-zinc-700 rounded mb-2"></div>
                   <div className="h-4 w-32 bg-orange-500/50 rounded"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppShowcase;
