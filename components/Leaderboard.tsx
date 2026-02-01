
import React from 'react';
import { Trophy, Medal, Star } from 'lucide-react';
import { LeaderboardUser } from '../types';

const LEADERS: LeaderboardUser[] = [
  { rank: 1, name: "Alexander the Great", points: 15420, avatar: "https://picsum.photos/id/64/100/100" },
  { rank: 2, name: "Victoria Regina", points: 14850, avatar: "https://picsum.photos/id/65/100/100" },
  { rank: 3, name: "King Arthur", points: 13200, avatar: "https://picsum.photos/id/91/100/100" },
  { rank: 4, name: "Duke of Lift", points: 12100, avatar: "https://picsum.photos/id/103/100/100" },
  { rank: 5, name: "Lady Iron", points: 11950, avatar: "https://picsum.photos/id/177/100/100" },
];

const Leaderboard: React.FC = () => {
  return (
    <div className="space-y-4 mt-4">
      {LEADERS.map((user) => (
        <div 
          key={user.rank}
          className={`flex items-center gap-4 p-4 rounded-2xl transition-all hover:translate-x-2 ${
            user.rank === 1 ? 'bg-orange-500 text-black shadow-lg shadow-orange-500/20' : 'bg-black border border-zinc-800'
          }`}
        >
          <div className="w-10 text-center font-bebas text-2xl">
            #{user.rank}
          </div>
          <img src={user.avatar} alt={user.name} className="w-12 h-12 rounded-full border-2 border-zinc-800" />
          <div className="flex-1">
            <h4 className="font-bold text-sm uppercase">{user.name}</h4>
            <div className={`text-xs ${user.rank === 1 ? 'text-black/70' : 'text-zinc-500'}`}>
              Mastery Points
            </div>
          </div>
          <div className="text-right">
            <div className="font-bebas text-xl">{user.points.toLocaleString()}</div>
            {user.rank === 1 && <Trophy size={16} className="inline ml-1" />}
          </div>
        </div>
      ))}
      <button className="w-full py-4 text-orange-500 font-bold uppercase text-xs tracking-[0.2em] border border-orange-500/30 rounded-2xl hover:bg-orange-500/10 transition-colors mt-4">
        VIEW ALL CHALLENGES
      </button>
    </div>
  );
};

export default Leaderboard;
