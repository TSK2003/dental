import React from 'react';
import PageHero from '../../components/common/PageHero';
import { Target, Compass, Heart, Sparkles, Smile } from 'lucide-react';

const VisionMissionPage = () => {
  return (
    <div className="bg-slate-50 text-slate-800 antialiased space-y-12 pb-16">
      <PageHero
        title="Vision, Mission & Clinical Ethics"
        subtitle="Our core purpose, clinical commitment, and dedication to pioneering pain-free 3D digital dentistry and life-changing smile transformations."
        breadcrumb={[{ label: 'About', path: '/about' }, { label: 'Vision & Mission' }]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Vision */}
          <div className="bg-white p-8 sm:p-10 rounded-3xl border border-slate-200 shadow-sm space-y-4">
            <div className="w-12 h-12 bg-cyan-50 text-cyan-600 rounded-2xl flex items-center justify-center">
              <Compass className="w-6 h-6" />
            </div>
            <h2 className="text-xl font-bold text-slate-900 font-heading">Our Vision</h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              To be recognized as the premier global benchmark in 3D Guided Dental Implantology, Micro-Endodontics, and Digital Smile Architecture, ensuring every patient achieves a healthy, fully functional, and dazzling natural smile for life.
            </p>
          </div>

          {/* Mission */}
          <div className="bg-white p-8 sm:p-10 rounded-3xl border border-slate-200 shadow-sm space-y-4">
            <div className="w-12 h-12 bg-sky-50 text-sky-600 rounded-2xl flex items-center justify-center">
              <Target className="w-6 h-6" />
            </div>
            <h2 className="text-xl font-bold text-slate-900 font-heading">Our Mission</h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              To deliver 100% painless, ethical, and hospital-grade sterile dental care utilizing Planmeca 3D CBCT bone mapping, Carl Zeiss operating microscopes, CEREC 3D robotic milling, and Diamond Invisalign® clear aligners under the hands of renowned MDS dental specialists.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default VisionMissionPage;
