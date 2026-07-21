import { Post } from '../types';
import { cn } from '../lib/utils';
import { Share2, MousePointerClick, Eye, TrendingUp } from 'lucide-react';

interface TopPostCardProps {
  post: Post & { network?: string };
  className?: string;
  isOverall?: boolean;
}

export function TopPostCard({ post, className, isOverall = false }: TopPostCardProps) {
  return (
    <div className={cn("bg-slate-900 text-white border border-slate-800 rounded-xl overflow-hidden flex flex-col h-full relative", className)}>
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-red-600/20 to-transparent pointer-events-none"></div>
      <div className="p-5 border-b border-slate-800/50 flex items-center justify-between relative z-10">
        <div>
          <h3 className="text-[10px] font-bold text-white/60 uppercase tracking-widest flex items-center gap-2">
            <span className="w-5 h-5 bg-black rounded flex items-center justify-center font-serif italic text-[10px] text-white">#</span>
            Top Post {isOverall && "(Geral)"}
          </h3>
          {post.network && <p className="text-sm font-bold text-white mt-1">{post.network}</p>}
        </div>
        <span className="px-2 py-1 bg-white/10 text-white text-[10px] font-bold rounded uppercase tracking-wider border border-white/10">
          {post.formato || 'Post'}
        </span>
      </div>
      
      <div className="flex-1 flex flex-col md:flex-row relative z-10">
        <div className="md:w-2/5 relative bg-black aspect-square md:aspect-auto">
          <img 
            src={post.imageUrl} 
            alt={post.title} 
            className="w-full h-full object-cover opacity-90 transition-opacity hover:opacity-100"
          />
        </div>
        <div className="p-6 flex-1 flex flex-col justify-center gap-6">
          {post.title && <h4 className="text-xl font-bold text-white line-clamp-2">{post.title}</h4>}
          
          <div className="grid grid-cols-2 gap-y-4 gap-x-2">
            {post.visualizacoes ? (
              <div className="space-y-1">
                <p className="text-[10px] opacity-60 uppercase flex items-center gap-1"><Eye className="w-3 h-3" /> Views</p>
                <p className="text-lg font-bold">{post.visualizacoes}</p>
              </div>
            ) : (
              <div className="space-y-1">
                <p className="text-[10px] opacity-60 uppercase flex items-center gap-1"><Share2 className="w-3 h-3" /> Alcance</p>
                <p className="text-lg font-bold">{post.alcance}</p>
              </div>
            )}
            <div className="space-y-1">
              <p className="text-[10px] opacity-60 uppercase flex items-center gap-1"><MousePointerClick className="w-3 h-3" /> Interações</p>
              <p className="text-lg font-bold">{post.interacoes}</p>
            </div>
            {post.impressoes && (
              <div className="space-y-1">
                <p className="text-[10px] opacity-60 uppercase flex items-center gap-1"><Eye className="w-3 h-3" /> Impressões</p>
                <p className="text-lg font-bold">{post.impressoes}</p>
              </div>
            )}
            <div className="space-y-1">
              <p className="text-[10px] opacity-80 uppercase flex items-center gap-1 text-red-400"><TrendingUp className="w-3 h-3" /> Engajamento</p>
              <p className="text-xl font-bold text-red-400">{post.engajamento}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
