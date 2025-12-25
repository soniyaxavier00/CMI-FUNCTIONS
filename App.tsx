
import React, { useState } from 'react';
import { 
  Users, 
  LayoutDashboard, 
  Briefcase, 
  BarChart3, 
  MessageSquareText, 
  Bell, 
  Search,
  Menu,
  X,
  Plus,
  ArrowUpRight,
  PieChart,
  Network,
  ClipboardList,
  Factory
} from 'lucide-react';
import { View } from './types';
import Dashboard from './components/Dashboard';
import EmployeeDirectory from './components/EmployeeDirectory';
import JobBoard from './components/JobBoard';
import Performance from './components/Performance';
import AIAssistant from './components/AIAssistant';
import Reports from './components/Reports';
import OrgChart from './components/OrgChart';
import InternalForms from './components/InternalForms';

const App: React.FC = () => {
  const [activeView, setActiveView] = useState<View>('dashboard');
  const [isSidebarOpen, setSidebarOpen] = useState(true);

  const navItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'orgchart', label: 'Org Structure', icon: Network },
    { id: 'employees', label: 'Workforce', icon: Users },
    { id: 'forms', label: 'Internal Forms', icon: ClipboardList },
    { id: 'jobs', label: 'Recruitment', icon: Briefcase },
    { id: 'performance', label: 'Reviews', icon: BarChart3 },
    { id: 'reports', label: 'Analytics', icon: PieChart },
    { id: 'assistant', label: 'AI Assistant', icon: MessageSquareText },
  ];

  return (
    <div className="flex h-screen overflow-hidden bg-slate-50">
      <aside 
        className={`${
          isSidebarOpen ? 'w-64' : 'w-20'
        } transition-all duration-300 bg-[#0a192f] text-white flex flex-col z-30 shadow-2xl`}
      >
        <div className="p-6 flex items-center justify-between border-b border-white/10">
          {isSidebarOpen ? (
            <div className="flex flex-col">
              <h1 className="text-lg font-bold leading-none tracking-tight">CLEVER METAL</h1>
              <span className="text-[10px] text-slate-400 font-medium">INDUSTRIES LLC</span>
            </div>
          ) : (
            <div className="w-10 h-10 bg-indigo-500 rounded-lg flex items-center justify-center mx-auto">
              <Factory size={20} className="text-white" />
            </div>
          )}
          <button 
            onClick={() => setSidebarOpen(!isSidebarOpen)}
            className="p-1 hover:bg-white/10 rounded-lg text-slate-400 hidden md:block"
          >
            {isSidebarOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        <nav className="flex-1 px-3 py-4 space-y-1 overflow-y-auto">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveView(item.id as View)}
              className={`w-full flex items-center p-3 rounded-xl transition-all ${
                activeView === item.id 
                  ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-900/50' 
                  : 'text-slate-400 hover:bg-white/5 hover:text-white'
              }`}
            >
              <item.icon size={20} className={activeView === item.id ? 'text-white' : 'text-slate-500'} />
              {isSidebarOpen && <span className="ml-3 font-medium text-sm">{item.label}</span>}
            </button>
          ))}
        </nav>

        <div className="p-4 border-t border-white/10 bg-black/20">
          <div className="flex items-center gap-3">
            <img 
              src="https://picsum.photos/seed/admin/40/40" 
              className="w-9 h-9 rounded-full ring-2 ring-indigo-500/30" 
              alt="Admin" 
            />
            {isSidebarOpen && (
              <div className="flex-1 overflow-hidden">
                <p className="text-xs font-bold truncate">Sarah Jenkins</p>
                <p className="text-[10px] text-slate-500 truncate uppercase tracking-widest">HR Manager</p>
              </div>
            )}
          </div>
        </div>
      </aside>

      <main className="flex-1 flex flex-col min-w-0 overflow-hidden bg-[#f8fafc]">
        <header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-8 shrink-0 shadow-sm">
          <div className="flex-1 max-w-xl">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
              <input 
                type="text" 
                placeholder="Search metal production logs, employees..." 
                className="w-full pl-10 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:ring-2 focus:ring-indigo-500 outline-none transition-all"
              />
            </div>
          </div>

          <div className="flex items-center gap-4 ml-4">
            <button className="relative p-2 text-slate-500 hover:bg-slate-100 rounded-full transition-colors">
              <Bell size={20} />
              <span className="absolute top-2 right-2 w-2 h-2 bg-indigo-600 border-2 border-white rounded-full"></span>
            </button>
            <button className="flex items-center gap-2 bg-slate-900 text-white px-4 py-2 rounded-xl hover:bg-black transition-all shadow-sm">
              <Plus size={18} />
              <span className="text-sm font-semibold uppercase tracking-wider">Log Action</span>
            </button>
          </div>
        </header>

        <div className="flex-1 overflow-y-auto p-8 bg-[#f8fafc]">
          <div className="max-w-7xl mx-auto h-full">
            {activeView === 'dashboard' && <Dashboard setActiveView={setActiveView} />}
            {activeView === 'employees' && <EmployeeDirectory />}
            {activeView === 'orgchart' && <OrgChart />}
            {activeView === 'forms' && <InternalForms />}
            {activeView === 'jobs' && <JobBoard />}
            {activeView === 'performance' && <Performance />}
            {activeView === 'assistant' && <AIAssistant />}
            {activeView === 'reports' && <Reports />}
          </div>
        </div>
      </main>
    </div>
  );
};

export default App;
