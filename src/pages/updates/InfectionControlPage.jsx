import React from 'react';
import PageHero from '../../components/common/PageHero';
import { ShieldCheck, CheckCircle2, Smile } from 'lucide-react';

const InfectionControlPage = () => {
  return (
    <div className="min-h-screen bg-slate-50 pb-16 space-y-10">
      <PageHero
        title="European EN 13060 Class B Hospital Sterilization Protocols"
        subtitle="7-Step Infection Control, Vacuum Autoclaving, Biological Spore Testing, and 100% Sterile Operatories."
        breadcrumb={[{ label: 'Sterilization & Safety' }]}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-sm space-y-6">
          <div className="flex items-center space-x-3 text-cyan-700">
            <ShieldCheck className="w-10 h-10 text-cyan-600 shrink-0" />
            <div>
              <h2 className="text-xl font-bold text-slate-950 font-heading">100% Sterile Hospital-Grade Dental Standards</h2>
              <p className="text-xs text-slate-500">Exceeding European EN 13060 and CDC guidelines to eliminate cross-contamination across all dental operatories.</p>
            </div>
          </div>

          <div className="space-y-3 pt-4 border-t border-slate-100 text-xs text-slate-700">
            {[
              'European Class B Fractional Vacuum Autoclaving delivering 134°C steam penetration to hollow dental handpieces and surgical burs.',
              'Weekly biological spore strip testing (Geobacillus stearothermophilus) with certified laboratory verification.',
              'Individual color-coded chemical indicator pouches sealed and freshly opened in front of the patient.',
              'Self-contained operatory waterline disinfection using continuous silver ion and ozonated water purification.',
              'Atraumatic ultrasonic instrument pre-cleaning in enzymatic bath before thermal automated sealing.',
              'Hospital-grade surface wipe-down with quaternary ammonium virucidal barriers between every patient appointment.'
            ].map((item, idx) => (
              <div key={idx} className="flex items-start space-x-3 p-4 bg-slate-50 rounded-2xl border border-slate-100">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span className="leading-relaxed font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfectionControlPage;
