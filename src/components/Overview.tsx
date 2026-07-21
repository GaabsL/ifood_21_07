import { PeriodData } from '../types';
import { KPICard } from './KPICard';
import { NetworkStatsCard } from './NetworkStatsCard';
import { TopPostCard } from './TopPostCard';
import { Activity, Users, MousePointerClick, Eye } from 'lucide-react';

interface OverviewProps {
  data: PeriodData;
}

export function Overview({ data }: OverviewProps) {
  const { overview } = data;

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex flex-col gap-1">
        <h2 className="text-2xl font-bold text-slate-900 tracking-tight">Visão Geral</h2>
        <p className="text-sm text-slate-500">Consolidado de todas as redes e campanhas ativas.</p>
      </div>

      {/* Primary KPIs */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <KPICard 
          title="Engajamento Médio" 
          value={overview.consolidated.engajamento} 
          icon={<Activity className="w-5 h-5 text-ifood" />}
          className="border-red-200 bg-gradient-to-br from-white to-red-50/50"
        />
        <KPICard 
          title="Alcance/Views" 
          value={overview.consolidated.alcance} 
          icon={<Users className="w-5 h-5 text-blue-500" />}
        />
        <KPICard 
          title="Interações" 
          value={overview.consolidated.interacoes} 
          icon={<MousePointerClick className="w-5 h-5 text-emerald-500" />}
        />
        <KPICard 
          title="Impressões" 
          value={overview.consolidated.impressoes} 
          icon={<Eye className="w-5 h-5 text-purple-500" />}
        />
      </div>

      {/* Network Breakdowns */}
      <div>
        <div className="flex flex-col gap-1 mb-6">
          <h2 className="text-xl font-bold text-slate-900 tracking-tight">Desempenho por Rede</h2>
          <p className="text-sm text-slate-500">Quebra dos principais KPIs consolidados.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <NetworkStatsCard name="Facebook" stats={overview.facebook} />
          <NetworkStatsCard name="Instagram" stats={overview.instagram} />
          <NetworkStatsCard name="TikTok" stats={overview.tiktok} />
        </div>
      </div>

      {/* Middle Section: Top Post */}
      <div className="max-w-sm">
        <TopPostCard post={overview.topPost} isOverall />
      </div>
    </div>
  );
}
