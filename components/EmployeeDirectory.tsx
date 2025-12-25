
import React, { useState } from 'react';
import { Mail, Phone, MoreHorizontal, Filter, Download, UserCheck } from 'lucide-react';
import { Employee } from '../types';

const mockEmployees: Employee[] = [
  { id: '1', name: 'Mrs. Chayya', role: 'Chief Information Officer (CIO)', department: 'Top Management', email: 'chayya@clevermetal.ae', status: 'Active', avatar: 'https://picsum.photos/seed/chayya/100/100', joinDate: 'Jan 2018' },
  { id: '2', name: 'Mr. Nilesh', role: 'Chief Operations Officer (COO)', department: 'Top Management', email: 'nilesh@clevermetal.ae', status: 'On Shift', avatar: 'https://picsum.photos/seed/nilesh/100/100', joinDate: 'Mar 2019' },
  { id: '3', name: 'Mr. Hitesh', role: 'Chief Financial Officer (CFO)', department: 'Top Management', email: 'hitesh@clevermetal.ae', status: 'Active', avatar: 'https://picsum.photos/seed/hitesh/100/100', joinDate: 'Nov 2018' },
  { id: '4', name: 'Ahmed Khan', role: 'Production Planner', department: 'PRODN. & MFG', email: 'akhan@clevermetal.ae', status: 'Active', avatar: 'https://picsum.photos/seed/ahmed/100/100', joinDate: 'Jun 2022' },
  { id: '5', name: 'Suresh Kumar', role: 'Forklift Operator', department: 'PRODN. & MFG', email: 'suresh@clevermetal.ae', status: 'On Shift', avatar: 'https://picsum.photos/seed/suresh/100/100', joinDate: 'Feb 2024' },
  { id: '6', name: 'Robert Smith', role: 'International Sales Manager', department: 'Sales', email: 'r.smith@clevermetal.ae', status: 'Active', avatar: 'https://picsum.photos/seed/robert/100/100', joinDate: 'Sep 2021' },
  { id: '7', name: 'Ali Bin Rashid', role: 'PRO (Public Relations Officer)', department: 'HR/PRO & Catalyst', email: 'ali.rashid@clevermetal.ae', status: 'Remote', avatar: 'https://picsum.photos/seed/ali/100/100', joinDate: 'Jan 2020' },
  { id: '8', name: 'Maria Santos', role: 'Collection Accounts Executive', department: 'Finance', email: 'maria.s@clevermetal.ae', status: 'Active', avatar: 'https://picsum.photos/seed/maria/100/100', joinDate: 'Dec 2022' },
];

const EmployeeDirectory: React.FC = () => {
  return (
    <div className="space-y-6 animate-in slide-in-from-bottom-4 duration-500">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-slate-900 uppercase tracking-tight">Workforce Directory</h2>
          <p className="text-slate-500 text-sm">Manage the multi-layered team structure of Clever Metal Industries.</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 px-4 py-2 border border-slate-200 rounded-xl text-xs font-bold text-slate-600 hover:bg-slate-50 uppercase tracking-wider">
            <Filter size={16} />
            Filter By Dept
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-slate-900 text-white rounded-xl text-xs font-bold hover:bg-black transition-all shadow-sm uppercase tracking-wider">
            <Download size={16} />
            Export Data
          </button>
        </div>
      </div>

      <div className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-xl">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-900 border-b border-white/10 text-white">
                <th className="px-6 py-5 text-[10px] font-black uppercase tracking-widest opacity-70">Employee Name & Role</th>
                <th className="px-6 py-5 text-[10px] font-black uppercase tracking-widest opacity-70">Department</th>
                <th className="px-6 py-5 text-[10px] font-black uppercase tracking-widest opacity-70">Shift Status</th>
                <th className="px-6 py-5 text-[10px] font-black uppercase tracking-widest opacity-70">Hired Since</th>
                <th className="px-6 py-5 text-[10px] font-black uppercase tracking-widest opacity-70 text-right">Connect</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {mockEmployees.map((emp) => (
                <tr key={emp.id} className="hover:bg-slate-50 transition-colors group">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-4">
                      <img src={emp.avatar} alt={emp.name} className="w-10 h-10 rounded-full bg-slate-200 ring-2 ring-indigo-500/10" />
                      <div>
                        <p className="font-bold text-slate-900 text-sm leading-tight">{emp.name}</p>
                        <p className="text-xs text-slate-400 font-medium mt-0.5">{emp.role}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">{emp.department}</span>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase tracking-widest ${
                      emp.status === 'Active' ? 'bg-indigo-50 text-indigo-700 border border-indigo-100' :
                      emp.status === 'On Shift' ? 'bg-amber-50 text-amber-700 border border-amber-100' :
                      'bg-slate-100 text-slate-600 border border-slate-200'
                    }`}>
                      {emp.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-sm font-medium text-slate-500">{emp.joinDate}</span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex items-center justify-end gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button className="p-2 text-slate-400 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg">
                        <Mail size={16} />
                      </button>
                      <button className="p-2 text-slate-400 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg">
                        <Phone size={16} />
                      </button>
                      <button className="p-2 text-slate-300 hover:text-slate-600">
                        <MoreHorizontal size={16} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default EmployeeDirectory;
