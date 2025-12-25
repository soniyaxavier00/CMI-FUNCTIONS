
import React from 'react';
import { 
  Users, 
  Calendar, 
  TrendingUp,
  Briefcase,
  ArrowUpRight,
  MessageSquareText,
  BarChart3
} from 'lucide-react';
import { XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area } from 'recharts';
import { View } from '../types';

const data = [
  { name: 'Jan', headcount: 120, leave: 5 },
  { name: 'Feb', headcount: 125, leave: 8 },
  { name: 'Mar', headcount: 130, leave: 4 },
  { name: 'Apr', headcount: 132, leave: 6 },
  { name: 'May', headcount: 140, leave: 10 },
  { name: 'Jun', headcount: 145, leave: 12 },
];

const StatCard = ({ title, value, change, icon: Icon, color }: any) => (
  <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
    <div className="flex items-start justify-between">
      <div>
        <p className="text-sm font-medium text-slate-500 mb-1">{title}</p>
        <h3 className="text-2xl font-bold text-slate-900">{value}</h3>
        <div className="flex items-center mt-2">
          <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${change.startsWith('+') ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
            {change}
          </span>
          <span className="text-xs text-slate-400 ml-2">from last month</span>
        </div>
      </div>
      <div className={`p-3 rounded-xl ${color}`}>
        <Icon size={24} className="text-white" />
      </div>
    </div>
  </div>
);

const Dashboard: React.FC<{ setActiveView: (v: View) => void }> = ({ setActiveView }) => {
  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div className="flex items-end justify-between">
        <div>
          <h2 className="text-3xl font-bold text-slate-900">Welcome Back, Sarah</h2>
          <p className="text-slate-500 mt-1">Here's what's happening at your company today.</p>
        </div>
        <div className="flex items-center gap-3">
          <button 
            onClick={() => setActiveView('reports')}
            className="flex items-center gap-2 px-4 py-2 border border-slate-200 rounded-lg text-sm font-semibold text-slate-600 hover:bg-slate-50 transition-colors"
          >
            <BarChart3 size={18} />
            Detailed Reports
          </button>
          <div className="text-sm font-medium text-slate-400">
            Last updated: Today, 09:42 AM
          </div>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard 
          title="Total Employees" 
          value="145" 
          change="+12" 
          icon={Users} 
          color="bg-blue-500" 
        />
        <StatCard 
          title="Active Job Openings" 
          value="8" 
          change="+2" 
          icon={Briefcase} 
          color="bg-indigo-500" 
        />
        <StatCard 
          title="Leave Requests" 
          value="12" 
          change="-4" 
          icon={Calendar} 
          color="bg-violet-500" 
        />
        <StatCard 
          title="Retention Rate" 
          value="94%" 
          change="+0.5%" 
          icon={TrendingUp} 
          color="bg-teal-500" 
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Growth Chart */}
        <div className="lg:col-span-2 bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-lg font-bold">Headcount Growth</h3>
            <select className="bg-slate-50 border-none rounded-lg text-sm px-3 py-1.5 focus:ring-indigo-500">
              <option>Last 6 months</option>
              <option>Last year</option>
            </select>
          </div>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={data}>
                <defs>
                  <linearGradient id="colorHeadcount" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#4f46e5" stopOpacity={0.1}/>
                    <stop offset="95%" stopColor="#4f46e5" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 12}} />
                <YAxis axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 12}} />
                <Tooltip 
                  contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                />
                <Area type="monotone" dataKey="headcount" stroke="#4f46e5" strokeWidth={3} fillOpacity={1} fill="url(#colorHeadcount)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Notifications/Tasks */}
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col">
          <h3 className="text-lg font-bold mb-6">Upcoming Events</h3>
          <div className="space-y-4 flex-1 overflow-y-auto">
            <div className="flex gap-4 p-3 hover:bg-slate-50 rounded-xl transition-colors cursor-pointer group">
              <div className="w-12 h-12 rounded-xl bg-amber-50 flex flex-col items-center justify-center text-amber-600 shrink-0">
                <span className="text-xs font-bold">JUN</span>
                <span className="text-lg font-black leading-none">24</span>
              </div>
              <div>
                <h4 className="font-semibold text-slate-800 text-sm group-hover:text-indigo-600">Company Townhall</h4>
                <p className="text-xs text-slate-500 mt-0.5">10:00 AM - 11:30 AM • Zoom</p>
              </div>
            </div>
            
            <div className="flex gap-4 p-3 hover:bg-slate-50 rounded-xl transition-colors cursor-pointer group">
              <div className="w-12 h-12 rounded-xl bg-indigo-50 flex flex-col items-center justify-center text-indigo-600 shrink-0">
                <span className="text-xs font-bold">JUN</span>
                <span className="text-lg font-black leading-none">26</span>
              </div>
              <div>
                <h4 className="font-semibold text-slate-800 text-sm group-hover:text-indigo-600">Review: Alex Rivers</h4>
                <p className="text-xs text-slate-500 mt-0.5">02:00 PM • Meeting Room 3</p>
              </div>
            </div>

            <div className="flex gap-4 p-3 hover:bg-slate-50 rounded-xl transition-colors cursor-pointer group">
              <div className="w-12 h-12 rounded-xl bg-emerald-50 flex flex-col items-center justify-center text-emerald-600 shrink-0">
                <span className="text-xs font-bold">JUL</span>
                <span className="text-lg font-black leading-none">01</span>
              </div>
              <div>
                <h4 className="font-semibold text-slate-800 text-sm group-hover:text-indigo-600">New Joiner Orientation</h4>
                <p className="text-xs text-slate-500 mt-0.5">09:00 AM • Welcome Lounge</p>
              </div>
            </div>
          </div>
          <button className="mt-6 w-full py-2.5 rounded-xl border border-slate-200 text-sm font-semibold text-slate-600 hover:bg-slate-50 transition-colors">
            View All Events
          </button>
        </div>
      </div>

      {/* AI HR Assistant Prompt Card */}
      <div className="bg-gradient-to-br from-indigo-600 to-violet-700 p-8 rounded-2xl text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6 overflow-hidden relative">
        <div className="relative z-10">
          <h3 className="text-2xl font-bold mb-2">Struggling with HR Tasks?</h3>
          <p className="text-indigo-100 max-w-md">Our Gemini-powered AI Assistant can help you draft job descriptions, summarize reviews, or answer complex policy questions in seconds.</p>
          <button 
            onClick={() => setActiveView('assistant')}
            className="mt-6 bg-white text-indigo-600 px-6 py-2.5 rounded-xl font-bold hover:bg-indigo-50 transition-colors flex items-center gap-2"
          >
            Launch AI Assistant
            <ArrowUpRight size={18} />
          </button>
        </div>
        <div className="hidden md:block opacity-20 absolute -right-4 -bottom-4">
          <MessageSquareText size={240} strokeWidth={1} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
