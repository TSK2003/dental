import React from 'react';
import PageHero from '../../components/common/PageHero';
import { Briefcase, Send, CheckCircle2, Sparkles, Smile } from 'lucide-react';

const CareerPage = () => {
  const jobs = [
    {
      title: 'Consultant Implantologist & Prosthodontist (MDS)',
      department: 'Center for Guided Implantology & Full Mouth Rehab',
      experience: '3+ Years Post-MDS',
      type: 'Full-Time',
      description: 'Seeking board-certified MDS Implantologists proficient in 3D CBCT computer-guided flapless surgery and All-on-4 / All-on-6 immediate restorations.'
    },
    {
      title: 'Senior Orthodontist & Clear Aligner Specialist (MDS)',
      department: 'Orthodontics & Dentofacial Orthopedics',
      experience: '3+ Years in Invisalign / Digital Ortho',
      type: 'Full-Time',
      description: 'Looking for Diamond Invisalign certified orthodontists skilled in iTero 5D scans, ClinCheck simulations, and self-ligating clear ceramic braces.'
    },
    {
      title: 'Micro-Endodontist & Conservative Specialist (MDS)',
      department: 'Microscopic Endodontics Unit',
      experience: '2+ Years in Operating Microscopes',
      type: 'Full-Time',
      description: 'Role for endodontists experienced in Carl Zeiss 25x operating microscopes, single-visit rotary endodontics, and micro-apicoectomies.'
    },
    {
      title: 'Certified Registered Dental Hygienist & Chair Assistant',
      department: 'Preventive Care & Operatory Suites',
      experience: '2+ Years in Dental Clinics',
      type: 'Full-Time',
      description: 'Managing ultrasonic scaling, Philips Zoom! LED whitening, Class B autoclave sterilization, and patient dental charting.'
    }
  ];

  return (
    <div className="bg-slate-50 text-slate-800 antialiased space-y-12 pb-16">
      <PageHero
        title="Careers at DentaCare Specialists"
        subtitle="Join our premier Institute of Advanced Dentistry, Implantology & Smile Aesthetics. Work alongside leading fellowship-trained dental surgeons."
        breadcrumb={[{ label: 'About', path: '/about' }, { label: 'Careers' }]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {jobs.map((job, idx) => (
            <div key={idx} className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm space-y-3 flex flex-col justify-between hover:shadow-lg hover:border-cyan-300 transition-all">
              <div>
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold uppercase text-cyan-700 bg-cyan-50 px-2.5 py-0.5 rounded-md">
                    {job.type}
                  </span>
                  <span className="text-xs text-slate-400 font-medium">{job.experience}</span>
                </div>
                <h3 className="text-sm font-bold text-slate-950 font-heading mt-2">{job.title}</h3>
                <p className="text-xs text-cyan-600 font-semibold">{job.department}</p>
                <p className="text-xs text-slate-600 leading-relaxed mt-2">{job.description}</p>
              </div>

              <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                <span className="text-[11px] text-slate-500 font-mono">careers@dentacarespecialists.org</span>
                <a
                  href="mailto:careers@dentacarespecialists.org"
                  className="px-4 py-2 bg-gradient-to-r from-cyan-600 to-sky-600 hover:from-cyan-700 hover:to-sky-700 text-white rounded-xl text-xs font-bold transition-all"
                >
                  Apply Now
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CareerPage;
