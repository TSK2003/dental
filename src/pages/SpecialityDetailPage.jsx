import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import PageHero from '../components/common/PageHero';
import { departmentsList } from '../data/departmentsData';
import { 
  CheckCircle, 
  Award, 
  Zap, 
  Sparkles, 
  HelpCircle, 
  ChevronDown, 
  Calendar, 
  PhoneCall,
  UserCheck,
  ShieldCheck,
  Smile
} from 'lucide-react';

const SpecialityDetailPage = ({ onOpenAppointment }) => {
  const { slug } = useParams();

  const dept = departmentsList.find(d => d.slug === slug || d.id === slug) || departmentsList[0];

  return (
    <div className="min-h-screen bg-slate-50 pb-16">
      
      {/* Hero Banner */}
      <PageHero
        title={`Department of ${dept.name}`}
        subtitle={dept.tagline}
        breadcrumb={[
          { label: 'Specialties & 3D Dentistry', path: '/services/dental-implants-restoration' },
          { label: dept.name }
        ]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Main Content (Left 8 cols) */}
          <div className="lg:col-span-8 space-y-10">
            
            {/* Overview & Description */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-slate-200 space-y-4">
              <span className="px-3 py-1 bg-cyan-100 text-cyan-800 rounded-full text-xs font-bold uppercase tracking-wider">
                Clinical Overview
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 font-heading">
                Advanced Dental Care in {dept.name}
              </h2>
              <p className="text-slate-600 text-sm leading-relaxed">
                {dept.description}
              </p>

              {/* Department Stats */}
              {dept.stats && (
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-3">
                  {dept.stats.map((st, idx) => (
                    <div key={idx} className="p-3 bg-cyan-50/60 rounded-2xl border border-cyan-100 text-center">
                      <span className="text-lg font-black text-cyan-700 font-heading block">{st.number}</span>
                      <span className="text-[11px] text-slate-600 font-semibold">{st.label}</span>
                    </div>
                  ))}
                </div>
              )}

              <div className="pt-4 flex flex-wrap gap-4">
                <button
                  onClick={() => onOpenAppointment && onOpenAppointment({ department: dept.name, doctorName: dept.headOfDepartment })}
                  className="px-6 py-3.5 bg-gradient-to-r from-cyan-600 to-sky-600 hover:from-cyan-700 hover:to-sky-700 text-white font-bold text-xs rounded-xl shadow-md shadow-cyan-200 flex items-center space-x-2 transition-all cursor-pointer"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book Consultation with {dept.headOfDepartment.split(',')[0]}</span>
                </button>
              </div>
            </div>

            {/* Key Treatments */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-slate-200 space-y-6">
              <h3 className="text-xl font-bold text-slate-900 font-heading">
                Key Specialized Procedures & Surgeries
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {(dept.procedures || []).map((t, idx) => (
                  <div key={idx} className="flex items-start space-x-2.5 p-3 rounded-2xl bg-slate-50 border border-slate-100 text-xs text-slate-700">
                    <CheckCircle className="w-4 h-4 text-cyan-600 shrink-0 mt-0.5" />
                    <span className="font-semibold">{t}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Specialized Technologies */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-slate-200 space-y-6">
              <h3 className="text-xl font-bold text-slate-900 font-heading">
                Specialized 3D & Laser Infrastructure
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {(dept.technologies || []).map((f, idx) => (
                  <div key={idx} className="flex items-start space-x-2.5 p-3 rounded-2xl bg-cyan-50/50 border border-cyan-100 text-xs text-cyan-900">
                    <ShieldCheck className="w-4 h-4 text-cyan-600 shrink-0 mt-0.5" />
                    <span className="font-medium">{f}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right Sidebar (4 cols) */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Department Head Card */}
            <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-200 space-y-4">
              <span className="text-[10px] font-bold text-cyan-700 uppercase tracking-wider bg-cyan-50 px-2.5 py-1 rounded-md">
                Head of Department
              </span>
              <div>
                <h4 className="text-sm font-bold text-slate-900">{dept.headOfDepartment}</h4>
                <p className="text-[11px] text-cyan-700 font-semibold">{dept.name}</p>
              </div>

              <button
                onClick={() => onOpenAppointment && onOpenAppointment({ doctorName: dept.headOfDepartment, department: dept.name })}
                className="w-full py-3 bg-cyan-600 hover:bg-cyan-700 text-white font-bold text-xs rounded-xl shadow-sm transition-all cursor-pointer"
              >
                Book Department Slot
              </button>
            </div>

            {/* Quick Helpline */}
            <div className="bg-slate-950 text-white rounded-3xl p-6 space-y-3 border border-slate-800">
              <span className="text-[10px] font-bold text-cyan-400 uppercase tracking-wider block">
                24/7 Dental Helpline
              </span>
              <h4 className="text-base font-bold font-heading">Need Quick Treatment Guidance?</h4>
              <p className="text-xs text-slate-300">
                Our dental care coordinators are available 24/7 to answer procedure queries and provide treatment cost estimates.
              </p>
              <a
                href="tel:1800-419-6784"
                className="w-full py-3 bg-cyan-600 hover:bg-cyan-500 text-white font-extrabold text-xs rounded-xl flex items-center justify-center space-x-2 transition-colors block text-center"
              >
                <PhoneCall className="w-4 h-4" />
                <span>Call 1800-419-6784</span>
              </a>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
};

export default SpecialityDetailPage;
