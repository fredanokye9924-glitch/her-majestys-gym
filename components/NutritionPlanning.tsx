
import React, { useState } from 'react';
import { Utensils, Zap, Flame, Target } from 'lucide-react';

const NutritionPlanning: React.FC = () => {
  const [activeGoal, setActiveGoal] = useState<'bulk' | 'cut' | 'maintain'>('bulk');

  const plans = {
    bulk: [
      { meal: 'Breakfast', items: ['Oatmeal with protein', '2 Bananas', '4 Eggs'], cals: 800 },
      { meal: 'Lunch', items: ['Chicken Breast', 'Brown Rice', 'Avocado'], cals: 950 },
      { meal: 'Dinner', items: ['Salmon', 'Sweet Potato', 'Mixed Greens'], cals: 850 },
    ],
    cut: [
      { meal: 'Breakfast', items: ['Egg Whites', 'Spinach', 'Greek Yogurt'], cals: 400 },
      { meal: 'Lunch', items: ['Turkey Salad', 'Chickpeas', 'Lemon Dressing'], cals: 500 },
      { meal: 'Dinner', items: ['White Fish', 'Broccoli', 'Quinoa'], cals: 450 },
    ],
    maintain: [
      { meal: 'Breakfast', items: ['Whole Wheat Toast', 'Peanut Butter', '1 Egg'], cals: 600 },
      { meal: 'Lunch', items: ['Beef Stir-fry', 'Rice Noodles', 'Bell Peppers'], cals: 700 },
      { meal: 'Dinner', items: ['Tofu Bowl', 'Brown Rice', 'Kimchi'], cals: 650 },
    ]
  };

  return (
    <div className="bg-zinc-900 rounded-3xl overflow-hidden border border-zinc-800">
      <div className="p-8 border-b border-zinc-800 flex flex-col md:flex-row justify-between items-center gap-6">
        <div>
          <h2 className="text-5xl font-bebas text-orange-500">ROYAL FUEL</h2>
          <p className="text-zinc-400">Scientifically crafted nutrition plans for elite performance.</p>
        </div>
        <div className="flex bg-black p-1 rounded-xl">
          {(['bulk', 'cut', 'maintain'] as const).map((goal) => (
            <button
              key={goal}
              onClick={() => setActiveGoal(goal)}
              className={`px-6 py-2 rounded-lg font-bold text-sm uppercase tracking-widest transition-all ${
                activeGoal === goal ? 'bg-orange-500 text-black shadow-lg' : 'text-zinc-500 hover:text-white'
              }`}
            >
              {goal}
            </button>
          ))}
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-0 divide-y md:divide-y-0 md:divide-x divide-zinc-800">
        {plans[activeGoal].map((p, idx) => (
          <div key={idx} className="p-8 hover:bg-zinc-800/30 transition-colors">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-orange-500/10 rounded-full">
                <Utensils className="text-orange-500" size={20} />
              </div>
              <h3 className="text-xl font-bold">{p.meal}</h3>
            </div>
            <ul className="space-y-4 mb-8">
              {p.items.map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-zinc-300">
                  <span className="w-1.5 h-1.5 bg-orange-500 rounded-full"></span>
                  {item}
                </li>
              ))}
            </ul>
            <div className="flex items-center justify-between pt-6 border-t border-zinc-800">
              <span className="text-zinc-500 font-bold uppercase text-xs tracking-tighter">Energy Output</span>
              <span className="text-2xl font-bebas text-white">{p.cals} CAL</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NutritionPlanning;
