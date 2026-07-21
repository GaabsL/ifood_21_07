import { useState } from 'react';
import { reportData } from './data';
import { Overview } from './components/Overview';
import { NetworkTab } from './components/NetworkTab';
import { LayoutDashboard, Facebook, Instagram, Video, Menu, X } from 'lucide-react';
import { cn } from './lib/utils';

export default function App() {
  const [activeTab, setActiveTab] = useState('overview');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  
  const currentPeriod = reportData.periods[0]; // Currently defaults to the first period

  const navItems = [
    { id: 'overview', label: 'Visão Geral', icon: <LayoutDashboard className="w-5 h-5" /> },
    { id: 'facebook', label: 'Facebook', icon: <Facebook className="w-5 h-5" /> },
    { id: 'instagramFeed', label: 'Instagram Feed', icon: <Instagram className="w-5 h-5" /> },
    { id: 'instagramStories', label: 'Instagram Stories', icon: <Instagram className="w-5 h-5" /> },
    { id: 'tiktok', label: 'TikTok', icon: <Video className="w-5 h-5" /> },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'overview':
        return <Overview data={currentPeriod} />;
      case 'facebook':
        return <NetworkTab data={currentPeriod.networks.facebook} />;
      case 'instagramFeed':
        return <NetworkTab data={currentPeriod.networks.instagramFeed} />;
      case 'instagramStories':
        return <NetworkTab data={currentPeriod.networks.instagramStories} />;
      case 'tiktok':
        return <NetworkTab data={currentPeriod.networks.tiktok} />;
      default:
        return <Overview data={currentPeriod} />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col md:flex-row">
      {/* Mobile Header */}
      <div className="md:hidden flex flex-col p-4 bg-white border-b border-slate-200 z-20 shadow-sm gap-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src="https://i.imgur.com/ihchsJt.png" alt="Assaí" className="h-8 object-contain" />
            <div className="w-[1px] h-6 bg-slate-200"></div>
            <img src="https://i.imgur.com/lAyMWKF.png" alt="Mega Mídia" className="h-4 object-contain" />
          </div>
          <button 
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="p-2 text-slate-500 hover:text-slate-800"
          >
            {isSidebarOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
        <p className="text-sm font-semibold text-slate-700 tracking-tight">Performance Digital | Ifood</p>
      </div>

      {/* Sidebar */}
      <aside className={cn(
        "fixed inset-y-0 left-0 z-10 w-64 bg-white border-r border-slate-200 shadow-sm flex flex-col transition-transform duration-300 ease-in-out md:relative md:translate-x-0",
        isSidebarOpen ? "translate-x-0 mt-[73px] md:mt-0" : "-translate-x-full"
      )}>
        <div className="hidden md:flex p-6 flex-col gap-3 border-b border-slate-100">
          <div className="flex items-center gap-4">
            <img src="https://i.imgur.com/ihchsJt.png" alt="Assaí" className="h-10 object-contain" />
            <div className="w-[1px] h-8 bg-slate-200"></div>
            <img src="https://i.imgur.com/lAyMWKF.png" alt="Mega Mídia" className="h-5 object-contain" />
          </div>
          <p className="text-[15px] font-semibold text-slate-700 tracking-tight">Performance Digital | Ifood</p>
        </div>

        <div className="p-4 flex-1 overflow-y-auto">
          <div className="mb-6">
            <p className="px-3 text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">
              Período
            </p>
            <div className="px-3 py-2.5 bg-slate-50 rounded-lg text-sm font-medium text-slate-600 border border-slate-200">
              {currentPeriod.title}
            </div>
          </div>

          <nav className="space-y-1">
            <p className="px-3 text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2 mt-6">
              Relatórios
            </p>
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  setActiveTab(item.id);
                  setIsSidebarOpen(false);
                }}
                className={cn(
                  "w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-200",
                  activeTab === item.id 
                    ? "bg-red-50 text-red-600 border-l-2 border-red-600" 
                    : "text-slate-500 hover:bg-slate-50 hover:text-slate-800"
                )}
              >
                {item.icon}
                {item.label}
              </button>
            ))}
          </nav>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col min-w-0 h-screen overflow-y-auto bg-slate-50 relative">
        {/* Overlay for mobile sidebar */}
        {isSidebarOpen && (
          <div 
            className="fixed inset-0 bg-black/50 z-0 md:hidden" 
            onClick={() => setIsSidebarOpen(false)}
          />
        )}
        
        <div className="p-6 lg:p-10 max-w-7xl mx-auto w-full">
          {renderContent()}
        </div>
      </main>
    </div>
  );
}
