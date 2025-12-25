
import React, { useState } from 'react';
import { Star, MessageSquare, TrendingUp, Sparkles, Loader2 } from 'lucide-react';
import { geminiService } from '../services/geminiService';

const reviews = [
  { id: '1', employee: 'James Wilson', rating: 4.5, comments: 'James has shown exceptional leadership in the redesign project. His technical skills are top-notch.', status: 'Completed' },
  { id: '2', employee: 'Maria Garcia', rating: 4.8, comments: 'Consistent delivery and great team collaboration. Maria often goes beyond her assigned tasks.', status: 'Pending' },
  { id: '3', employee: 'Sarah Miller', rating: 3.9, comments: 'Needs to focus more on deadline management. Excellent creative output nonetheless.', status: 'Completed' },
];

const Performance: React.FC = () => {
  const [isSummarizing, setIsSummarizing] = useState(false);
  const [summary, setSummary] = useState<string | null>(null);

  const generateSummary = async () => {
    setIsSummarizing(true);
    try {
      const res = await geminiService.summarizePerformance(reviews);
      setSummary(res || '');
    } catch (e) {
      console.error(e);
    } finally {
      setIsSummarizing(false);
    }
  };

  return (
    <div className="space-y-8 animate-in slide-in-from-left-4 duration-500">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-slate-900">Performance Management</h2>
          <p className="text-slate-500 text-sm">Review employee performance and professional growth.</p>
        </div>
        <button 
          onClick={generateSummary}
          disabled={isSummarizing}
          className="bg-violet-600 text-white px-5 py-2.5 rounded-xl flex items-center gap-2 hover:bg-violet-700 transition-shadow shadow-md hover:shadow-lg disabled:opacity-50"
        >
          {isSummarizing ? <Loader2 className="animate-spin" size={18} /> : <Sparkles size={18} />}
          AI Insight Summary
        </button>
      </div>

      {summary && (
        <div className="bg-gradient-to-br from-violet-50 to-indigo-50 border border-violet-100 p-6 rounded-2xl animate-in zoom-in-95 duration-300">
          <div className="flex items-center gap-2 mb-4 text-violet-700">
            <Sparkles size={20} />
            <h3 className="font-bold">AI Aggregate Insights</h3>
          </div>
          <div className="prose prose-sm text-slate-700 leading-relaxed whitespace-pre-wrap">
            {summary}
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 gap-4">
        {reviews.map((rev) => (
          <div key={rev.id} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex items-start gap-6">
            <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center shrink-0">
              <Star className="text-amber-400" size={24} fill="currentColor" />
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-bold text-slate-900">{rev.employee}</h4>
                <div className="flex items-center gap-1 text-amber-500">
                  <Star size={16} fill="currentColor" />
                  <span className="text-sm font-bold">{rev.rating}</span>
                </div>
              </div>
              <p className="text-sm text-slate-600 italic mb-4">"{rev.comments}"</p>
              <div className="flex items-center gap-4">
                <span className={`text-xs px-2.5 py-1 rounded-full font-bold ${
                  rev.status === 'Completed' ? 'bg-emerald-50 text-emerald-600' : 'bg-amber-50 text-amber-600'
                }`}>
                  {rev.status}
                </span>
                <button className="text-xs font-bold text-indigo-600 hover:text-indigo-700 flex items-center gap-1">
                  <MessageSquare size={14} />
                  Add Feedback
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Performance;
