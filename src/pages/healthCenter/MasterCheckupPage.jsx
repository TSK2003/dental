import React from 'react';
import PageHero from '../../components/common/PageHero';
import { healthCheckupPackages as defaultHealthPackages } from '../../data/healthCenterData';
import { CheckCircle, Sparkles, Calendar, ArrowRight, ShieldCheck, Smile } from 'lucide-react';

const MasterCheckupPage = ({ onOpenAppointment }) => {
  return (
    <div className="min-h-screen bg-slate-50 pb-16 space-y-10">
      <PageHero
        title="Comprehensive Dental Health & Smile Assessment Packages"
        subtitle="Full mouth digital intraoral scans, ultrasonic scaling & stain removal, 3D CBCT implant assessments, and pediatric cavity-free plans."
        breadcrumb={[{ label: 'Smile Packages' }]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {defaultHealthPackages.map((pkg) => (
            <div key={pkg.id} className="bg-white rounded-3xl p-6 shadow-sm border border-slate-200 flex flex-col justify-between hover:shadow-xl hover:border-cyan-300 transition-all">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-0.5 bg-cyan-50 text-cyan-800 rounded-md text-[10px] font-bold uppercase tracking-wider">
                    {pkg.badge}
                  </span>
                  <span className="text-[10px] text-slate-400 font-semibold">{pkg.tests.length} Steps</span>
                </div>

                <div>
                  <h3 className="text-base font-bold text-slate-950 font-heading leading-snug">{pkg.title}</h3>
                  <div className="flex items-baseline space-x-2 mt-2">
                    <span className="text-2xl font-black text-cyan-600 font-mono">{pkg.price}</span>
                    <span className="text-xs text-slate-400 line-through font-mono">{pkg.originalPrice}</span>
                  </div>
                </div>

                <p className="text-xs text-slate-500 leading-relaxed">{pkg.description}</p>

                <div className="space-y-2 pt-2 border-t border-slate-100">
                  <span className="text-[11px] font-bold text-slate-700 block">Included Clinical Steps:</span>
                  <ul className="space-y-1.5 text-xs text-slate-600">
                    {pkg.tests.map((test, idx) => (
                      <li key={idx} className="flex items-start space-x-2">
                        <CheckCircle className="w-3.5 h-3.5 text-cyan-600 shrink-0 mt-0.5" />
                        <span className="leading-snug">{test}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-6 border-t border-slate-100 mt-6">
                <button
                  onClick={() => onOpenAppointment && onOpenAppointment({ department: pkg.title })}
                  className="w-full py-3 bg-gradient-to-r from-cyan-600 to-sky-600 hover:from-cyan-700 hover:to-sky-700 text-white font-bold text-xs rounded-xl shadow-md shadow-cyan-200 flex items-center justify-center space-x-2 cursor-pointer transition-all"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book Smile Package</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MasterCheckupPage;
