import React from 'react';
import { Link } from 'react-router-dom';
import { servicesList } from '../../data/servicesData';
import { ChevronRight, Sparkles, ShieldCheck, Smile } from 'lucide-react';

const MegaMenu = ({ onClose }) => {
  return (
    <div className="w-full bg-white shadow-2xl rounded-2xl border border-cyan-100 p-6 md:p-8 transform transition-all duration-300">
      <div className="flex items-center justify-between border-b border-slate-100 pb-4 mb-6">
        <div className="flex items-center space-x-3">
          <div className="p-2 bg-cyan-50 text-cyan-600 rounded-xl">
            <Smile className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-slate-900 font-heading">Specialist Dentistry, Implantology & Smile Aesthetics</h3>
            <p className="text-xs text-slate-500">3D Guided Implants, Diamond Invisalign®, Microscopic Root Canals, E.max Veneers & Laser Care</p>
          </div>
        </div>
        <Link
          to="/services/dental-implants-restoration"
          onClick={onClose}
          className="text-xs font-bold text-cyan-600 hover:text-cyan-700 flex items-center space-x-1"
        >
          <span>View All Procedures</span>
          <ChevronRight className="w-4 h-4" />
        </Link>
      </div>

      {/* Grid of Dental Treatments */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
        {servicesList.map((dep) => (
          <Link
            key={dep.id}
            to={`/services/${dep.slug}`}
            onClick={onClose}
            className="group flex items-start space-x-3 p-3 rounded-xl hover:bg-gradient-to-r hover:from-cyan-50/60 hover:to-sky-50/60 transition-all border border-transparent hover:border-cyan-100"
          >
            <div className="mt-0.5 p-2 bg-cyan-50 text-cyan-600 group-hover:bg-cyan-600 group-hover:text-white rounded-lg transition-colors shrink-0">
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <h4 className="text-xs font-bold text-slate-800 group-hover:text-cyan-600 transition-colors leading-tight">
                {dep.title}
              </h4>
              <p className="text-[11px] text-slate-500 line-clamp-2 mt-1">
                {dep.shortDesc}
              </p>
            </div>
          </Link>
        ))}
      </div>

      <div className="mt-6 pt-4 border-t border-slate-100 bg-cyan-50/30 rounded-xl p-3.5 flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center space-x-2 text-xs text-slate-600">
          <ShieldCheck className="w-4 h-4 text-emerald-600" />
          <span>Equipped with Planmeca 3D CBCT, Carl Zeiss 25x Microscopes, iTero 5D Scanner & CEREC 3D Milling</span>
        </div>
        <a
          href="tel:1800-419-6784"
          className="text-xs font-bold text-cyan-700 hover:text-cyan-800 bg-cyan-50 hover:bg-cyan-100 px-3 py-1.5 rounded-lg border border-cyan-200 transition-colors"
        >
          24/7 Dental Helpline: 1800-419-6784
        </a>
      </div>
    </div>
  );
};

export default MegaMenu;
