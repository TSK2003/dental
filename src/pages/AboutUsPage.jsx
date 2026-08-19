import React from 'react';
import { Link } from 'react-router-dom';
import PageHero from '../components/common/PageHero';
import { useAdmin } from '../context/AdminContext';
import { 
  ShieldCheck, 
  Award, 
  Sparkles, 
  Users, 
  Building2, 
  CheckCircle2,
  Calendar,
  ArrowRight,
  Heart,
  Zap,
  Cpu,
  Smile
} from 'lucide-react';

const AboutUsPage = ({ onOpenAppointment }) => {
  const adminContext = useAdmin();
  const hospitalInfo = adminContext?.hospitalInfo || {
    name: 'DentaCare',
    fullName: 'DentaCare Specialists Hospital & Center for Advanced Implantology'
  };

  return (
    <div className="bg-slate-50 text-slate-800 antialiased space-y-16 pb-20">
      
      <PageHero
        title={`About ${hospitalInfo.fullName || 'DentaCare Specialists Hospital'}`}
        subtitle="Premier Center of Excellence in 3D Guided Dental Implants, Invisalign® Clear Aligners, Carl Zeiss Micro-Endodontics, and 24/7 Emergency Dental Care."
        breadcrumb={[{ label: 'About Hospital' }]}
      />

      {/* 1. INSTITUTIONAL LEGACY & HERO NARRATIVE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl border border-cyan-100 shadow-md p-8 sm:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Visual */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-3xl overflow-hidden shadow-xl border-2 border-cyan-50 bg-slate-950">
                <img
                  src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1200&q=85"
                  alt="DentaCare Specialists Advanced Operatory"
                  className="w-full h-[420px] object-cover"
                />
              </div>

              {/* Stat Badge */}
              <div className="absolute -bottom-5 right-4 bg-slate-950 text-white p-5 rounded-2xl shadow-2xl border border-cyan-900/50 space-y-1">
                <div className="font-heading text-2xl font-extrabold text-cyan-400">20+ Years</div>
                <div className="text-[11px] text-slate-300">Of Implant & Smile Rehabilitation Excellence</div>
              </div>
            </div>

            {/* Right Narrative */}
            <div className="lg:col-span-7 space-y-5 text-slate-700">
              <div className="inline-flex items-center space-x-2 px-3.5 py-1 bg-cyan-50 text-cyan-700 border border-cyan-200 rounded-full text-xs font-bold uppercase tracking-wider">
                <Smile className="w-3.5 h-3.5 text-cyan-600" />
                <span>Center of Dental Excellence</span>
              </div>

              <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-slate-950 leading-tight">
                Crafting Healthy, Confident Smiles with 3D Precision & Compassion
              </h2>

              <p className="text-xs sm:text-sm leading-relaxed text-slate-600 font-normal">
                {hospitalInfo.fullName || 'DentaCare Specialists Hospital & Center for Advanced Implantology'} was established to bring world-class digital dentistry, Swiss titanium implants, 25x Carl Zeiss microscopic root canals, and Diamond Invisalign clear aligners together in a state-of-the-art sterile hospital setting.
              </p>

              <p className="text-xs sm:text-sm leading-relaxed text-slate-600 font-normal">
                Our clinical team consists of MDS-qualified Implantologists, Orthodontists, Endodontists, Periodontists, and Maxillofacial Surgeons with international fellowships from the USA, UK, and Europe, dedicated to painless tooth preservation and full-mouth bite reconstruction.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-2">
                <div className="p-4 bg-cyan-50/50 rounded-2xl border border-cyan-100">
                  <div className="font-heading text-xl font-extrabold text-cyan-600">25,000+</div>
                  <div className="text-[11px] text-slate-600 font-medium">Happy Patient Smiles</div>
                </div>
                <div className="p-4 bg-cyan-50/50 rounded-2xl border border-cyan-100">
                  <div className="font-heading text-xl font-extrabold text-cyan-600">10,000+</div>
                  <div className="text-[11px] text-slate-600 font-medium">Implants Placed</div>
                </div>
                <div className="p-4 bg-cyan-50/50 rounded-2xl border border-cyan-100">
                  <div className="font-heading text-xl font-extrabold text-emerald-700">99.4%</div>
                  <div className="text-[11px] text-slate-600 font-medium">Implant Success Rate</div>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={onOpenAppointment}
                  className="px-7 py-3.5 bg-gradient-to-r from-cyan-600 to-sky-600 hover:from-cyan-700 hover:to-sky-700 text-white font-bold text-xs rounded-xl transition-all shadow-md shadow-cyan-200 flex items-center space-x-2 cursor-pointer"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book Consultation with Chief Dental Surgeon</span>
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. CORE PILLARS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-cyan-50 text-cyan-600 flex items-center justify-center">
              <Cpu className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 font-heading">Planmeca 3D CBCT Imaging</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Ultra Low Dose™ Cone Beam CT captures sub-millimeter 75 µm bone and nerve slices for flapless 3D computer-guided implant surgery.
            </p>
          </div>

          <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-sky-50 text-sky-600 flex items-center justify-center">
              <Sparkles className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 font-heading">Carl Zeiss 25x Micro-Endodontics</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Surgical operating microscopes reveal intricate root canal anatomy, guaranteeing 100% painless single-sitting tooth preservation.
            </p>
          </div>

          <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-700 flex items-center justify-center">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 font-heading">Class B Hospital Sterilization</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Strict European EN 13060 7-step infection control protocol with biological spore testing ensuring 100% sterile safety.
            </p>
          </div>
        </div>
      </section>

    </div>
  );
};

export default AboutUsPage;
