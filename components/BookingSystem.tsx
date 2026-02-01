
import React, { useState } from 'react';
import { Calendar, Users, Clock, CheckCircle } from 'lucide-react';
import { ClassSlot } from '../types';

const CLASSES: ClassSlot[] = [
  { id: '1', name: 'Majesty Strength', time: '06:00 AM', instructor: 'King Leo', capacity: 20, booked: 18 },
  { id: '2', name: 'Royal HIIT', time: '08:30 AM', instructor: 'Queen Sarah', capacity: 15, booked: 10 },
  { id: '3', name: 'Power Yoga', time: '12:00 PM', instructor: 'Master Zen', capacity: 25, booked: 22 },
  { id: '4', name: 'Empire Boxing', time: '05:30 PM', instructor: 'Iron Mike', capacity: 12, booked: 5 },
  { id: '5', name: 'Iron Throne Crossfit', time: '07:00 PM', instructor: 'Viking Erik', capacity: 18, booked: 18 },
];

const BookingSystem: React.FC = () => {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [confirmed, setConfirmed] = useState(false);

  const handleBook = (id: string) => {
    setSelectedId(id);
    setConfirmed(true);
    setTimeout(() => setConfirmed(false), 3000);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {CLASSES.map((cls) => (
        <div 
          key={cls.id}
          className={`relative p-6 rounded-2xl border transition-all ${
            cls.booked >= cls.capacity 
              ? 'bg-zinc-800/50 border-zinc-700 opacity-60' 
              : 'bg-zinc-800 border-zinc-700 hover:border-orange-500/50 hover:shadow-[0_0_20px_rgba(255,95,31,0.1)]'
          }`}
        >
          <div className="flex justify-between items-start mb-4">
            <h3 className="text-2xl font-bebas text-white">{cls.name}</h3>
            <span className={`text-xs px-2 py-1 rounded font-bold ${
              cls.booked >= cls.capacity ? 'bg-red-500 text-white' : 'bg-orange-500 text-black'
            }`}>
              {cls.booked >= cls.capacity ? 'FULL' : `${cls.capacity - cls.booked} LEFT`}
            </span>
          </div>
          
          <div className="space-y-3 text-zinc-400 text-sm mb-6">
            <div className="flex items-center gap-2">
              <Clock size={16} className="text-orange-500" />
              <span>{cls.time}</span>
            </div>
            <div className="flex items-center gap-2">
              <Users size={16} className="text-orange-500" />
              <span>{cls.instructor}</span>
            </div>
          </div>

          <button 
            disabled={cls.booked >= cls.capacity}
            onClick={() => handleBook(cls.id)}
            className={`w-full py-3 rounded-xl font-black transition-all flex items-center justify-center gap-2 ${
              cls.booked >= cls.capacity 
                ? 'bg-zinc-700 text-zinc-500 cursor-not-allowed'
                : selectedId === cls.id && confirmed
                  ? 'bg-green-500 text-white'
                  : 'bg-orange-500 text-black hover:bg-orange-400'
            }`}
          >
            {selectedId === cls.id && confirmed ? (
              <><CheckCircle size={18} /> BOOKED!</>
            ) : cls.booked >= cls.capacity ? (
              'WAITLIST'
            ) : (
              'BOOK SPOT'
            )}
          </button>
        </div>
      ))}
    </div>
  );
};

export default BookingSystem;
