
import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, User, Bot, Crown } from 'lucide-react';
import { getGymAssistantResponse } from '../services/geminiService';

interface Message {
  role: 'user' | 'bot';
  text: string;
}

const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'bot', text: 'Welcome to the Kingdom. How may I assist your training today?' }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMsg = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setIsTyping(true);

    const botResponse = await getGymAssistantResponse(userMsg);
    setMessages(prev => [...prev, { role: 'bot', text: botResponse }]);
    setIsTyping(false);
  };

  return (
    <div className="fixed bottom-8 right-8 z-[100]">
      {isOpen ? (
        <div className="bg-zinc-950 border border-orange-500/30 w-[350px] md:w-[400px] h-[500px] rounded-3xl shadow-2xl flex flex-col overflow-hidden animate-in slide-in-from-bottom-4 duration-300">
          <div className="bg-orange-500 p-4 flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="bg-black p-2 rounded-full">
                <Crown size={18} className="text-orange-500" />
              </div>
              <span className="font-bebas text-black text-xl tracking-wider">HMG ASSISTANT</span>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-black/70 hover:text-black">
              <X size={24} />
            </button>
          </div>
          
          <div ref={scrollRef} className="flex-1 p-4 space-y-4 overflow-y-auto">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] p-3 rounded-2xl text-sm ${
                  m.role === 'user' 
                    ? 'bg-orange-500 text-black rounded-tr-none font-bold' 
                    : 'bg-zinc-900 text-zinc-300 rounded-tl-none border border-zinc-800'
                }`}>
                  {m.text}
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-zinc-900 p-3 rounded-2xl animate-pulse flex gap-1">
                  <div className="w-1.5 h-1.5 bg-zinc-500 rounded-full"></div>
                  <div className="w-1.5 h-1.5 bg-zinc-500 rounded-full"></div>
                  <div className="w-1.5 h-1.5 bg-zinc-500 rounded-full"></div>
                </div>
              </div>
            )}
          </div>

          <div className="p-4 bg-zinc-900 border-t border-zinc-800">
            <div className="flex gap-2 bg-black/50 p-2 rounded-2xl">
              <input 
                type="text" 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Ask about hours, classes..."
                className="bg-transparent border-none focus:ring-0 flex-1 text-sm placeholder:text-zinc-600"
              />
              <button 
                onClick={handleSend}
                className="bg-orange-500 text-black p-2 rounded-xl hover:bg-orange-400 transition-colors"
              >
                <Send size={18} />
              </button>
            </div>
          </div>
        </div>
      ) : (
        <button 
          onClick={() => setIsOpen(true)}
          className="bg-orange-500 text-black w-16 h-16 rounded-full flex items-center justify-center shadow-xl shadow-orange-500/40 hover:scale-110 transition-all border-4 border-black"
        >
          <MessageSquare size={28} />
        </button>
      )}
    </div>
  );
};

export default Chatbot;
