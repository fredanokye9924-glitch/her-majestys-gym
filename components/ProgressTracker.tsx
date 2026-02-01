
import React from 'react';
import { 
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area 
} from 'recharts';
import { ProgressData } from '../types';

const MOCK_PROGRESS: ProgressData[] = [
  { day: 'Mon', calories: 450, weight: 82.5, strength: 100 },
  { day: 'Tue', calories: 600, weight: 82.3, strength: 105 },
  { day: 'Wed', calories: 300, weight: 82.4, strength: 105 },
  { day: 'Thu', calories: 750, weight: 82.1, strength: 110 },
  { day: 'Fri', calories: 500, weight: 81.9, strength: 115 },
  { day: 'Sat', calories: 900, weight: 81.7, strength: 120 },
  { day: 'Sun', calories: 200, weight: 81.8, strength: 120 },
];

const ProgressTracker: React.FC = () => {
  return (
    <div className="h-80 w-full mt-4">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={MOCK_PROGRESS}>
          <defs>
            <linearGradient id="colorCal" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#ff5f1f" stopOpacity={0.3}/>
              <stop offset="95%" stopColor="#ff5f1f" stopOpacity={0}/>
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#333" />
          <XAxis 
            dataKey="day" 
            stroke="#666" 
            fontSize={12} 
            tickLine={false}
            axisLine={false}
          />
          <YAxis hide />
          <Tooltip 
            contentStyle={{ backgroundColor: '#18181b', border: '1px solid #3f3f46', borderRadius: '8px' }}
            itemStyle={{ color: '#ff5f1f' }}
          />
          <Area 
            type="monotone" 
            dataKey="calories" 
            stroke="#ff5f1f" 
            strokeWidth={3}
            fillOpacity={1} 
            fill="url(#colorCal)" 
          />
          <Area 
            type="monotone" 
            dataKey="strength" 
            stroke="#ffffff" 
            strokeWidth={2}
            fillOpacity={0} 
          />
        </AreaChart>
      </ResponsiveContainer>
      <div className="flex justify-center gap-6 mt-6">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-orange-500"></div>
          <span className="text-xs text-zinc-400 uppercase font-bold tracking-widest">Calories</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-white"></div>
          <span className="text-xs text-zinc-400 uppercase font-bold tracking-widest">Strength (kg)</span>
        </div>
      </div>
    </div>
  );
};

export default ProgressTracker;
