import React, { useState } from 'react';
import { useAdmin } from '../../context/AdminContext';
import { Sparkles, Save, RotateCcw, Plus, Trash2, Smile } from 'lucide-react';

const AdminHeroSection = () => {
  const { heroContent, setHeroContent } = useAdmin();
  const [form, setForm] = useState({ ...heroContent });
  const [saved, setSaved] = useState(false);

  const handleSave = (e) => {
    e.preventDefault();
    setHeroContent({ ...form });
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  const updateStat = (index, field, value) => {
    const newStats = [...form.stats];
    newStats[index] = { ...newStats[index], [field]: value };
    setForm({ ...form, stats: newStats });
  };

  const addStat = () => {
    setForm({ ...form, stats: [...form.stats, { number: '0', label: 'New Metric', subtext: 'Clinical metric' }] });
  };

  const removeStat = (index) => {
    setForm({ ...form, stats: form.stats.filter((_, i) => i !== index) });
  };

  return (
    <div className="space-y-5">
      <div className="border-b border-slate-200 pb-3">
        <h1 className="text-xl font-black text-slate-950 flex items-center space-x-2 font-heading">
          <Sparkles className="w-5 h-5 text-cyan-600" />
          <span>Landing Page Hero Showcase Content</span>
        </h1>
        <p className="text-xs text-slate-500 mt-0.5">Customize the landing page clinical headline, operatory background visual, and key treatment counters.</p>
      </div>

      <form onSubmit={handleSave} className="bg-white rounded-3xl border border-slate-200 shadow-sm p-6 sm:p-8 space-y-4 text-xs">
        {[
          { key: 'badge', label: 'Top Badge Label', placeholder: 'Center of Excellence in Advanced Dental Implants & Smile Design' },
          { key: 'heading', label: 'Main Headline', placeholder: 'Painless 3D Guided Dental Implants, Invisalign & Celebrity Smile Aesthetics' },
          { key: 'heroImage', label: 'Dental Operatory Background Image URL', placeholder: 'https://images.unsplash.com/...' },
          { key: 'emergencyLabel', label: 'Emergency Card Title', placeholder: '24/7 Dental Emergency & Toothache Helpline' },
          { key: 'emergencyHotline', label: 'Helpline Number', placeholder: '1800-419-6784' },
        ].map((f) => (
          <div key={f.key}>
            <label className="block font-bold text-slate-700 mb-1">{f.label}</label>
            <input
              type="text"
              value={form[f.key] || ''}
              onChange={(e) => setForm({ ...form, [f.key]: e.target.value })}
              placeholder={f.placeholder}
              className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-xs focus:outline-none focus:border-cyan-500 focus:bg-white"
            />
          </div>
        ))}

        <div>
          <label className="block font-bold text-slate-700 mb-1">Subheadline & Clinical Description</label>
          <textarea
            rows={3}
            value={form.description || ''}
            onChange={(e) => setForm({ ...form, description: e.target.value })}
            className="w-full p-3 bg-slate-50 border border-slate-300 rounded-xl text-xs focus:outline-none focus:border-cyan-500 focus:bg-white resize-none"
          />
        </div>

        {/* Stats Editor */}
        <div className="pt-2 border-t border-slate-100">
          <div className="flex items-center justify-between mb-2">
            <label className="font-bold text-slate-700 uppercase tracking-wider text-[11px]">Clinical Performance Counters</label>
            <button
              type="button"
              onClick={addStat}
              className="px-3 py-1 text-xs font-bold text-cyan-700 bg-cyan-50 hover:bg-cyan-100 border border-cyan-200 rounded-xl flex items-center space-x-1 cursor-pointer"
            >
              <Plus className="w-3 h-3" />
              <span>Add Metric</span>
            </button>
          </div>
          <div className="space-y-2">
            {(form.stats || []).map((stat, idx) => (
              <div key={idx} className="flex items-center space-x-2">
                <input
                  type="text"
                  value={stat.number}
                  onChange={(e) => updateStat(idx, 'number', e.target.value)}
                  placeholder="25,000+"
                  className="w-36 px-3 py-2 bg-slate-50 border border-slate-300 rounded-xl text-xs focus:outline-none focus:border-cyan-500 font-mono font-bold"
                />
                <input
                  type="text"
                  value={stat.label}
                  onChange={(e) => updateStat(idx, 'label', e.target.value)}
                  placeholder="Happy Patient Smiles"
                  className="flex-1 px-3 py-2 bg-slate-50 border border-slate-300 rounded-xl text-xs focus:outline-none focus:border-cyan-500 font-semibold"
                />
                <button
                  type="button"
                  onClick={() => removeStat(idx)}
                  className="p-2 text-slate-400 hover:text-red-600 rounded-xl hover:bg-red-50 cursor-pointer"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-between pt-4 border-t border-slate-100">
          <button
            type="button"
            onClick={() => setForm({ ...heroContent })}
            className="px-3.5 py-2 text-xs text-slate-600 hover:text-slate-900 font-semibold flex items-center space-x-1 cursor-pointer"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Reset to Saved</span>
          </button>
          <button
            type="submit"
            className="px-6 py-2.5 bg-gradient-to-r from-cyan-600 to-sky-600 hover:from-cyan-700 hover:to-sky-700 text-white font-bold text-xs rounded-xl flex items-center space-x-1.5 cursor-pointer shadow-md shadow-cyan-200 transition-all"
          >
            <Save className="w-3.5 h-3.5" />
            <span>{saved ? 'Saved Successfully' : 'Save Hero Showcase'}</span>
          </button>
        </div>
      </form>
    </div>
  );
};

export default AdminHeroSection;
