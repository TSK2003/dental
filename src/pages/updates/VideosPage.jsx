import React from 'react';
import PageHero from '../../components/common/PageHero';
import { Play, Sparkles, Smile } from 'lucide-react';

const VideosPage = () => {
  const videoCards = [
    {
      title: '3D Computer-Guided Dental Implant Surgery: Step-by-Step Stent Placement',
      duration: '4:15 min',
      category: 'Implantology',
      thumb: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Carl Zeiss 25x Microscopic Single-Sitting Painless Root Canal',
      duration: '5:30 min',
      category: 'Micro-Endodontics',
      thumb: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Invisalign® Digital Treatment Outcome Simulation on iTero 5D',
      duration: '3:45 min',
      category: 'Orthodontics',
      thumb: 'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=800&q=80'
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 pb-16 space-y-10">
      <PageHero
        title="Clinical Demonstration & Smile Procedure Videos"
        subtitle="Watch real dental surgical workflows, 3D implant navigation demonstrations, and micro-endodontic treatments."
        breadcrumb={[{ label: 'Videos' }]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {videoCards.map((vid, idx) => (
            <div key={idx} className="bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-200 group hover:shadow-xl hover:border-cyan-300 transition-all">
              <div className="relative h-52 overflow-hidden bg-slate-950">
                <img src={vid.thumb} alt={vid.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-slate-950/40 flex items-center justify-center">
                  <div className="w-14 h-14 bg-cyan-600/90 text-white rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    <Play className="w-6 h-6 ml-1" />
                  </div>
                </div>
                <span className="absolute bottom-2.5 right-2.5 bg-slate-950/80 text-white text-[10px] font-bold px-2.5 py-0.5 rounded-md">
                  {vid.duration}
                </span>
              </div>
              <div className="p-5">
                <span className="text-[10px] font-bold uppercase text-cyan-700 bg-cyan-50 px-2.5 py-0.5 rounded-md">{vid.category}</span>
                <h3 className="text-xs font-bold text-slate-950 font-heading mt-1.5 leading-snug">{vid.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VideosPage;
