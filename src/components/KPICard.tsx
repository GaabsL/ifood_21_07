import { ReactNode } from 'react';
import { cn } from '../lib/utils';

interface KPICardProps {
  title: string;
  value: string | number;
  subtitle?: string;
  icon?: ReactNode;
  className?: string;
}

export function KPICard({ title, value, subtitle, icon, className }: KPICardProps) {
  return (
    <div className={cn("bg-white border border-slate-200 shadow-sm rounded-xl p-5 flex flex-col justify-between transition-all hover:border-slate-300", className)}>
      <div className="flex items-start justify-between mb-4">
        <h3 className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">{title}</h3>
        {icon && <div className="text-slate-500 bg-slate-50 rounded-lg p-1.5 border border-slate-100">{icon}</div>}
      </div>
      <div>
        <div className="text-3xl font-bold text-slate-900 tracking-tight">{value}</div>
        {subtitle && <p className="text-sm text-slate-500 mt-2 font-medium">{subtitle}</p>}
      </div>
    </div>
  );
}
