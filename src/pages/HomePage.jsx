import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Calendar, 
  ChevronRight, 
  Sparkles, 
  ShieldCheck, 
  Clock, 
  PhoneCall, 
  Quote, 
  Star, 
  Cpu, 
  Check, 
  ArrowRight, 
  Zap, 
  Award, 
  Layers, 
  Heart, 
  Smile, 
  CheckCircle2,
  Search,
  BedDouble,
  UserCheck
} from 'lucide-react';

import { servicesList as defaultServices } from '../data/servicesData';
import { branchesList as defaultBranches } from '../data/branchesData';
import { chiefDoctorsList as defaultDoctors } from '../data/doctorsData';
import { technologiesList as defaultTechnologies } from '../data/technologiesData';
import { blogPosts as defaultBlogPosts } from '../data/blogData';
import { healthCheckupPackages as defaultHealthPackages } from '../data/healthCenterData';
import { insuranceProviders as defaultInsurancePartners } from '../data/insuranceData';
import { useAdmin } from '../context/AdminContext';

const clinicalHighlights = [
  { number: '25,000+', label: 'Happy Patient Smiles', subtext: 'Comprehensive Dental Care' },
  { number: '10,000+', label: 'Dental Implants Placed', subtext: '99.4% Osseointegration Rate' },
  { number: '4,500+', label: 'Invisalign® Cases', subtext: 'Diamond Elite Provider' },
  { number: '100%', label: 'Class B Sterile Hospital', subtext: '7-Step EN 13060 Protocol' },
];

const dentalConcerns = [
  { 
    id: 'toothache', 
    name: 'Severe Toothache & Infection', 
    icon: ShieldCheck, 
    desc: 'Deep dental decay, throbbing night pain, temperature sensitivity, and root abscesses.',
    symptoms: ['Sharp shooting pain when chewing', 'Extreme sensitivity to hot or cold foods', 'Swollen, tender gums near the tooth', 'Darkened or discolored tooth enamel'],
    recommended: 'Microscopic Single-Sitting Root Canal Therapy (Carl Zeiss 25x Magnification)',
    serviceSlug: 'microscopic-root-canal'
  },
  { 
    id: 'missing-teeth', 
    name: 'Missing Teeth & Chewing Issues', 
    icon: Sparkles, 
    desc: 'Single missing tooth, multiple gaps, loose dentures, or failing bridges.',
    symptoms: ['Difficulty chewing solid or crunchy foods', 'Bone loss causing sunken facial appearance', 'Adjacent teeth drifting and tilting into gaps', 'Loose, ill-fitting, painful removable dentures'],
    recommended: 'Swiss Nobel Biocare 3D Guided Dental Implants / All-on-4 Fixed Teeth',
    serviceSlug: 'dental-implants-restoration'
  },
  { 
    id: 'crooked-teeth', 
    name: 'Crooked, Crowded & Spaced Teeth', 
    icon: Zap, 
    desc: 'Overbites, underbites, overlapping front teeth, gaps, and bite misalignments.',
    symptoms: ['Self-consciousness smiling in public', 'Food constantly getting lodged between teeth', 'Difficulty flossing tight overlapping teeth', 'Uneven wear and chipping on front teeth'],
    recommended: 'Invisalign® Clear Aligners & 3D Digital Orthodontics (Zero Metal Wires)',
    serviceSlug: 'invisalign-clear-aligners'
  },
  { 
    id: 'yellow-teeth', 
    name: 'Stained Teeth & Smile Makeover', 
    icon: Smile, 
    desc: 'Deep coffee/tea stains, fluorosis, chipped edges, and worn smile lines.',
    symptoms: ['Yellow, dull, or intrinsically discolored teeth', 'Chipped, cracked, or uneven tooth lengths', 'Gaps between upper front teeth (diastema)', 'Excessive gums showing when smiling (gummy smile)'],
    recommended: 'Philips Zoom! WhiteSpeed Whitening & Ultra-Thin E.max Porcelain Veneers',
    serviceSlug: 'cosmetic-smile-makeover-veneers'
  },
  { 
    id: 'bleeding-gums', 
    name: 'Bleeding Gums & Bad Breath', 
    icon: Heart, 
    desc: 'Gingivitis, chronic periodontitis, receding gums, and persistent bad breath.',
    symptoms: ['Gums bleeding while brushing or flossing', 'Red, swollen, tender, or puffy gum margins', 'Teeth appearing longer due to gum recession', 'Persistent bad taste or bad breath (halitosis)'],
    recommended: 'Waterlase LANAP® Scalpel-Free Laser Gum Therapy & Ultrasonic Scaling',
    serviceSlug: 'laser-periodontics-gum-care'
  },
  { 
    id: 'wisdom-pain', 
    name: 'Wisdom Tooth Pain & Jaw Clicking', 
    icon: Cpu, 
    desc: 'Impacted 3rd molars, pericoronitis infection, TMJ headaches, and jaw clicking.',
    symptoms: ['Severe pain at the back of the jaw', 'Difficulty opening mouth or swallowing', 'Swelling in the cheek and neck area', 'Jaw popping, clicking, and morning tension headaches'],
    recommended: 'Piezosurgical Atraumatic Wisdom Tooth Removal & TMJ Therapy',
    serviceSlug: 'wisdom-tooth-maxillofacial'
  },
];

