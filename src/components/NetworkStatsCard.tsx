import { NetworkStat } from '../types';
import { Share2, MousePointerClick, Eye, TrendingUp } from 'lucide-react';

interface NetworkStatsCardProps {
  name: string;
  stats: NetworkStat;
}

export function NetworkStatsCard({ name, stats }: NetworkStatsCardProps) {
  return (
    <div className="bg-white border border-slate-200 shadow-sm rounded-xl p-6 transition-colors hover:border-slate-300">
      <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
        {name}
      </h3>
      
      <div className="space-y-5">
        <div className="flex justify-between items-center pb-4 border-b border-slate-100">
          <div className="flex items-center gap-2 text-slate-500">
            <TrendingUp className="w-4 h-4 text-ifood" />
            <span className="font-semibold text-sm">Engajamento M.</span>
          </div>
          <span className="font-bold text-lg text-slate-900">{stats.engajamento}</span>
        </div>

        <div className="flex justify-between items-start pb-4 border-b border-slate-100">
          <div className="flex items-center gap-2 text-slate-500 mt-1">
            <Share2 className="w-4 h-4" />
            <span className="font-semibold text-sm">Alcance/Views</span>
          </div>
          <div className="text-right">
            <div className="font-bold text-slate-900">{stats.alcance}</div>
            <div className="text-xs text-slate-400 mt-0.5">Média: {stats.alcanceMedia}</div>
          </div>
        </div>

        <div className="flex justify-between items-start pb-4 border-b border-slate-100">
          <div className="flex items-center gap-2 text-slate-500 mt-1">
            <MousePointerClick className="w-4 h-4" />
            <span className="font-semibold text-sm">Interações</span>
          </div>
          <div className="text-right">
            <div className="font-bold text-slate-900">{stats.interacoes}</div>
            <div className="text-xs text-slate-400 mt-0.5">Média: {stats.interacoesMedia}</div>
          </div>
        </div>

        <div className="flex justify-between items-start">
          <div className="flex items-center gap-2 text-slate-500 mt-1">
            <Eye className="w-4 h-4" />
            <span className="font-semibold text-sm">Impressões</span>
          </div>
          <div className="text-right">
            <div className="font-bold text-slate-900">{stats.impressoes}</div>
            <div className="text-xs text-slate-400 mt-0.5">Média: {stats.impressoesMedia}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
