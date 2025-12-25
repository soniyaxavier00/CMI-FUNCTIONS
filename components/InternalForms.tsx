
import React from 'react';
import { FileText, ClipboardCheck, HardHat, DollarSign, Clock, Download, Plus } from 'lucide-react';
import { InternalForm } from '../types';

const formsList: InternalForm[] = [
  { id: '1', title: 'Daily Production Log', category: 'Production', lastUsed: '2 hours ago', status: 'Required' },
  { id: '2', title: 'Safety Incident Report', category: 'Safety', lastUsed: '3 days ago', status: 'Required' },
  { id: '3', title: 'Forklift Maintenance Checklist', category: 'Safety', lastUsed: '1 day ago', status: 'Required' },
  { id: '4', title: 'Cash Disbursement Voucher', category: 'Finance', lastUsed: '5 hours ago', status: 'Optional' },
  { id: '5', title: 'Shift Handover Document', category: 'Production', lastUsed: '12 hours ago', status: 'Required' },
  { id: '6', title: 'Employee Leave Application', category: 'HR', lastUsed: '1 week ago', status: 'Optional' },
];

const InternalForms: React.FC = () => {
  return (
    <div className="space-y-6 animate-in slide-in-from-right-4 duration-500">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-slate-900 uppercase tracking-tight">Internal Company Forms</h2>
          <p className="text-slate-500 text-sm">Digital forms for Clever Metal Industries LLC operational compliance.</p>
        </div>
        <button className="bg-indigo-600 text-white px-5 py-2.5 rounded-xl font-bold text-sm flex items-center gap-2 hover:bg-indigo-700 transition-all shadow-md">
          <Plus size={18} />
          Create Custom Form
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {formsList.map((form) => (
          <div key={form.id} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:border-indigo-300 transition-all group relative overflow-hidden">
            <div className="flex items-start justify-between mb-4">
              <div className={`p-3 rounded-xl ${
                form.category === 'Safety' ? 'bg-orange-50 text-orange-600' :
                form.category === 'Production' ? 'bg-indigo-50 text-indigo-600' :
                form.category === 'Finance' ? 'bg-emerald-50 text-emerald-600' :
                'bg-slate-50 text-slate-600'
              }`}>
                {form.category === 'Safety' ? <HardHat size={24} /> :
                 form.category === 'Production' ? <ClipboardCheck size={24} /> :
                 form.category === 'Finance' ? <DollarSign size={24} /> :
                 <FileText size={24} />}
              </div>
              <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                form.status === 'Required' ? 'bg-red-50 text-red-600' : 'bg-slate-100 text-slate-600'
              }`}>
                {form.status}
              </span>
            </div>
            
            <h3 className="text-lg font-bold text-slate-900 mb-1 group-hover:text-indigo-600">{form.title}</h3>
            <p className="text-xs text-slate-400 font-medium mb-6">Category: {form.category}</p>
            
            <div className="flex items-center justify-between mt-4 pt-4 border-t border-slate-50">
              <div className="flex items-center gap-1.5 text-slate-400">
                <Clock size={14} />
                <span className="text-[10px] font-medium uppercase tracking-wider">{form.lastUsed}</span>
              </div>
              <button className="flex items-center gap-1.5 text-indigo-600 font-bold text-xs hover:underline">
                <Download size={14} />
                Open Form
              </button>
            </div>
            
            <div className="absolute top-0 right-0 w-24 h-24 bg-indigo-50/20 rounded-bl-full -mr-12 -mt-12 transition-all group-hover:bg-indigo-50/50"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InternalForms;
