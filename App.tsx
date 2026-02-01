
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BookingSystem from './components/BookingSystem';
import ProgressTracker from './components/ProgressTracker';
import NutritionPlanning from './components/NutritionPlanning';
import AppShowcase from './components/AppShowcase';
import Leaderboard from './components/Leaderboard';
import VirtualTour from './components/VirtualTour';
import MembershipCalculator from './components/MembershipCalculator';
import SocialFeed from './components/SocialFeed';
import Chatbot from './components/Chatbot';

const App: React.FC = () => {
  return (
    <div className="bg-black text-white min-h-screen">
      <Navbar />
      <main>
        <section id="hero">
          <Hero />
        </section>
        
        <div className="max-w-7xl mx-auto px-4 py-20 space-y-32">
          <section id="tour">
            <VirtualTour />
          </section>

          <section id="booking" className="bg-zinc-900 p-8 rounded-3xl border border-zinc-800">
            <h2 className="text-5xl font-bebas text-orange-500 mb-8">Claim Your Throne</h2>
            <BookingSystem />
          </section>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <section id="progress" className="bg-zinc-900 p-8 rounded-3xl border border-zinc-800">
              <h2 className="text-4xl font-bebas text-orange-500 mb-6">Regal Progress</h2>
              <ProgressTracker />
            </section>
            
            <section id="leaderboard" className="bg-zinc-900 p-8 rounded-3xl border border-zinc-800">
              <h2 className="text-4xl font-bebas text-orange-500 mb-6">Elite Leaderboard</h2>
              <Leaderboard />
            </section>
          </div>

          <section id="nutrition">
            <NutritionPlanning />
          </section>

          <section id="membership">
            <MembershipCalculator />
          </section>

          <section id="app-showcase">
            <AppShowcase />
          </section>

          <section id="social">
            <SocialFeed />
          </section>
        </div>
      </main>
      
      <footer className="bg-zinc-950 border-t border-zinc-800 py-12 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div>
            <h2 className="text-3xl font-bebas text-orange-500">HER MAJESTY'S GYM</h2>
            <p className="text-zinc-500 mt-2">Where royalty meets raw strength.</p>
          </div>
          <div className="flex gap-8 text-zinc-400">
            <a href="#" className="hover:text-orange-500 transition-colors">Privacy</a>
            <a href="#" className="hover:text-orange-500 transition-colors">Terms</a>
            <a href="#" className="hover:text-orange-500 transition-colors">Careers</a>
          </div>
        </div>
      </footer>

      <Chatbot />
    </div>
  );
};

export default App;
