
import React from 'react';
import { User, ChevronDown, ArrowRight } from 'lucide-react';

const OrgNode = ({ title, name, color, subnodes = [] }: any) => (
  <div className="flex flex-col items-center">
    <div className={`p-4 rounded-xl shadow-lg border-2 min-w-[200px] text-center ${color}`}>
      <p className="text-[10px] font-black uppercase tracking-widest opacity-70">{title}</p>
      {name && <h4 className="text-sm font-bold mt-1">{name}</h4>}
    </div>
    {subnodes.length > 0 && (
      <>
        <div className="w-0.5 h-8 bg-slate-300"></div>
        <div className="flex gap-8 relative before:content-[''] before:absolute before:top-0 before:left-[100px] before:right-[100px] before:h-0.5 before:bg-slate-300">
          {subnodes.map((node: any, i: number) => (
            <div key={i} className="relative before:content-[''] before:absolute before:top-0 before:left-1/2 before:-translate-x-1/2 before:w-0.5 before:h-8 before:bg-slate-300">
              <div className="pt-8">
                <OrgNode {...node} />
              </div>
            </div>
          ))}
        </div>
      </>
    )}
  </div>
);

const OrgChart: React.FC = () => {
  const structure = {
    title: "CHIEF EXECUTIVE OFFICER / OWNER (CEO)",
    name: "OWNER",
    color: "bg-indigo-50 border-indigo-200 text-indigo-900",
    subnodes: [
      {
        title: "CHIEF INFORMATION OFFICER (CIO)",
        name: "MRS. CHAYYA",
        color: "bg-blue-50 border-blue-200 text-blue-900",
        subnodes: [{ title: "IT DEPARTMENT", color: "bg-teal-50 border-teal-200 text-teal-900", subnodes: [{ title: "IT COORDINATOR", color: "bg-violet-50 border-violet-200 text-violet-900" }] }]
      },
      {
        title: "CHIEF OPERATIONS OFFICER (COO)",
        name: "MR. NILESH",
        color: "bg-blue-50 border-blue-200 text-blue-900",
        subnodes: [
          { title: "PRODN. & MFG DEPARTMENT", color: "bg-teal-50 border-teal-200 text-teal-900" },
          { title: "PURCHASE DISPATCH DEPARTMENT", color: "bg-teal-50 border-teal-200 text-teal-900" },
          { title: "SALES DEPARTMENT", color: "bg-teal-50 border-teal-200 text-teal-900" }
        ]
      },
      {
        title: "CHIEF FINANCIAL OFFICER (CFO)",
        name: "MR. HITESH",
        color: "bg-blue-50 border-blue-200 text-blue-900",
        subnodes: [{ title: "FINANCE DEPARTMENT", color: "bg-teal-50 border-teal-200 text-teal-900" }]
      }
    ]
  };

  return (
    <div className="space-y-8 animate-in fade-in zoom-in-95 duration-700">
      <div className="flex items-center justify-between bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
        <div>
          <h2 className="text-2xl font-bold text-slate-900 uppercase tracking-tight">Organization Hierarchy</h2>
          <p className="text-slate-500 text-sm">Clever Metal Industries LLC Official Reporting Structure</p>
        </div>
        <div className="flex gap-2">
          <span className="flex items-center gap-1.5 text-[10px] font-bold px-3 py-1 bg-indigo-50 text-indigo-600 rounded-full">TOP MGMT</span>
          <span className="flex items-center gap-1.5 text-[10px] font-bold px-3 py-1 bg-teal-50 text-teal-600 rounded-full">DEPARTMENTS</span>
          <span className="flex items-center gap-1.5 text-[10px] font-bold px-3 py-1 bg-violet-50 text-violet-600 rounded-full">OPERATIONAL</span>
        </div>
      </div>

      <div className="overflow-x-auto pb-12">
        <div className="min-w-[1200px] flex justify-center py-8">
          <OrgNode {...structure} />
        </div>
      </div>
    </div>
  );
};

export default OrgChart;
