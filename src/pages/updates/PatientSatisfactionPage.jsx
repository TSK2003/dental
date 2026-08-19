import React from 'react';
import PageHero from '../../components/common/PageHero';
import { Star, Smile, ShieldCheck, Award, Sparkles } from 'lucide-react';

const PatientSatisfactionPage = () => {
  return (
    <div className="min-h-screen bg-slate-50 pb-16 space-y-10">
      <PageHero
        title="Clinical Success Rates & Patient Satisfaction Metrics"
        subtitle="Objective implant osseointegration rates, microscopic root canal success, and patient happiness ratings across 25,000+ completed treatments."
        breadcrumb={[{ label: 'Clinical Efficacy & Reviews' }]}
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm">
            <p className="text-3xl font-black text-cyan-600 font-heading">99.4%</p>
            <p className="text-xs font-bold text-slate-800 mt-1">Implant Success Rate</p>
            <span className="text-[10px] text-slate-400">10-Year Clinical Follow-Up</span>
          </div>
          <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm">
            <p className="text-3xl font-black text-emerald-700 font-heading">98.9%</p>
            <p className="text-xs font-bold text-slate-800 mt-1">Root Canal Preservation</p>
            <span className="text-[10px] text-slate-400">Carl Zeiss 25x Micro-Endo</span>
          </div>
          <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm">
            <p className="text-3xl font-black text-cyan-600 font-heading">25,000+</p>
            <p className="text-xs font-bold text-slate-800 mt-1">Happy Patient Smiles</p>
            <span className="text-[10px] text-slate-400">Comprehensive Dental Care</span>
          </div>
          <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm">
            <p className="text-3xl font-black text-amber-500 font-heading">4.9 / 5</p>
            <p className="text-xs font-bold text-slate-800 mt-1">Verified Patient Reviews</p>
            <span className="text-[10px] text-slate-400">Over 4,200+ Reviews</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatientSatisfactionPage;
