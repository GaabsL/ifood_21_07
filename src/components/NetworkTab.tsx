import { NetworkTabStats } from '../types';
import { TopPostCard } from './TopPostCard';
import { PostsTable } from './PostsTable';
import { Lightbulb } from 'lucide-react';

interface NetworkTabProps {
  data: NetworkTabStats;
}

export function NetworkTab({ data }: NetworkTabProps) {
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex flex-col gap-1">
        <h2 className="text-2xl font-bold text-slate-900 tracking-tight">{data.name}</h2>
        <p className="text-sm text-slate-500">Análise de performance e top posts da rede.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-1 flex flex-col">
          <div className="bg-white border border-slate-200 shadow-sm rounded-xl p-6 flex-1 flex flex-col">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-amber-50 border border-amber-100 rounded-lg">
                <Lightbulb className="w-5 h-5 text-amber-500" />
              </div>
              <h3 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Insight</h3>
            </div>
            <p className="text-slate-700 text-sm leading-relaxed flex-1 whitespace-pre-line">
              {data.analysis}
            </p>
          </div>
        </div>
        
        <div className="lg:col-span-2">
          <TopPostCard post={data.topPost} />
        </div>
      </div>

      <div>
        <div className="flex flex-col gap-1 mt-4">
          <h3 className="text-xl font-bold text-slate-900 tracking-tight">Posts da Semana</h3>
          <p className="text-sm text-slate-500">Lista detalhada de publicações do período selecionado.</p>
        </div>
        <PostsTable posts={data.posts} />
      </div>
    </div>
  );
}
