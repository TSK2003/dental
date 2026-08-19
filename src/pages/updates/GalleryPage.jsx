import React from 'react';
import PageHero from '../../components/common/PageHero';
import { dentalPhotoGalleryList } from '../../data/updatesData';

const GalleryPage = () => {
  const images = dentalPhotoGalleryList || [];

  return (
    <div className="min-h-screen bg-slate-50 pb-16 space-y-10">
      <PageHero
        title="Dental Operatory & 3D Imaging Suite Gallery"
        subtitle="Explore our 3D CBCT imaging labs, Carl Zeiss microscopic endodontics suites, CEREC CAD/CAM milling centers, and pediatric smile studios."
        breadcrumb={[{ label: 'Hospital Gallery' }]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((img, idx) => (
            <div key={idx} className="bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-200 group hover:shadow-xl hover:border-cyan-300 transition-all">
              <div className="h-64 overflow-hidden bg-slate-950">
                <img src={img.url} alt={img.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-5">
                <span className="text-[10px] font-bold uppercase text-cyan-700 bg-cyan-50 px-2.5 py-0.5 rounded-md">{img.category}</span>
                <h3 className="text-xs font-bold text-slate-950 font-heading mt-1.5">{img.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GalleryPage;
