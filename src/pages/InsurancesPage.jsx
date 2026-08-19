import React from 'react';
import PageHero from '../components/common/PageHero';
import { insuranceProviders, insuranceSteps } from '../data/insuranceData';
import { ShieldCheck, CheckCircle2, Building2, HelpCircle, Sparkles, Smile } from 'lucide-react';

const corporatePartners = [
  "Bajaj Finserv No-Cost 0% Interest Dental EMI Desk",
  "LiquiLoans Instant Paperless Smile Financing",
  "Star Health Maxillofacial Surgery & Trauma Cashless Desk",
  "ManipalCigna Outpatient Dental OPD & Root Canal Approvals",
  "HDFC ERGO Cashless Inpatient & Daycare Dental Surgery",
  "Medi Assist & Vidal Health Corporate Employee Dental Wellness"
];

const InsurancesPage = ({ onOpenEnquiry }) => {
  return (
    <div className="min-h-screen bg-slate-50 pb-16 space-y-12">
      <PageHero
        title="Dental Insurance, 0% EMI Financing & Cashless Desk"
        subtitle="Flexible zero-interest payment plans for Dental Implants, Invisalign, Smile Makeovers, and cashless TPA insurance approvals."
        breadcrumb={[{ label: 'Financing & Insurance' }]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Insurance Providers Grid */}
        <div className="space-y-6">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="px-3 py-1 bg-cyan-50 text-cyan-700 rounded-full text-xs font-bold uppercase tracking-wider border border-cyan-200">
              0% Interest EMI & Cashless TPA Desk
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950 font-heading">Dental Financing & Insurance Network</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {insuranceProviders.map((item) => (
              <div key={item.id} className="bg-white rounded-3xl p-6 shadow-sm border border-slate-200 flex flex-col justify-between hover:shadow-xl hover:border-cyan-300 transition-all">
                <div className="space-y-3">
                  <span className="text-[10px] font-bold text-cyan-700 uppercase tracking-wider bg-cyan-50 px-2.5 py-0.5 rounded-md block w-fit">{item.type}</span>
                  <h3 className="text-base font-bold text-slate-950 font-heading">{item.name}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">{item.coverage}</p>
                </div>

                <div className="pt-4 border-t border-slate-100 mt-4 flex items-center justify-between">
                  <span className="text-[11px] font-bold text-emerald-700 flex items-center space-x-1">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Instant Pre-Approval</span>
                  </span>
                  <button
                    onClick={onOpenEnquiry}
                    className="text-xs font-bold text-cyan-600 hover:text-cyan-700 cursor-pointer"
                  >
                    Check 0% EMI
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 4-Step Cashless Process */}
        <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm space-y-6">
          <h3 className="text-lg font-bold text-slate-950 flex items-center space-x-2 font-heading">
            <Smile className="w-5 h-5 text-cyan-600" />
            <span>4-Step Cashless & EMI Pre-Authorization Workflow</span>
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {insuranceSteps.map((stp, idx) => (
              <div key={idx} className="p-4 bg-slate-50 rounded-2xl border border-slate-200 space-y-2">
                <span className="text-xs font-black text-cyan-600 bg-cyan-100 px-2 py-0.5 rounded-md font-mono">{stp.step}</span>
                <h4 className="text-xs font-bold text-slate-900 font-heading">{stp.title}</h4>
                <p className="text-[11px] text-slate-600 leading-relaxed">{stp.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Corporate Partnerships */}
        <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm space-y-6">
          <h3 className="text-lg font-bold text-slate-950 flex items-center space-x-2 font-heading">
            <Building2 className="w-5 h-5 text-cyan-600" />
            <span>Corporate Dental Benefits & TPA Partnerships</span>
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {corporatePartners.map((corp, idx) => (
              <div key={idx} className="p-4 bg-slate-50 rounded-2xl border border-slate-200 flex items-center space-x-3 text-xs font-semibold text-slate-800">
                <CheckCircle2 className="w-4 h-4 text-cyan-600 shrink-0" />
                <span>{corp}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default InsurancesPage;
