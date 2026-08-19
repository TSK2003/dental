import React from 'react';
import PageHero from '../components/common/PageHero';
import { 
  Sparkles, 
  UserCheck, 
  Calendar, 
  PhoneCall, 
  ShieldCheck, 
  Heart,
  Award,
  CheckCircle2,
  Zap,
  Smile
} from 'lucide-react';

const dentalHomeCareServices = [
  {
    id: "home-geriatric-dentistry",
    title: "Geriatric & Bedside Dental Care at Home",
    icon: Heart,
    color: "bg-cyan-600",
    desc: "Specialized mobile dental units for senior citizens, including denture adjustments, ultrasonic tartar scaling, and tooth extraction consultations.",
    features: ["Portable Ultrasonic Dental Scaling", "Complete & Partial Denture Relining", "Oral Mucosa & Infection Examination"]
  },
  {
    id: "home-post-implant-recovery",
    title: "Post-Implant & Surgical Healing Care",
    icon: ShieldCheck,
    color: "bg-sky-600",
    desc: "Trained dental nursing officers visit to inspect soft tissue healing, check suture lines, evaluate PRF clot integration, and adjust temporary prostheses.",
    features: ["Surgical Suture & Clot Inspection", "Antiseptic Chlorhexidine Irrigation", "Post-Op Pain & Medication Profiling"]
  },
  {
    id: "tele-dental-consultation",
    title: "HD Video Tele-Dentistry Consultation",
    icon: UserCheck,
    color: "bg-indigo-600",
    desc: "Consult our senior implantologists or orthodontists from home with high-definition digital photo review, e-prescriptions, and treatment estimates.",
    features: ["HD Intraoral Photo & Video Exam", "Emergency Pain Management Prescriptions", "Invisalign® Virtual Progress Monitoring"]
  },
  {
    id: "home-pediatric-anxiety-prep",
    title: "Special Needs Child Dental Home Visit",
    icon: Smile,
    color: "bg-emerald-600",
    desc: "Gentle pediatric dentists conduct comfortable home visits for anxious children or special needs individuals in their familiar home surroundings.",
    features: ["Anxiety-Free Familiar Home Environment", "Gentle Topical Fluoride Application", "Parental Oral Hygiene Coaching"]
  },
  {
    id: "home-orthodontic-aligner-delivery",
    title: "Invisalign® Aligner Tray Doorstep Delivery",
    icon: Zap,
    color: "bg-cyan-700",
    desc: "Direct doorstep delivery of custom Invisalign aligner batches with digital AI tracking, fit checks, and chewies/retractor accessories.",
    features: ["Direct Batch Aligner Delivery", "Digital Dental Monitoring Sync", "Comfort Accessory Refill Kits"]
  },
  {
    id: "home-emergency-pain-relief",
    title: "Emergency Home Dental Pain Relief Visit",
    icon: Award,
    color: "bg-teal-600",
    desc: "Immediate at-home dental triage for acute severe throbbing toothaches, broken dental restorations, and temporary sedative fillings.",
    features: ["Temporary Sedative Cavity Dressing", "Immediate Pain Block Administration", "Next-Day Priority Operatory Booking"]
  }
];

const HomeCarePage = ({ onOpenAppointment }) => {
  return (
    <div className="min-h-screen bg-slate-50 pb-16 space-y-10">
      <PageHero
        title="DentaCare At-Home Dental Services & Tele-Dentistry"
        subtitle="Bringing clinical-grade geriatric dentistry, post-implant recovery visits, and specialist tele-consultations directly to your doorstep."
        breadcrumb={[{ label: 'Home Care & Tele-Dentistry' }]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {dentalHomeCareServices.map((service) => {
            const IconComp = service.icon;
            return (
              <div
                key={service.id}
                className="bg-white rounded-3xl p-6 shadow-sm border border-slate-200 flex flex-col justify-between hover:shadow-xl hover:border-cyan-300 transition-all"
              >
                <div className="space-y-4">
                  <div className={`w-12 h-12 ${service.color} text-white rounded-2xl flex items-center justify-center shadow-sm`}>
                    <IconComp className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-slate-950 font-heading">{service.title}</h3>
                    <p className="text-xs text-slate-600 leading-relaxed mt-1">{service.desc}</p>
                  </div>

                  <ul className="space-y-1.5 pt-2 border-t border-slate-100 text-xs text-slate-700">
                    {service.features.map((feat, idx) => (
                      <li key={idx} className="flex items-center space-x-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyan-600 shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-5 mt-4 border-t border-slate-100">
                  <button
                    onClick={() => onOpenAppointment && onOpenAppointment({ department: service.title })}
                    className="w-full py-2.5 bg-cyan-50 hover:bg-cyan-600 text-cyan-700 hover:text-white font-bold text-xs rounded-xl transition-all cursor-pointer shadow-2xs"
                  >
                    Request Home Dental Visit
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
};

export default HomeCarePage;
