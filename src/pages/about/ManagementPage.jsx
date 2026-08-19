import React from 'react';
import PageHero from '../../components/common/PageHero';
import { Award, ShieldCheck, UserCheck, Sparkles, Smile } from 'lucide-react';

const ManagementPage = () => {
  return (
    <div className="bg-slate-50 text-slate-800 antialiased space-y-12 pb-16">
      <PageHero
        title="Clinical Leadership & Medical Board"
        subtitle="Meet the distinguished implantologists, maxillofacial surgeons, and prosthodontic directors guiding DentaCare."
        breadcrumb={[{ label: 'About', path: '/about' }, { label: 'Leadership' }]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6">
            <img
              src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=400&q=80"
              alt="Dr. Arthur Vance"
              className="w-32 h-32 rounded-2xl object-cover border-2 border-cyan-500 shrink-0"
            />
            <div className="space-y-1 text-center sm:text-left">
              <span className="text-[10px] font-bold text-cyan-700 uppercase bg-cyan-50 px-2.5 py-0.5 rounded-md">Chief Dental Surgeon & Clinical Director</span>
              <h3 className="text-base font-bold text-slate-950 font-heading">Dr. Arthur Vance, MDS, FICOI (USA)</h3>
              <p className="text-xs text-slate-500">20+ Years Experience • Diplomate ICOI (USA)</p>
              <p className="text-xs text-slate-600 leading-relaxed pt-1">
                Overseeing 3D guided implantology standards, All-on-4 surgical protocols, and in-house CAD/CAM ceramic milling robotics.
              </p>
            </div>
          </div>

          <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6">
            <img
              src="https://images.unsplash.com/photo-1594824813566-88855ce783d1?auto=format&fit=crop&w=400&q=80"
              alt="Dr. Elena Rostova"
              className="w-32 h-32 rounded-2xl object-cover border-2 border-cyan-500 shrink-0"
            />
            <div className="space-y-1 text-center sm:text-left">
              <span className="text-[10px] font-bold text-cyan-700 uppercase bg-cyan-50 px-2.5 py-0.5 rounded-md">Director of Orthodontics & Clear Aligners</span>
              <h3 className="text-base font-bold text-slate-950 font-heading">Dr. Elena Rostova, MDS, MOrth RCS</h3>
              <p className="text-xs text-slate-500">16+ Years Experience • Royal College of Surgeons (Edinburgh)</p>
              <p className="text-xs text-slate-600 leading-relaxed pt-1">
                Directing Diamond Elite Invisalign® clear aligner planning, 3D ClinCheck computer simulations, and pediatric bite guidance.
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ManagementPage;
