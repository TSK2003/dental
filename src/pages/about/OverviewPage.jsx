import React from 'react';
import PageHero from '../../components/common/PageHero';
import { ShieldCheck, Sparkles, Award, CheckCircle2, Cpu, Smile } from 'lucide-react';
import { useAdmin } from '../../context/AdminContext';

const OverviewPage = () => {
  const adminContext = useAdmin();
  const hospitalInfo = adminContext?.hospitalInfo || {
    name: 'DentaCare',
    fullName: 'DentaCare Specialists Hospital & Center for Advanced Implantology'
  };

  return (
    <div className="bg-slate-50 text-slate-800 antialiased space-y-12 pb-16">
      <PageHero
        title="Hospital Overview & Heritage"
        subtitle="Discover how DentaCare is setting new clinical benchmarks in 3D Guided Dental Implants, Invisalign®, Micro-Endodontics, and 24/7 Dental Emergency Care."
        breadcrumb={[{ label: 'About', path: '/about' }, { label: 'Overview' }]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-sm space-y-6">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 bg-cyan-50 text-cyan-700 border border-cyan-200 rounded-full text-xs font-bold uppercase">
            <Smile className="w-3.5 h-3.5 text-cyan-600" />
            <span>Hospital Profile</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-black text-slate-950 font-heading">
            State-of-the-Art Dental Surgical Hospital & Smile Makeover Hub
          </h2>

          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            {hospitalInfo.fullName || 'DentaCare'} is an internationally accredited Center of Excellence in Implantology, Orthodontics, and Aesthetic Dentistry. Pairing board-certified MDS dental surgeons with Planmeca 3D CBCT, Carl Zeiss 25x operating microscopes, iTero 5D scanners, and in-house CEREC 3D robotic milling, we deliver pain-free, predictable dental transformations.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
            <div className="p-6 bg-cyan-50/50 rounded-2xl border border-cyan-100 space-y-2">
              <h3 className="text-sm font-bold text-slate-900 flex items-center space-x-2 font-heading">
                <ShieldCheck className="w-5 h-5 text-cyan-600" />
                <span>3D Guided Computerized Surgery</span>
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Keyhole flapless implant placement using 3D surgical stents designed on digital CBCT scans, eliminating surgical incisions and swelling.
              </p>
            </div>

            <div className="p-6 bg-cyan-50/50 rounded-2xl border border-cyan-100 space-y-2">
              <h3 className="text-sm font-bold text-slate-900 flex items-center space-x-2 font-heading">
                <Sparkles className="w-5 h-5 text-cyan-600" />
                <span>Digital Smile Design & Clear Aligners</span>
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Diamond Elite Invisalign® clear aligner protocols with 3D ClinCheck simulations and ultra-thin E.max porcelain veneers.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OverviewPage;
