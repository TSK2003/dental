import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  Calendar, 
  CheckCircle2, 
  UserCheck, 
  ShieldCheck, 
  Sparkles,
  Award,
  Clock,
  ArrowRight,
  Smile
} from 'lucide-react';
import { servicesList as defaultServices } from '../data/servicesData';
import { useAdmin } from '../context/AdminContext';
import PageHero from '../components/common/PageHero';

const ServiceDetailPage = ({ onOpenAppointment }) => {
  const { slug } = useParams();
  const adminContext = useAdmin();
  const servicesList = adminContext?.services || defaultServices;
  const hospitalInfo = adminContext?.hospitalInfo || { fullName: 'DentaCare Specialists Hospital & Center for Advanced Implantology' };

  const service = servicesList.find((s) => s.slug === slug) || servicesList[0];

  return (
    <div className="bg-slate-50 min-h-screen pb-16 space-y-10">
      
      <PageHero
        title={service.title}
        subtitle={service.shortDesc}
        breadcrumb={[
          { label: 'Treatments & Specialities', path: '/services/dental-implants-restoration' },
          { label: service.title }
        ]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* TOP OVERVIEW & IMAGE */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* About The Procedure (7 cols) */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-md space-y-4">
            <div className="flex items-center space-x-2 text-cyan-600 font-bold text-xs uppercase tracking-wider">
              <Smile className="w-4 h-4 text-cyan-600" />
              <span>Dental Clinical Scope & Precision Care</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-extrabold text-slate-950 font-heading">
              Overview: {service.title}
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
              {service.about}
            </p>
            
            <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
              <button
                onClick={() => onOpenAppointment && onOpenAppointment({ department: service.title })}
                className="px-6 py-3.5 bg-gradient-to-r from-cyan-600 to-sky-600 hover:from-cyan-700 hover:to-sky-700 text-white font-bold text-xs rounded-xl shadow-md shadow-cyan-200 transition-all flex items-center space-x-2 cursor-pointer"
              >
                <Calendar className="w-4 h-4" />
                <span>Book Consultation for {service.title}</span>
              </button>
            </div>
          </div>

          {/* Department Hero Image (5 cols) */}
          <div className="lg:col-span-5 bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-md">
            <img
              src={service.heroImage}
              alt={service.title}
              className="w-full h-64 sm:h-72 object-cover"
            />
            <div className="p-4 bg-cyan-50/50 border-t border-cyan-100 flex items-center space-x-3">
              <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0" />
              <div>
                <p className="text-xs font-bold text-slate-900">Hospital-Grade Class B Sterilization Standards</p>
                <p className="text-[11px] text-slate-500">Painless Protocols Performed by Board-Certified MDS Specialists</p>
              </div>
            </div>
          </div>

        </div>

        {/* TREATMENTS & BENEFITS */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Treatments / Clinical Steps */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-md space-y-4">
            <h3 className="text-base font-bold text-slate-950 border-b border-slate-100 pb-3 flex items-center space-x-2 font-heading">
              <CheckCircle2 className="w-4 h-4 text-cyan-600" />
              <span>Specialized Clinical Steps & Options</span>
            </h3>
            <ul className="space-y-3">
              {(service.treatments || []).map((treatment, idx) => (
                <li key={idx} className="flex items-start space-x-3 text-xs text-slate-700">
                  <span className="w-5 h-5 bg-cyan-50 text-cyan-800 rounded-md flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5 border border-cyan-100">
                    {idx + 1}
                  </span>
                  <span className="leading-relaxed font-medium">{treatment}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Clinical Benefits */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-md space-y-4">
            <h3 className="text-base font-bold text-slate-950 border-b border-slate-100 pb-3 flex items-center space-x-2 font-heading">
              <Award className="w-4 h-4 text-cyan-600" />
              <span>Key Patient Benefits & Long-Term Outcomes</span>
            </h3>
            <ul className="space-y-3">
              {(service.benefits || []).map((benefit, idx) => (
                <li key={idx} className="flex items-start space-x-3 text-xs text-slate-700 bg-cyan-50/30 p-2.5 rounded-xl border border-cyan-100">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span className="leading-relaxed font-medium">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* SPECIALIST DOCTORS FOR THIS PROCEDURE */}
        {service.doctors && service.doctors.length > 0 && (
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-md space-y-6">
            <h3 className="text-lg font-bold text-slate-950 font-heading border-b border-slate-100 pb-3">
              Consulting Dental Specialists & Surgeons
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {service.doctors.map((doc, idx) => (
                <div key={idx} className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex items-start space-x-3.5">
                  <div className="w-10 h-10 rounded-full bg-cyan-100 text-cyan-600 flex items-center justify-center font-bold text-xs shrink-0">
                    <UserCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-900">{doc.name}</h4>
                    <p className="text-[11px] text-cyan-600 font-semibold">{doc.role}</p>
                    <p className="text-[10px] text-slate-500">{doc.qualification}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* FAQS */}
        {service.faqs && service.faqs.length > 0 && (
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-md space-y-4">
            <h3 className="text-lg font-bold text-slate-950 font-heading border-b border-slate-100 pb-3">
              Frequently Asked Questions About {service.title}
            </h3>
            <div className="space-y-3">
              {service.faqs.map((faq, idx) => (
                <div key={idx} className="p-4 bg-slate-50 rounded-2xl border border-slate-200 space-y-1.5">
                  <p className="text-xs font-bold text-slate-900 flex items-center space-x-1.5">
                    <span className="text-cyan-600 font-extrabold">Q:</span>
                    <span>{faq.question}</span>
                  </p>
                  <p className="text-xs text-slate-600 leading-relaxed pl-4">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
};

export default ServiceDetailPage;