const patientTransformations = [
  {
    id: 't1',
    name: 'Karthik Narayanan (Age 38)',
    concern: 'Multiple Missing Teeth & Collapsed Bite',
    treatment: 'All-on-4 Upper & Lower Guided Dental Implants',
    result: '100% restored chewing function, permanent fixed zirconia teeth delivered in 48 hours with zero bone graft pain.',
    rating: 5,
    doctor: 'Dr. Arthur Vance, MDS',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 't2',
    name: 'Deepika Sunder (Age 26)',
    concern: 'Severe Crowding & Narrow Smile Arch',
    treatment: 'Invisalign® Comprehensive (9 Months Duration)',
    result: 'Completely straight smile with widened aesthetic dental arch without extracting any natural premolars.',
    rating: 5,
    doctor: 'Dr. Elena Rostova, MDS',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 't3',
    name: 'Anandhi Rajan (Age 31)',
    concern: 'Deep Intrinsic Fluorosis Stains & Chipped Teeth',
    treatment: '8 Custom Ultra-Thin E.max® Porcelain Veneers',
    result: 'Luminous, natural Hollywood smile with permanent porcelain luster and 100% natural enamel preservation.',
    rating: 5,
    doctor: 'Dr. Claire Moreau, MDS',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80'
  }
];

const faqItems = [
  {
    q: 'How does 3D computer-guided dental implant surgery work?',
    a: 'We capture a high-resolution 3D CBCT bone scan and intraoral optical scan. Specialized software plans the exact angle, depth, and diameter of your implant before surgery. A 3D-printed surgical stent then guides the implant into the bone through a keyhole with zero incisions, zero stitches, and minimal recovery time.'
  },
  {
    q: 'Can a root canal really be completed in one single painless sitting?',
    a: 'Yes! Using our 25x Carl Zeiss dental operating microscopes, rotary nickel-titanium instruments, and 3D warm vertical obturation, over 95% of root canals are completed in a single comfortable 45-minute visit under computerized local anesthesia.'
  },
  {
    q: 'How does Invisalign differ from traditional metal braces?',
    a: 'Invisalign uses transparent, removable SmartTrack aligners that are virtually invisible. You can remove them to eat whatever you like and brush normally. Treatment is often 30-50% faster than metal braces, with no painful poking wires.'
  },
  {
    q: 'Is laser teeth whitening safe for tooth enamel?',
    a: '100% safe. Our Philips Zoom! WhiteSpeed system uses specialized blue LED light and ACP (Amorphous Calcium Phosphate) enamel protectors to safely dissolve deep stains inside enamel micro-pores without stripping or weakening enamel.'
  }
];

