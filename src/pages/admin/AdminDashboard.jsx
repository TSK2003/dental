import React from 'react';
import { Link } from 'react-router-dom';
import { useAdmin } from '../../context/AdminContext';
import {
  UserRound,
  Layers3,
  CalendarCheck,
  Cpu,
  BedDouble,
  Users,
  TrendingUp,
  ArrowRight,
  ShieldCheck,
  Sparkles,
  Zap,
  Smile
} from 'lucide-react';

const StatCard = ({ label, value, subtext, icon: Icon, to, highlight }) => (
  <Link
    to={to}
    className={`bg-white rounded-3xl p-6 border shadow-sm transition-all flex flex-col justify-between ${
      highlight ? 'border-cyan-300 bg-cyan-50/40 hover:border-cyan-500 hover:shadow-md' : 'border-slate-200 hover:border-cyan-400 hover:shadow-md'
    }`}
  >
    <div className="flex items-center justify-between">
      <div>
        <p className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">{label}</p>
        <p className="text-2xl font-black text-slate-950 mt-1 font-heading">{value}</p>
        {subtext && <p className="text-[11px] text-slate-400 font-medium mt-0.5">{subtext}</p>}
      </div>
      <div className="w-12 h-12 bg-cyan-50 text-cyan-600 rounded-2xl flex items-center justify-center border border-cyan-100 shadow-2xs">
        <Icon className="w-6 h-6" />
      </div>
    </div>
    <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-cyan-600">
      <span>Manage Dental Module</span>
      <ArrowRight className="w-3.5 h-3.5" />
    </div>
  </Link>
);

const AdminDashboard = () => {
  const {
    doctors,
    services,
    appointments,
    technologies,
    beds,
    staff
  } = useAdmin();

  // Operatory Suites & Chairs metrics
  const totalBeds = beds?.length || 0;
  const occupiedBeds = (beds || []).filter((b) => b.status === 'occupied').length;
  const availableBeds = (beds || []).filter((b) => b.status === 'available').length;
  const sanitizingBeds = (beds || []).filter((b) => b.status === 'sanitizing').length;
  const occupancyRate = totalBeds > 0 ? Math.round((occupiedBeds / totalBeds) * 100) : 0;

  // Staff metrics
  const totalStaff = staff?.length || 0;
  const onDutyStaff = (staff || []).filter((s) => s.dutyStatus === 'On Duty').length;

  const stats = [
    { label: 'Operatory Suites & Chairs', value: `${occupiedBeds}/${totalBeds} Active`, subtext: `${availableBeds} Ready (${occupancyRate}% Chair Utilization)`, icon: BedDouble, to: '/admin/beds', highlight: true },
    { label: 'Dental Hygienists & Lab Staff', value: `${onDutyStaff}/${totalStaff} On Duty`, subtext: 'Active Chairside & Sterilization Staff', icon: Users, to: '/admin/staff', highlight: true },
    { label: 'Consultation Tokens & Queue', value: appointments.length, subtext: 'Active Patient Booking Queue', icon: CalendarCheck, to: '/admin/appointments' },
    { label: 'Specialist Dental Surgeons', value: doctors.length, subtext: 'MDS / Fellowship Faculty', icon: UserRound, to: '/admin/doctors' },
    { label: 'Specialties & 3D Units', value: services.length, subtext: 'Clinical Procedures', icon: Layers3, to: '/admin/departments' },
    { label: '3D CBCT & Laser Equipment', value: technologies.length, subtext: 'Planmeca, Carl Zeiss, iTero', icon: Cpu, to: '/admin/technologies' },
  ];

  return (
    <div className="space-y-6">
      <div className="border-b border-slate-200 pb-3 flex items-center justify-between">
        <div>
          <h1 className="text-xl font-black text-slate-950 font-heading">Dental Hospital Surgical ERP Dashboard</h1>
          <p className="text-xs text-slate-500 mt-0.5">Live operatory suite utilization, 3D surgical schedules, and dental clinical workforce management</p>
        </div>
        <span className="px-3 py-1 bg-cyan-50 text-cyan-800 rounded-xl text-xs font-bold border border-cyan-200 flex items-center space-x-1.5">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
          <span>Operatories Active</span>
        </span>
      </div>

      {/* Main KPI Stat Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {stats.map((stat) => (
          <StatCard key={stat.label} {...stat} />
        ))}
      </div>

      {/* TWO COLUMN LIVE ERP MONITOR: SUITES & APPOINTMENTS */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        
        {/* Live Suite Occupancy Monitor */}
        <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-6 space-y-4">
          <div className="flex items-center justify-between border-b border-slate-100 pb-3">
            <div className="flex items-center space-x-2">
              <BedDouble className="w-5 h-5 text-cyan-600" />
              <h2 className="text-sm font-bold text-slate-900 font-heading">Dental Operatories & Chair Status</h2>
            </div>
            <Link to="/admin/beds" className="text-xs font-bold text-cyan-600 hover:text-cyan-700">
              Manage All &rarr;
            </Link>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
            {(beds || []).slice(0, 6).map((bed) => (
              <div
                key={bed.id}
                className={`p-3 rounded-2xl border text-xs space-y-1 ${
                  bed.status === 'occupied'
                    ? 'bg-cyan-50/50 border-cyan-200 text-cyan-950'
                    : bed.status === 'sanitizing'
                    ? 'bg-amber-50/50 border-amber-200 text-amber-900'
                    : 'bg-emerald-50/50 border-emerald-200 text-emerald-950'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="font-extrabold font-mono text-[11px]">{bed.id}</span>
                  <span className="w-2 h-2 rounded-full bg-current"></span>
                </div>
                <p className="font-semibold truncate text-[11px]">{bed.type || 'Operatory'}</p>
                <p className="text-[10px] opacity-75 capitalize">{bed.status}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Live Appointments Monitor */}
        <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-6 space-y-4">
          <div className="flex items-center justify-between border-b border-slate-100 pb-3">
            <div className="flex items-center space-x-2">
              <CalendarCheck className="w-5 h-5 text-cyan-600" />
              <h2 className="text-sm font-bold text-slate-900 font-heading">Recent Patient Dental Visits</h2>
            </div>
            <Link to="/admin/appointments" className="text-xs font-bold text-cyan-600 hover:text-cyan-700">
              View All Tokens &rarr;
            </Link>
          </div>

          <div className="space-y-2.5">
            {(appointments || []).slice(0, 4).map((apt, idx) => (
              <div key={idx} className="p-3 bg-slate-50 rounded-2xl border border-slate-200 flex items-center justify-between text-xs">
                <div className="space-y-0.5">
                  <div className="flex items-center space-x-2">
                    <span className="font-mono font-extrabold text-cyan-600 text-[11px]">
                      {apt.appointmentId || apt.token || `DENT${idx+1}`}
                    </span>
                    <span className="font-bold text-slate-900">{apt.patientName}</span>
                  </div>
                  <p className="text-[11px] text-slate-500">{apt.doctorName} • {apt.date}</p>
                </div>
                <span className="px-2.5 py-1 bg-white border border-slate-200 rounded-lg text-[10px] font-bold text-slate-700 capitalize">
                  {apt.status || 'Confirmed'}
                </span>
              </div>
            ))}
            {(!appointments || appointments.length === 0) && (
              <p className="text-xs text-slate-400 text-center py-4">No active appointments yet.</p>
            )}
          </div>
        </div>

      </div>
    </div>
  );
};

export default AdminDashboard;
