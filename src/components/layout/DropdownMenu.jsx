import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

export const aboutMenuItems = [
  { label: 'Hospital Overview & Heritage', path: '/about/overview' },
  { label: 'Vision, Mission & Clinical Ethics', path: '/about/vision-mission' },
  { label: 'Clinical Leadership & Advisory Board', path: '/about/management' },
  { label: 'Specialist Dental Surgeons & Orthodontists', path: '/about/doctors' },
  { label: 'Dentist Consultation Hours & Schedule', path: '/about/consultant-schedule' },
  { label: 'Patient Smile Transformations & Reviews', path: '/about/testimonials' },
  { label: 'Careers at DentaCare', path: '/about/careers' },
];

export const healthCenterMenuItems = [
  { label: 'Central Hospital & Surgical Center', path: '/branches' },
  { label: 'Smile Studio & Orthodontic Hub', path: '/branches' },
  { label: 'Preventive Smile & Dental Checkup Packages', path: '/health-center/master-health-checkup' },
];

export const updatesMenuItems = [
  { label: 'Dental Milestones & Clinical News', path: '/updates/news' },
  { label: 'International CDE & Dental Symposiums', path: '/updates/international-visit' },
  { label: 'Advanced Ozone Therapy & Surgical Healing Suite', path: '/updates/hbot' },
  { label: '3D Dental Procedure & Patient Smile Videos', path: '/updates/videos' },
  { label: 'Dental Operatories & In-House Lab Gallery', path: '/updates/gallery' },
  { label: 'Patient Smile Satisfaction Metrics', path: '/updates/patient-satisfaction' },
  { label: 'Class B Autoclave & 7-Step Sterilization', path: '/updates/infection-control' },
];

const DropdownMenu = ({ items, onClose }) => {
  return (
    <div className="w-72 bg-white shadow-2xl rounded-2xl border border-cyan-100 py-2 transform transition-all duration-200">
      {items.map((item, idx) => (
        <Link
          key={idx}
          to={item.path}
          onClick={onClose}
          className="group flex items-center justify-between px-4 py-2.5 text-xs font-medium text-slate-700 hover:text-cyan-600 hover:bg-cyan-50 transition-colors"
        >
          <span>{item.label}</span>
          <ChevronRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all text-cyan-600" />
        </Link>
      ))}
    </div>
  );
};

export default DropdownMenu;