const HomePage = ({ onOpenAppointment, onOpenEnquiry }) => {
  const adminContext = useAdmin();
  const hospitalInfo = adminContext?.hospitalInfo || {
    name: 'DentaCare',
    tagline: 'Institute of Advanced Dentistry, Implantology & Smile Aesthetics',
    phone: '+91 98401 23456',
    emergencyNumber: '1800-419-6784'
  };
  const heroContent = adminContext?.heroContent || {
    badge: 'Center of Excellence in Advanced Dental Implants & Smile Design',
    heading: 'Painless 3D Guided Dental Implants, Invisalign & Celebrity Smile Aesthetics',
    description: 'Swiss Nobel Biocare® dental implants with lifetime warranty, 25x Carl Zeiss microscopic root canal preservation, same-day CAD/CAM ceramic crowns, and board-certified dental specialists.',
    heroImage: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1600&q=85',
    stats: clinicalHighlights,
  };
  const whyChooseUs = adminContext?.whyChooseUs || [];
  const servicesList = adminContext?.services || defaultServices;
  const doctorsList = adminContext?.doctors || defaultDoctors;
  const technologiesList = adminContext?.technologies || defaultTechnologies;
  const blogList = adminContext?.blogPosts || defaultBlogPosts;
  const branchesList = adminContext?.branches || defaultBranches;

  const [selectedConcern, setSelectedConcern] = useState(dentalConcerns[0]);
  const [activeFaq, setActiveFaq] = useState(null);

  // Quick Book state
  const [quickConcern, setQuickConcern] = useState(servicesList[0]?.title || 'Dental Implants & All-on-4 / All-on-6 Restoration');
  const [quickDoctor, setQuickDoctor] = useState(doctorsList[0]?.name || 'Dr. Arthur Vance, MDS, FICOI (USA)');
  const [quickDate, setQuickDate] = useState(new Date(Date.now() + 86400000).toISOString().split('T')[0]);

  const handleQuickBook = (e) => {
    e.preventDefault();
    onOpenAppointment({
      department: quickConcern,
      doctorName: quickDoctor,
      date: quickDate
    });
  };

  return (
    <div className="space-y-16 sm:space-y-24 bg-slate-50 overflow-hidden">
      
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[620px] lg:min-h-[700px] flex items-center bg-gradient-to-br from-slate-950 via-slate-900 to-cyan-950 text-white pt-10 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Glow Spheres */}
        <div className="absolute top-10 right-10 w-96 h-96 bg-cyan-500/15 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-sky-500/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center relative z-10">
          
          {/* Left Column: Heading & Value Proposition */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Top Badge */}
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-bold uppercase tracking-wider backdrop-blur-md">
              <Smile className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
              <span>{heroContent.badge}</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold tracking-tight text-white leading-tight font-heading">
              {heroContent.heading}
            </h1>

            {/* Subtitle */}
            <p className="text-sm sm:text-base text-slate-300 max-w-2xl leading-relaxed font-normal">
              {heroContent.description}
            </p>

            {/* Trust Micro-Badges */}
            <div className="flex flex-wrap items-center gap-3 pt-1 text-xs text-slate-300 font-medium">
              <div className="flex items-center space-x-1.5 bg-white/5 border border-white/10 px-3 py-1.5 rounded-lg">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Swiss Implants Lifetime Warranty</span>
              </div>
              <div className="flex items-center space-x-1.5 bg-white/5 border border-white/10 px-3 py-1.5 rounded-lg">
                <Award className="w-4 h-4 text-cyan-400" />
                <span>Diamond Elite Invisalign® Center</span>
              </div>
              <div className="flex items-center space-x-1.5 bg-white/5 border border-white/10 px-3 py-1.5 rounded-lg">
                <Heart className="w-4 h-4 text-sky-400" />
                <span>100% Painless Micro-Dentistry</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <button
                type="button"
                onClick={() => onOpenAppointment()}
                className="px-6 py-3.5 bg-gradient-to-r from-cyan-600 via-sky-600 to-cyan-700 hover:from-cyan-700 hover:to-sky-700 text-white font-bold text-sm rounded-xl shadow-lg shadow-cyan-900/40 hover:shadow-cyan-700/60 transition-all flex items-center space-x-2 active:scale-95 cursor-pointer"
              >
                <Calendar className="w-4 h-4 text-cyan-200" />
                <span>Book Dental Visit</span>
              </button>

              <button
                type="button"
                onClick={onOpenEnquiry}
                className="px-6 py-3.5 bg-white/10 hover:bg-white/15 border border-white/20 text-white font-bold text-sm rounded-xl transition-all flex items-center space-x-2 active:scale-95 cursor-pointer"
              >
                <span>Get Treatment Estimate</span>
                <ChevronRight className="w-4 h-4 text-slate-300" />
              </button>
            </div>

            {/* Emergency Hotline Alert */}
            <div className="pt-2">
              <a
                href={`tel:${hospitalInfo.emergencyNumber || '1800-419-6784'}`}
                className="inline-flex items-center space-x-2 text-xs font-semibold text-cyan-400 hover:text-cyan-300 transition-colors"
              >
                <PhoneCall className="w-4 h-4 text-cyan-400 animate-pulse" />
                <span>24/7 Dental Emergency & Severe Toothache: {hospitalInfo.emergencyNumber || '1800-419-6784'}</span>
              </a>
            </div>

          </div>

          {/* Right Column: Hero Image & Quick Booking Card */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Visual Hero Card */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-cyan-500/20 bg-slate-900 group">
              <img
                src={heroContent.heroImage || "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1200&q=85"}
                alt="DentaCare Specialists Advanced Dental Operatory"
                className="w-full h-64 sm:h-72 object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent"></div>
              
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs">
                <div className="bg-slate-950/80 backdrop-blur-md px-3 py-1.5 rounded-xl border border-cyan-500/30 flex items-center space-x-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                  <span className="font-bold text-white">12 Operatories Active</span>
                </div>
                <div className="bg-cyan-600/90 text-white font-bold px-3 py-1.5 rounded-xl shadow-sm">
                  Planmeca 3D CBCT Ready
                </div>
              </div>
            </div>

            {/* Quick Instant Booking Bar */}
            <div className="bg-white/95 backdrop-blur-md text-slate-800 p-5 rounded-2xl shadow-xl border border-cyan-100 space-y-3">
              <div className="flex items-center justify-between">
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900 font-heading">
                  Quick Appointment Booking
                </h3>
                <span className="text-[10px] font-bold text-cyan-600 bg-cyan-50 px-2 py-0.5 rounded">
                  Instant Confirmation
                </span>
              </div>

              <form onSubmit={handleQuickBook} className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                <div>
                  <label className="block text-[10px] font-bold text-slate-500 mb-1">Procedure</label>
                  <select
                    value={quickConcern}
                    onChange={(e) => setQuickConcern(e.target.value)}
                    className="w-full text-xs p-2 bg-slate-50 border border-slate-200 rounded-lg text-slate-800 focus:ring-1 focus:ring-cyan-500"
                  >
                    {servicesList.slice(0, 6).map((svc) => (
                      <option key={svc.id} value={svc.title}>{svc.title}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-[10px] font-bold text-slate-500 mb-1">Dentist</label>
                  <select
                    value={quickDoctor}
                    onChange={(e) => setQuickDoctor(e.target.value)}
                    className="w-full text-xs p-2 bg-slate-50 border border-slate-200 rounded-lg text-slate-800 focus:ring-1 focus:ring-cyan-500"
                  >
                    {doctorsList.map((doc) => (
                      <option key={doc.id} value={doc.name}>{doc.name}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-[10px] font-bold text-slate-500 mb-1">Date</label>
                  <input
                    type="date"
                    min={new Date().toISOString().split('T')[0]}
                    value={quickDate}
                    onChange={(e) => setQuickDate(e.target.value)}
                    className="w-full text-xs p-2 bg-slate-50 border border-slate-200 rounded-lg text-slate-800 focus:ring-1 focus:ring-cyan-500"
                  />
                </div>

                <div className="sm:col-span-3 pt-1">
                  <button
                    type="submit"
                    className="w-full py-2.5 bg-cyan-600 hover:bg-cyan-700 text-white font-bold text-xs rounded-xl shadow-md transition-all active:scale-98 cursor-pointer"
                  >
                    Confirm Token & Time Slot
                  </button>
                </div>
              </form>
            </div>

          </div>

        </div>
      </section>

      {/* 2. CLINICAL METRICS & HIGHLIGHTS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 sm:-mt-12 relative z-20">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {clinicalHighlights.map((stat, idx) => (
            <div
              key={idx}
              className="bg-white p-5 rounded-2xl shadow-lg border border-cyan-100 flex flex-col justify-center space-y-1 hover:shadow-xl transition-shadow"
            >
              <span className="text-2xl sm:text-3xl font-black text-cyan-600 font-heading tracking-tight">
                {stat.number}
              </span>
              <p className="text-xs sm:text-sm font-bold text-slate-900">
                {stat.label}
              </p>
              <span className="text-[11px] text-slate-500">
                {stat.subtext}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* 3. COMMON DENTAL CONCERNS INTERACTIVE DIAGNOSTIC GUIDE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-2 mb-10">
          <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-cyan-100 text-cyan-700 text-xs font-bold uppercase tracking-wider">
            <Smile className="w-3.5 h-3.5" />
            <span>Interactive Diagnostic Navigator</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-950 font-heading">
            What Dental Symptom Are You Experiencing?
          </h2>
          <p className="text-xs sm:text-sm text-slate-600">
            Select your symptom or dental concern below to discover recommended specialist interventions and clinical solutions.
          </p>
        </div>

        {/* Concern Selector Pills */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5 mb-8">
          {dentalConcerns.map((concern) => {
            const Icon = concern.icon;
            const isSelected = selectedConcern.id === concern.id;
            return (
              <button
                key={concern.id}
                onClick={() => setSelectedConcern(concern)}
                className={`p-3.5 rounded-2xl flex flex-col items-center text-center space-y-2 transition-all cursor-pointer border ${
                  isSelected
                    ? 'bg-cyan-600 text-white shadow-lg shadow-cyan-200 border-cyan-600 scale-[1.02]'
                    : 'bg-white text-slate-700 hover:bg-cyan-50/70 border-slate-200'
                }`}
              >
                <div className={`p-2 rounded-xl ${isSelected ? 'bg-white/20 text-white' : 'bg-cyan-100 text-cyan-600'}`}>
                  <Icon className="w-5 h-5" />
                </div>
                <span className="text-xs font-bold leading-tight line-clamp-2">
                  {concern.name}
                </span>
              </button>
            );
          })}
        </div>

        {/* Active Concern Deep-Dive Panel */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-xl border border-cyan-100 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center animate-in fade-in duration-300">
          <div className="lg:col-span-7 space-y-4">
            <div className="flex items-center space-x-2">
              <span className="px-3 py-1 rounded-full bg-cyan-100 text-cyan-800 text-[11px] font-extrabold uppercase">
                Clinical Symptom Analysis
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-950 font-heading">
                {selectedConcern.name}
              </h3>
            </div>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              {selectedConcern.desc}
            </p>

            <div className="space-y-2">
              <span className="text-xs font-bold text-slate-900 uppercase tracking-wider block">
                Typical Warning Signs & Symptoms:
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {selectedConcern.symptoms.map((sym, idx) => (
                  <div key={idx} className="flex items-start space-x-2 text-xs text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-cyan-600 shrink-0 mt-0.5" />
                    <span>{sym}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-4 bg-cyan-50/60 rounded-2xl border border-cyan-100 space-y-1">
              <span className="text-[11px] font-bold text-cyan-800 uppercase tracking-wider block">
                Recommended Gold-Standard Protocol:
              </span>
              <p className="text-xs font-bold text-slate-900">
                {selectedConcern.recommended}
              </p>
            </div>
          </div>

          <div className="lg:col-span-5 bg-gradient-to-br from-slate-950 via-slate-900 to-cyan-950 text-white p-6 rounded-2xl space-y-4 shadow-md">
            <h4 className="text-sm font-bold uppercase tracking-wider text-cyan-400 font-heading">
              Preserve Your Natural Smile
            </h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              Early diagnosis stops small cavities and infections from becoming costly tooth loss. Schedule a 3D dental examination today.
            </p>

            <div className="pt-2 space-y-2">
              <Link
                to={`/services/${selectedConcern.serviceSlug}`}
                className="w-full py-2.5 px-4 bg-cyan-600 hover:bg-cyan-700 text-white font-bold text-xs rounded-xl flex items-center justify-center space-x-2 shadow-sm transition-all"
              >
                <span>Read Full Procedure Details</span>
                <ChevronRight className="w-4 h-4" />
              </Link>

              <button
                type="button"
                onClick={() => onOpenAppointment({ department: selectedConcern.recommended })}
                className="w-full py-2.5 px-4 bg-white/10 hover:bg-white/15 border border-white/20 text-white font-bold text-xs rounded-xl flex items-center justify-center space-x-2 transition-all cursor-pointer"
              >
                <Calendar className="w-4 h-4 text-cyan-300" />
                <span>Book This Treatment</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 4. SPECIALIZED DENTAL PROCEDURES SHOWCASE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div className="space-y-2">
            <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-cyan-100 text-cyan-700 text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Center of Excellence Treatments</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-950 font-heading">
              World-Class Dental Specialities
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 max-w-xl">
              From computer-guided titanium implants to same-day ceramic crowns, explore our comprehensive range of specialized dental care.
            </p>
          </div>

          <Link
            to="/services/dental-implants-restoration"
            className="text-xs font-bold text-cyan-600 hover:text-cyan-700 flex items-center space-x-1 shrink-0"
          >
            <span>Explore All 10 Dental Procedures</span>
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Procedures Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesList.slice(0, 6).map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-3xl overflow-hidden shadow-lg border border-slate-100 hover:shadow-xl hover:border-cyan-200 transition-all flex flex-col group"
            >
              <div className="relative h-48 sm:h-52 overflow-hidden bg-slate-100">
                <img
                  src={service.heroImage || "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=800&q=80"}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent"></div>
                <span className="absolute bottom-3 left-3 bg-cyan-600/90 text-white text-[10px] font-extrabold uppercase px-2.5 py-1 rounded-lg backdrop-blur-xs">
                  Specialized Dental Care
                </span>
              </div>

              <div className="p-6 flex-grow flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <h3 className="text-base sm:text-lg font-bold text-slate-950 group-hover:text-cyan-600 transition-colors font-heading leading-snug">
                    {service.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                    {service.shortDesc}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                  <Link
                    to={`/services/${service.slug}`}
                    className="text-xs font-bold text-slate-700 hover:text-cyan-600 transition-colors flex items-center space-x-1"
                  >
                    <span>Procedure Details</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </Link>

                  <button
                    type="button"
                    onClick={() => onOpenAppointment({ department: service.title })}
                    className="px-3 py-1.5 bg-cyan-50 hover:bg-cyan-600 hover:text-white text-cyan-700 font-bold text-xs rounded-lg transition-colors cursor-pointer"
                  >
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. WHY CHOOSE US */}
      <section className="bg-gradient-to-br from-slate-950 via-slate-900 to-cyan-950 text-white py-16 sm:py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="max-w-7xl mx-auto space-y-12 relative z-10">
          
          <div className="text-center max-w-3xl mx-auto space-y-2">
            <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-bold uppercase tracking-wider">
              <Award className="w-3.5 h-3.5 text-cyan-400" />
              <span>The DentaCare Clinical Advantage</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white font-heading">
              Why Patients Trust DentaCare Specialists
            </h2>
            <p className="text-xs sm:text-sm text-slate-300">
              We combine world-class Swiss implant technology, microscopic root canal precision, and sterile hospital protocols.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChooseUs.map((item, idx) => (
              <div
                key={idx}
                className="bg-white/5 border border-white/10 rounded-2xl p-6 space-y-3 backdrop-blur-xs hover:border-cyan-500/40 transition-all"
              >
                <div className="w-10 h-10 rounded-xl bg-cyan-500/20 text-cyan-400 flex items-center justify-center">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h3 className="text-sm font-bold text-white font-heading">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 6. SPECIALIST DENTISTS SPOTLIGHT */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div className="space-y-2">
            <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-cyan-100 text-cyan-700 text-xs font-bold uppercase tracking-wider">
              <UserCheck className="w-3.5 h-3.5" />
              <span>Clinical Medical Faculty</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-950 font-heading">
              Board-Certified Dental Specialists
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 max-w-xl">
              Meet our team of fellowship-trained implantologists, orthodontists, endodontists, and maxillofacial surgeons.
            </p>
          </div>

          <Link
            to="/about/doctors"
            className="text-xs font-bold text-cyan-600 hover:text-cyan-700 flex items-center space-x-1 shrink-0"
          >
            <span>View All Doctors & Schedules</span>
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Doctors Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {doctorsList.slice(0, 4).map((doc) => (
            <div
              key={doc.id}
              className="bg-white rounded-3xl overflow-hidden shadow-lg border border-slate-100 hover:shadow-xl transition-all flex flex-col group"
            >
              <div className="relative h-64 overflow-hidden bg-slate-100">
                <img
                  src={doc.image || "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=600&q=80"}
                  alt={doc.name}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-3 left-3 right-3">
                  <span className="text-[10px] font-extrabold text-cyan-300 uppercase tracking-wider block">
                    {doc.experience} Experience
                  </span>
                  <p className="text-xs font-bold text-white leading-tight">
                    {doc.department}
                  </p>
                </div>
              </div>

              <div className="p-5 flex-grow flex flex-col justify-between space-y-3">
                <div className="space-y-1">
                  <h3 className="text-sm font-bold text-slate-950 font-heading">
                    {doc.name}
                  </h3>
                  <p className="text-[11px] text-slate-500 line-clamp-2">
                    {doc.qualification}
                  </p>
                </div>

                <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs">
                  <span className="text-[10px] text-slate-400 font-medium">{doc.timing?.split(':')[0]}</span>
                  <button
                    type="button"
                    onClick={() => onOpenAppointment({ doctorName: doc.name, department: doc.department })}
                    className="px-3 py-1 bg-cyan-600 hover:bg-cyan-700 text-white font-bold text-[11px] rounded-lg transition-colors cursor-pointer"
                  >
                    Book Slot
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 7. PATIENT SMILE TRANSFORMATIONS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-cyan-900 via-sky-900 to-slate-950 text-white rounded-3xl p-8 sm:p-12 shadow-2xl space-y-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-white/10 pb-6">
            <div className="space-y-1">
              <span className="text-xs font-bold uppercase tracking-wider text-cyan-400">
                Verified Patient Case Studies
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold font-heading text-white">
                Real Patient Smile Transformations
              </h2>
            </div>
            <Link
              to="/about/testimonials"
              className="text-xs font-bold text-cyan-300 hover:text-white flex items-center space-x-1"
            >
              <span>View All 500+ Patient Stories</span>
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {patientTransformations.map((item) => (
              <div
                key={item.id}
                className="bg-white/10 border border-white/15 rounded-2xl p-5 space-y-4 backdrop-blur-md flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-12 h-12 rounded-full object-cover border-2 border-cyan-400"
                    />
                    <div>
                      <h4 className="text-xs font-bold text-white">{item.name}</h4>
                      <span className="text-[10px] text-cyan-300 block">{item.treatment}</span>
                    </div>
                  </div>

                  <div className="flex items-center space-x-1 text-amber-400">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                    ))}
                  </div>

                  <p className="text-xs text-slate-200 leading-relaxed italic">
                    "{item.result}"
                  </p>
                </div>

                <div className="pt-2 border-t border-white/10 flex items-center justify-between text-[10px] text-slate-400">
                  <span>Specialist: {item.doctor}</span>
                  <span className="text-emerald-400 font-bold">Verified Case</span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 8. ADVANCED 3D DENTAL TECHNOLOGIES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div className="space-y-2">
            <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-cyan-100 text-cyan-700 text-xs font-bold uppercase tracking-wider">
              <Cpu className="w-3.5 h-3.5" />
              <span>Digital Dentistry & Robotics</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-950 font-heading">
              Next-Gen 3D Equipment Suite
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 max-w-xl">
              Precision diagnostics powered by Planmeca 3D CBCT, Carl Zeiss operating microscopes, and CEREC same-day milling robotics.
            </p>
          </div>

          <Link
            to="/technologies"
            className="text-xs font-bold text-cyan-600 hover:text-cyan-700 flex items-center space-x-1 shrink-0"
          >
            <span>View All Technologies</span>
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {technologiesList.slice(0, 4).map((tech) => (
            <div
              key={tech.id}
              className="bg-white rounded-3xl p-5 shadow-lg border border-slate-100 hover:border-cyan-300 transition-all flex flex-col justify-between space-y-4 group"
            >
              <div className="space-y-3">
                <div className="h-40 rounded-2xl overflow-hidden bg-slate-100 relative">
                  <img
                    src={tech.heroImage || "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=600&q=80"}
                    alt={tech.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-2 right-2 bg-slate-950/80 text-cyan-300 text-[10px] font-bold px-2 py-0.5 rounded backdrop-blur-xs">
                    {tech.category}
                  </span>
                </div>

                <h3 className="text-xs font-bold text-slate-950 group-hover:text-cyan-600 transition-colors font-heading leading-snug">
                  {tech.name}
                </h3>
                <p className="text-[11px] text-slate-500 line-clamp-2">
                  {tech.shortDesc}
                </p>
              </div>

              <Link
                to={`/technologies/${tech.slug}`}
                className="text-xs font-bold text-cyan-600 hover:text-cyan-700 flex items-center space-x-1 pt-2 border-t border-slate-100"
              >
                <span>Technical Specifications</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* 9. SMILE CHECKUP PACKAGES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-2 mb-10">
          <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-cyan-100 text-cyan-700 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Preventive Oral Wellness</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-950 font-heading">
            Comprehensive Smile Assessment Packages
          </h2>
          <p className="text-xs sm:text-sm text-slate-600">
            Maintain optimal dental health and catch cavities early with our value-packed smile screening plans.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {defaultHealthPackages.map((pkg) => (
            <div
              key={pkg.id}
              className="bg-white rounded-3xl p-6 shadow-lg border border-slate-100 hover:shadow-xl hover:border-cyan-200 transition-all flex flex-col justify-between space-y-4 relative"
            >
              <span className="absolute -top-3 left-6 bg-cyan-600 text-white text-[10px] font-bold px-3 py-0.5 rounded-full uppercase tracking-wider shadow-sm">
                {pkg.badge}
              </span>

              <div className="space-y-3 pt-2">
                <h3 className="text-sm font-bold text-slate-950 font-heading leading-tight">
                  {pkg.title}
                </h3>
                <div className="flex items-baseline space-x-2">
                  <span className="text-2xl font-black text-cyan-600 font-heading">{pkg.price}</span>
                  <span className="text-xs text-slate-400 line-through">{pkg.originalPrice}</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {pkg.description}
                </p>

                <div className="space-y-1.5 pt-2">
                  <span className="text-[11px] font-bold text-slate-900 uppercase tracking-wider block">
                    Includes:
                  </span>
                  {pkg.tests.slice(0, 4).map((t, idx) => (
                    <div key={idx} className="flex items-start space-x-1.5 text-[11px] text-slate-600">
                      <Check className="w-3.5 h-3.5 text-cyan-600 shrink-0 mt-0.5" />
                      <span>{t}</span>
                    </div>
                  ))}
                </div>
              </div>

              <button
                type="button"
                onClick={() => onOpenAppointment({ department: pkg.title })}
                className="w-full py-2.5 bg-cyan-600 hover:bg-cyan-700 text-white font-bold text-xs rounded-xl shadow-md transition-all cursor-pointer"
              >
                Book Package
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* 10. DENTAL HEALTH JOURNAL (BLOG) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div className="space-y-2">
            <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-cyan-100 text-cyan-700 text-xs font-bold uppercase tracking-wider">
              <Smile className="w-3.5 h-3.5" />
              <span>Oral Health & Education</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-950 font-heading">
              Latest From Our Dental Journal
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 max-w-xl">
              Evidence-based clinical insights, patient guides, and expert advice on preserving your lifelong smile.
            </p>
          </div>

          <Link
            to="/blog"
            className="text-xs font-bold text-cyan-600 hover:text-cyan-700 flex items-center space-x-1 shrink-0"
          >
            <span>View All Articles</span>
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {blogList.slice(0, 3).map((post) => (
            <div
              key={post.id}
              className="bg-white rounded-3xl overflow-hidden shadow-lg border border-slate-100 hover:shadow-xl transition-all flex flex-col group"
            >
              <div className="h-48 overflow-hidden bg-slate-100 relative">
                <img
                  src={post.image || "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=600&q=80"}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute bottom-2 left-2 bg-slate-950/80 text-cyan-300 text-[10px] font-bold px-2 py-0.5 rounded backdrop-blur-xs">
                  {post.category}
                </span>
              </div>

              <div className="p-6 flex-grow flex flex-col justify-between space-y-3">
                <div className="space-y-2">
                  <span className="text-[10px] text-slate-400 font-medium block">{post.date} • {post.readTime}</span>
                  <h3 className="text-sm font-bold text-slate-950 group-hover:text-cyan-600 transition-colors font-heading leading-snug">
                    {post.title}
                  </h3>
                  <p className="text-xs text-slate-600 line-clamp-2">
                    {post.summary}
                  </p>
                </div>

                <Link
                  to={`/blog/${post.slug}`}
                  className="text-xs font-bold text-cyan-600 hover:text-cyan-700 flex items-center space-x-1 pt-2 border-t border-slate-100"
                >
                  <span>Read Full Article</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 11. FAQS */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <div className="text-center space-y-2 mb-8">
          <span className="text-xs font-bold text-cyan-600 uppercase tracking-wider">
            Frequently Asked Questions
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950 font-heading">
            Got Questions About Dental Procedures?
          </h2>
        </div>

        <div className="space-y-3">
          {faqItems.map((faq, idx) => {
            const isOpen = activeFaq === idx;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs"
              >
                <button
                  type="button"
                  onClick={() => setActiveFaq(isOpen ? null : idx)}
                  className="w-full p-4 text-left flex items-center justify-between text-xs sm:text-sm font-bold text-slate-900 hover:text-cyan-600 transition-colors cursor-pointer"
                >
                  <span>{faq.q}</span>
                  <ChevronRight className={`w-4 h-4 text-slate-400 transition-transform ${isOpen ? 'rotate-90 text-cyan-600' : ''}`} />
                </button>
                {isOpen && (
                  <div className="p-4 pt-0 text-xs text-slate-600 leading-relaxed border-t border-slate-100 bg-slate-50/50 animate-in fade-in duration-200">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

    </div>
  );
};

export default HomePage;
