
import React from 'react';
import { Instagram, Heart, MessageCircle } from 'lucide-react';

const SocialFeed: React.FC = () => {
  const feed = [
    { url: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80&w=400&h=400", likes: "2.4k", comments: "124" },
    { url: "https://images.unsplash.com/photo-1532029837206-abbe2b7620e3?auto=format&fit=crop&q=80&w=400&h=400", likes: "1.8k", comments: "98" },
    { url: "https://images.unsplash.com/photo-1534367507873-d2b7e2495992?auto=format&fit=crop&q=80&w=400&h=400", likes: "3.1k", comments: "256" },
    { url: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?auto=format&fit=crop&q=80&w=400&h=400", likes: "1.2k", comments: "45" },
    { url: "https://images.unsplash.com/photo-1517963879433-6ad2b056d712?auto=format&fit=crop&q=80&w=400&h=400", likes: "940", comments: "31" },
    { url: "https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?auto=format&fit=crop&q=80&w=400&h=400", likes: "4.5k", comments: "512" },
  ];

  return (
    <div className="py-20 border-t border-zinc-800">
      <div className="flex items-center gap-4 mb-12">
        <div className="bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 p-3 rounded-2xl">
          <Instagram size={32} className="text-white" />
        </div>
        <div>
          <h2 className="text-4xl font-bebas">@HERMAJESTYSGYM</h2>
          <p className="text-zinc-500 font-bold uppercase text-xs tracking-widest">Share your reign #HMGREIGN</p>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2">
        {feed.map((post, i) => (
          <div key={i} className="aspect-square relative group overflow-hidden cursor-pointer">
            <img src={post.url} alt="Instagram Post" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-6">
              <div className="flex items-center gap-1 text-white font-bold">
                <Heart size={16} fill="white" /> {post.likes}
              </div>
              <div className="flex items-center gap-1 text-white font-bold">
                <MessageCircle size={16} fill="white" /> {post.comments}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SocialFeed;
