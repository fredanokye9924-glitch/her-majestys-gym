
import React, { useState, useMemo } from 'react';
import { DollarSign, Zap, TrendingUp } from 'lucide-react';

const MembershipCalculator: React.FC = () => {
  const [daysPerWeek, setDaysPerWeek] = useState(3);
  const [sessionsPerMonth, setSessionsPerMonth] = useState(12);

  const stats = useMemo(() => {
    const monthlyPrice = 99; // Base royal membership
    const costPerSession = (monthlyPrice / sessionsPerMonth).toFixed(2);
    const estimatedBurn = sessionsPerMonth * 650; // Avg 650 cals per elite session
    return { costPerSession, estimatedBurn };
  }, [sessionsPerMonth]);

  return (
    <div className="bg-orange-500 rounded-3xl p-1 md:p-12 text-black overflow-hidden relative">
      <div className="absolute top-0 right-0 p-8 opacity-10 rotate-12">
        <TrendingUp size={300} strokeWidth={1} />
      </div>
      
      <div className="relative z-10">
        <h2 className="text-6xl font-bebas mb-4">ROYAL VALUE CALCULATOR</h2>
        <p className="text-black/70 mb-12 max-w-xl font-bold uppercase tracking-widest text-sm">
          Calculate the return on your investment in excellence.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="space-y-12">
            <div>
              <label className="block font-black mb-4 uppercase text-xs tracking-widest">Training Frequency (Monthly)</label>
              <input 
                type="range" 
                min="1" 
                max="30" 
                value={sessionsPerMonth} 
                onChange={(e) => setSessionsPerMonth(parseInt(e.target.value))}
                className="w-full h-3 bg-black/20 rounded-lg appearance-none cursor-pointer accent-black"
              />
              <div className="flex justify-between mt-4 font-bebas text-3xl">
                <span>{sessionsPerMonth} SESSIONS</span>
                <span className="text-black/50">30 MAX</span>
              </div>
            </div>

            <div className="bg-black/5 p-8 rounded-2xl border border-black/10">
              <h4 className="font-black text-xs uppercase tracking-widest mb-6 flex items-center gap-2">
                <Zap size={16} /> Projected Impact
              </h4>
              <div className="space-y-6">
                <div className="flex justify-between items-end border-b border-black/10 pb-4">
                  <span className="font-bold">Monthly Burn</span>
                  <span className="text-4xl font-bebas">{stats.estimatedBurn.toLocaleString()} KCAL</span>
                </div>
                <div className="flex justify-between items-end">
                  <span className="font-bold">Cost Per Training</span>
                  <span className="text-4xl font-bebas">${stats.costPerSession}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-black rounded-3xl p-10 text-white flex flex-col justify-between shadow-2xl">
            <div>
              <div className="inline-block bg-orange-500 text-black px-4 py-1 rounded-full text-xs font-black mb-6">BEST VALUE</div>
              <h3 className="text-5xl font-bebas text-orange-500 mb-2">ROYAL MEMBERSHIP</h3>
              <p className="text-zinc-500 leading-relaxed mb-8">
                Unlimited access to all facilities, recovery lounges, and masterclass sessions.
              </p>
              <ul className="space-y-4 mb-10">
                {['24/7 Access', 'Free Guest Pass Monthly', 'Locker & Towel Service', 'Custom Meal Plans'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 font-bold text-sm tracking-wide">
                    <div className="w-5 h-5 rounded-full bg-orange-500 flex items-center justify-center">
                       <div className="w-2 h-2 bg-black rounded-full"></div>
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <span className="text-zinc-500 text-xs font-black uppercase tracking-widest block">Starts At</span>
                <span className="text-5xl font-bebas">$99/mo</span>
              </div>
              <button className="bg-orange-500 text-black px-10 py-5 rounded-full font-black text-lg hover:scale-105 transition-all shadow-xl shadow-orange-500/20">
                JOIN THE ELITE
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MembershipCalculator;
