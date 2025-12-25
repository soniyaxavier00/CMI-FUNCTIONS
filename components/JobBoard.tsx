
import React, { useState } from 'react';
import { 
  Briefcase, 
  MapPin, 
  Users, 
  ChevronRight, 
  Sparkles,
  Loader2,
  CheckCircle2
} from 'lucide-react';
import { JobPosting } from '../types';
import { geminiService } from '../services/geminiService';

const mockJobs: JobPosting[] = [
  { id: '1', title: 'Lead Product Designer', department: 'Design', location: 'London / Remote', type: 'Full-time', applicants: 24, status: 'Open' },
  { id: '2', title: 'Senior Dev Ops Engineer', department: 'Engineering', location: 'Berlin', type: 'Full-time', applicants: 12, status: 'Open' },
  { id: '3', title: 'HR Manager', department: 'Operations', location: 'San Francisco', type: 'Full-time', applicants: 45, status: 'Closed' },
  { id: '4', title: 'Marketing Coordinator', department: 'Marketing', location: 'Remote', type: 'Contract', applicants: 8, status: 'Open' },
];

const JobBoard: React.FC = () => {
  const [showDraftModal, setShowDraftModal] = useState(false);
  const [draftTitle, setDraftTitle] = useState('');
  const [draftDept, setDraftDept] = useState('Engineering');
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedContent, setGeneratedContent] = useState('');

  const handleGenerate = async () => {
    if (!draftTitle) return;
    setIsGenerating(true);
    try {
      const result = await geminiService.generateJobDescription(draftTitle, draftDept);
      setGeneratedContent(result || '');
    } catch (error) {
      console.error(error);
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="space-y-8 animate-in slide-in-from-right-4 duration-500">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-slate-900">Active Job Postings</h2>
          <p className="text-slate-500 text-sm">Create and manage recruitment cycles for open roles.</p>
        </div>
        <button 
          onClick={() => setShowDraftModal(true)}
          className="bg-indigo-600 text-white px-5 py-2.5 rounded-xl flex items-center gap-2 hover:bg-indigo-700 transition-shadow shadow-md hover:shadow-lg"
        >
          <Sparkles size={18} />
          AI Draft New Role
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {mockJobs.map((job) => (
          <div key={job.id} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow group cursor-pointer">
            <div className="flex justify-between items-start mb-4">
              <div className="p-3 bg-slate-50 rounded-xl group-hover:bg-indigo-50 transition-colors">
                <Briefcase size={24} className="text-slate-400 group-hover:text-indigo-600" />
              </div>
              <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${
                job.status === 'Open' ? 'bg-green-100 text-green-700' : 'bg-slate-100 text-slate-600'
              }`}>
                {job.status}
              </span>
            </div>
            
            <h3 className="text-lg font-bold text-slate-900 mb-1 group-hover:text-indigo-600 transition-colors">{job.title}</h3>
            <p className="text-sm text-slate-500 mb-6 font-medium">{job.department}</p>
            
            <div className="flex items-center gap-6 border-t border-slate-100 pt-6">
              <div className="flex items-center gap-2 text-slate-400">
                <MapPin size={16} />
                <span className="text-sm font-medium">{job.location}</span>
              </div>
              <div className="flex items-center gap-2 text-slate-400">
                <Users size={16} />
                <span className="text-sm font-medium">{job.applicants} Applicants</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* AI Draft Modal */}
      {showDraftModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/40 backdrop-blur-sm p-4">
          <div className="bg-white rounded-3xl w-full max-w-2xl shadow-2xl flex flex-col max-h-[90vh] overflow-hidden">
            <div className="p-6 border-b border-slate-100 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Sparkles className="text-indigo-600" size={24} />
                <h3 className="text-xl font-bold">AI Job Architect</h3>
              </div>
              <button 
                onClick={() => setShowDraftModal(false)}
                className="p-2 hover:bg-slate-100 rounded-full text-slate-400"
              >
                <ChevronRight size={24} className="rotate-90 md:rotate-0" />
              </button>
            </div>
            
            <div className="p-8 flex-1 overflow-y-auto space-y-6">
              {!generatedContent ? (
                <div className="space-y-4">
                  <p className="text-slate-600">Provide a few details and Gemini will generate a complete job description for you.</p>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Job Title</label>
                    <input 
                      type="text" 
                      placeholder="e.g. Senior Backend Engineer" 
                      value={draftTitle}
                      onChange={(e) => setDraftTitle(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Department</label>
                    <select 
                      value={draftDept}
                      onChange={(e) => setDraftDept(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all"
                    >
                      <option>Engineering</option>
                      <option>Design</option>
                      <option>Marketing</option>
                      <option>Operations</option>
                      <option>Sales</option>
                    </select>
                  </div>
                  <button 
                    onClick={handleGenerate}
                    disabled={isGenerating || !draftTitle}
                    className="w-full bg-indigo-600 text-white py-3 rounded-xl font-bold hover:bg-indigo-700 disabled:opacity-50 transition-colors flex items-center justify-center gap-2"
                  >
                    {isGenerating ? <Loader2 className="animate-spin" size={20} /> : <Sparkles size={20} />}
                    {isGenerating ? 'Generating Description...' : 'Generate Description'}
                  </button>
                </div>
              ) : (
                <div className="animate-in fade-in slide-in-from-bottom-4">
                  <div className="bg-slate-50 p-6 rounded-2xl whitespace-pre-wrap text-slate-700 text-sm leading-relaxed border border-slate-200 max-h-[400px] overflow-y-auto font-mono">
                    {generatedContent}
                  </div>
                  <div className="flex items-center gap-3 mt-8">
                    <button 
                      onClick={() => setGeneratedContent('')}
                      className="flex-1 px-4 py-3 rounded-xl border border-slate-200 font-bold hover:bg-slate-50 transition-colors"
                    >
                      Regenerate
                    </button>
                    <button 
                      className="flex-1 bg-indigo-600 text-white py-3 rounded-xl font-bold hover:bg-indigo-700 transition-colors flex items-center justify-center gap-2"
                      onClick={() => setShowDraftModal(false)}
                    >
                      <CheckCircle2 size={20} />
                      Use This Draft
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default JobBoard;
