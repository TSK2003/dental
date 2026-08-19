import React from 'react';
import PageHero from '../../components/common/PageHero';
import { Globe, Award, Calendar, ShieldCheck, PhoneCall, Sparkles, Smile } from 'lucide-react';

const InternationalVisitPage = () => {
  return (
    <div className="min-h-screen bg-slate-50 pb-16 space-y-10">
      <PageHero
        title="International Dental Tourism & Global Patient Concierge"
        subtitle="Welcoming international patients for full-mouth dental implants, same-day ceramic restorations, and digital smile makeovers at transparent global savings."
        breadcrumb={[{ label: 'International Patients' }]}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-sm space-y-6">
          <div className="flex items-center space-x-3 text-cyan-700">
            <Globe className="w-10 h-10 text-cyan-600 shrink-0" />
            <div>
              <h2 className="text-xl font-bold text-slate-950 font-heading">Global Dental Concierge Desk</h2>
              <p className="text-xs text-slate-500">World-class Swiss Nobel Biocare® implants and porcelain smile makeovers at 70% cost savings compared to the US, UK, and Australia.</p>
            </div>
          </div>

          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            DentaCare regularly hosts patients from the USA, UK, Canada, Australia, UAE, Singapore, and Europe. Our digital workflow — featuring 3D CBCT imaging, computer-guided implant planning, and in-house CAD/CAM ceramic milling — allows full mouth smile rehabilitation to be completed within 3 to 7 days.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 text-xs text-slate-700">
            <div className="p-4 bg-cyan-50/40 rounded-2xl border border-cyan-100 space-y-1">
              <span className="font-bold text-slate-900 block">✈️ VIP Airport Chauffeur & Medical Visa</span>
              <p className="text-slate-500 text-[11px]">Direct medical visa invitation letters and luxury airport chauffeur transfers from Madurai (IXM) & Trivandrum (TRV) international airports.</p>
            </div>
            <div className="p-4 bg-cyan-50/40 rounded-2xl border border-cyan-100 space-y-1">
              <span className="font-bold text-slate-900 block">🏨 5-Star Partner Stay & Swift Turnaround</span>
              <p className="text-slate-500 text-[11px]">Seamless partner hotel stays with same-day CAD/CAM ceramic milling ensuring complete fixed teeth before your return flight.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InternationalVisitPage;
