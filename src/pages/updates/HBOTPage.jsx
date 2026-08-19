import React from 'react';
import PageHero from '../../components/common/PageHero';
import { Sparkles, ShieldCheck, Zap, Calendar, Smile } from 'lucide-react';

const HBOTPage = ({ onOpenAppointment }) => {
  return (
    <div className="min-h-screen bg-slate-50 pb-16 space-y-10">
      <PageHero
        title="Hyperbaric Bio-Oxygen & PRF Bone Regeneration Suite"
        subtitle="Accelerating Post-Implant Bone Osseointegration, Soft Tissue Healing, and Sinus Lift Graft Vascularization."
        breadcrumb={[{ label: 'Bio-Oxygen & PRF Healing' }]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-4">
            <span className="px-3 py-1 bg-cyan-50 text-cyan-700 rounded-full text-xs font-bold uppercase tracking-wider border border-cyan-200">
              Advanced Regenerative Implantology
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-950 font-heading">Autologous Platelet-Rich Fibrin (PRF) & 100% Medical Oxygen Therapy</h2>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
              At DentaCare, we utilize autologous L-PRF (Leukocyte and Platelet-Rich Fibrin) derived from the patient's own blood combined with mild hyperbaric oxygenation. This saturates surgical bone graft sites with natural growth factors (VEGF, TGF-beta), ensuring 3x faster bone integration, zero infection risk, and minimal post-surgical swelling.
            </p>

            <div className="pt-2">
              <button
                onClick={onOpenAppointment}
                className="px-6 py-3.5 bg-gradient-to-r from-cyan-600 to-sky-600 hover:from-cyan-700 hover:to-sky-700 text-white font-bold text-xs rounded-xl shadow-md shadow-cyan-200 transition-all flex items-center space-x-2 cursor-pointer"
              >
                <Calendar className="w-4 h-4" />
                <span>Book Implant Healing Consultation</span>
              </button>
            </div>
          </div>

          <div className="lg:col-span-5">
            <img
              src="https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=800&q=80"
              alt="Bio-Oxygen & PRF Dental Suite"
              className="w-full h-72 object-cover rounded-3xl shadow-sm"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HBOTPage;
