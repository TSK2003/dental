import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAdmin } from '../../context/AdminContext';
import { 
  User, 
  Calendar, 
  Clock, 
  CheckCircle2, 
  Download, 
  Printer, 
  FileText, 
  LogOut, 
  Phone, 
  ShieldCheck, 
  AlertCircle,
  ChevronRight,
  MessageSquare,
  Sparkles,
  Zap,
  TrendingUp,
  Award,
  Smile
} from 'lucide-react';

const PatientPortal = ({ onOpenAppointment }) => {
  const navigate = useNavigate();
  const { appointments, hospitalInfo } = useAdmin();

  // Active patient session (demo)
  const patientData = {
    name: 'Karthick S',
    phone: '+91 63807 67265',
    email: 'karthick@example.com',
    age: '28 Yrs',
    bloodGroup: 'O+ Positive',
    uhid: 'UHID-DNT-88492',
    dentalArch: 'Class I Molar • Upper Incisor Diastema Closed',
    activeProtocol: 'Nobel Biocare® Guided Implant & Post-Surgical Fibrin Healing'
  };

  // Find appointments related to this patient or fallback
  const patientAppointments = appointments.length > 0 ? appointments : [
    {
      appointmentId: 'DENT001',
      token: 'DENT001',
      patientName: 'Karthick S',
      doctorName: 'Dr. Arthur Vance, MDS, FICOI (USA)',
      department: 'Center for Guided Implantology & Full Mouth Rehab',
      date: '2026-08-19',
      time: '10:30 AM',
      sessionType: '3D CBCT Guided Implant Review & Scan',
      fee: 800,
      paymentMethod: 'Instant UPI (Paid)',
      status: 'confirmed',
      operatorySuite: 'Implant Operatory Suite #1',
      branchName: 'DentaCare Flagship Hospital & 3D Imaging Center'
    }
  ];

  const [activeSlip, setActiveSlip] = useState(patientAppointments[0] || null);

  // Prescribed Daily Oral Care & Post-Implant Regimen
  const prescribedRegimen = [
    { step: 'Step 1 • Morning', name: 'Chlorhexidine 0.2% Antiseptic Rinse', detail: 'Gently swirl 10ml for 60 seconds without spitting forcefully', status: 'Completed AM' },
    { step: 'Step 2 • Morning & Night', name: 'Sonic Soft-Bristle Micro-Brushing', detail: '45-degree angle sulcular sweep along gum margins', status: 'Completed AM' },
    { step: 'Step 3 • Afternoon', name: 'Interdental SuperFloss & Water Flosser', detail: 'Flush debris around implant crowns and bridge abutments', status: 'Active All Day' },
    { step: 'Step 4 • Night', name: 'GC Tooth Mousse® Calcium Bio-Enamel Re-mineralizer', detail: 'Apply thin layer with finger on natural teeth before sleep', status: 'Pending PM' }
  ];

  const handlePrint = () => {
    window.print();
  };

  const handleDownloadSlip = (apt) => {
    const text = `
=====================================================
    DENTACARE SPECIALISTS HOSPITAL & 3D IMPLANTOLOGY
           OFFICIAL CLINICAL CONSULTATION SLIP
=====================================================
TOKEN NUMBER       : ${apt.appointmentId || apt.token}
PATIENT UHID       : ${patientData.uhid}
PATIENT NAME       : ${apt.patientName || patientData.name}
PHONE NUMBER       : ${apt.mobileNumber || patientData.phone}
AGE / OCCLUSION    : ${patientData.age} / ${patientData.dentalArch}
-----------------------------------------------------
SPECIALTY DEPT     : ${apt.department}
CONSULTANT DENTIST : ${apt.doctorName}
PROCEDURE / REASON : ${apt.sessionType || '3D CBCT Examination'}
OPERATORY SUITE    : ${apt.operatorySuite || 'Operatory Suite #1'}
APPOINTMENT DATE   : ${apt.date}
TIME SLOT          : ${apt.time || apt.timeSlot}
HOSPITAL CAMPUS    : ${apt.branchName || 'DentaCare Flagship Hub'}
-----------------------------------------------------
CONSULTATION FEE   : Rs. ${apt.fee || 800} (CONFIRMED)
PAYMENT MODE       : ${apt.paymentMethod || 'UPI / Counter'}
STATUS             : CONFIRMED (PRIORITY OPERATORY ALLOCATED)
-----------------------------------------------------
24/7 TOOTHACHE     : 1800-419-6784
CONCIERGE DESK     : ${hospitalInfo?.phone || '+91 98401 23456'}
=====================================================
Please arrive 10 minutes prior for digital intraoral optical scan.
`;
    const blob = new Blob([text], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `DentaCare-Token-${apt.appointmentId || apt.token}.txt`;
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-screen bg-slate-100/70 pb-20 text-slate-800 antialiased">
      {/* Top Patient Header Bar */}
      <header className="bg-slate-950 text-white sticky top-0 z-40 border-b border-slate-800 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          
          <div className="flex items-center space-x-3">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-cyan-600 to-sky-500 flex items-center justify-center text-white shadow-md">
                <Smile className="w-5 h-5" />
              </div>
              <span className="font-heading font-extrabold text-base tracking-tight text-white">
                DentaCare<span className="text-cyan-400">.Patient</span>
              </span>
            </Link>
            <span className="hidden sm:inline-block px-2.5 py-0.5 bg-cyan-500/20 text-cyan-300 text-[10px] font-bold uppercase rounded-md border border-cyan-500/30">
              Smile & Operatory Portal
            </span>
          </div>

          <div className="flex items-center space-x-4">
            <div className="text-right hidden sm:block">
              <p className="text-xs font-bold text-white leading-tight">{patientData.name}</p>
              <p className="text-[10px] text-cyan-300 font-mono">{patientData.uhid}</p>
            </div>
            
            <button
              onClick={() => navigate('/')}
              className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors cursor-pointer"
              title="Return to Main Website"
            >
              <LogOut className="w-4 h-4" />
            </button>
          </div>

        </div>
      </header>

      {/* Main Content Area */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 space-y-8">
        
        {/* WELCOME BANNER */}
        <div className="bg-gradient-to-r from-slate-950 via-cyan-950 to-slate-950 rounded-3xl p-6 sm:p-8 text-white shadow-xl border border-cyan-900/40 relative overflow-hidden">
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            
            <div className="lg:col-span-8 space-y-2">
              <div className="inline-flex items-center space-x-2 px-3 py-1 bg-cyan-500/20 text-cyan-300 rounded-full text-xs font-bold border border-cyan-500/30">
                <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
                <span>Verified Dental Patient Record</span>
              </div>
              <h1 className="text-2xl sm:text-3xl font-extrabold font-heading">
                Welcome back, {patientData.name}!
              </h1>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-2xl">
                Active Treatment: <span className="text-white font-semibold">{patientData.activeProtocol}</span>. Your operatory tokens, 3D scans, and oral hygiene prescriptions are active.
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-end">
              <button
                onClick={() => onOpenAppointment && onOpenAppointment()}
                className="px-5 py-3 bg-gradient-to-r from-cyan-600 to-sky-600 hover:from-cyan-700 hover:to-sky-700 text-white font-bold text-xs rounded-xl shadow-lg transition-all flex items-center justify-center space-x-2 cursor-pointer"
              >
                <Calendar className="w-4 h-4" />
                <span>Book Operatory / Checkup Slot</span>
              </button>

              <a
                href="tel:1800-419-6784"
                className="px-5 py-3 bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700 font-bold text-xs rounded-xl transition-colors flex items-center justify-center space-x-2"
              >
                <Phone className="w-4 h-4 text-cyan-400" />
                <span>24/7 Dental Emergency: 1800-419-6784</span>
              </a>
            </div>

          </div>
        </div>

        {/* 2-COLUMN LAYOUT */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* LEFT 7 COLS: Appointments & Slips */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Appointment Tokens List */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-5">
              <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                <div className="flex items-center space-x-2.5">
                  <div className="w-8 h-8 rounded-xl bg-cyan-50 text-cyan-600 flex items-center justify-center font-bold">
                    <Calendar className="w-4 h-4" />
                  </div>
                  <div>
                    <h2 className="text-base font-bold text-slate-950 font-heading">Upcoming Dental Visits & Operatory Tokens</h2>
                    <p className="text-[11px] text-slate-500">Live tokens for chairside procedures and 3D imaging</p>
                  </div>
                </div>
                <span className="text-xs font-extrabold text-cyan-600 bg-cyan-50 px-2.5 py-1 rounded-lg">
                  {patientAppointments.length} Active
                </span>
              </div>

              <div className="space-y-4">
                {patientAppointments.map((apt, idx) => (
                  <div 
                    key={idx}
                    onClick={() => setActiveSlip(apt)}
                    className={`p-5 rounded-2xl border transition-all cursor-pointer flex flex-col sm:flex-row sm:items-center justify-between gap-4 ${
                      activeSlip?.appointmentId === apt.appointmentId || activeSlip?.token === apt.token
                        ? 'border-cyan-500 bg-cyan-50/20 shadow-md ring-2 ring-cyan-500/20'
                        : 'border-slate-200 bg-slate-50 hover:bg-white hover:border-slate-300'
                    }`}
                  >
                    <div className="space-y-1.5">
                      <div className="flex items-center space-x-2">
                        <span className="px-2.5 py-0.5 bg-cyan-600 text-white font-mono font-extrabold text-xs rounded-md shadow-2xs">
                          {apt.appointmentId || apt.token || `DENT${idx+1}`}
                        </span>
                        <span className="px-2 py-0.5 bg-emerald-100 text-emerald-800 font-bold text-[10px] uppercase rounded-md">
                          {apt.status || 'Confirmed'}
                        </span>
                      </div>

                      <h3 className="text-sm font-bold text-slate-900 leading-tight">
                        {apt.doctorName || 'Chief Dental Surgeon'}
                      </h3>
                      <p className="text-xs text-cyan-600 font-semibold">{apt.department || 'Implantology & Surgery'}</p>
                      
                      <div className="flex items-center space-x-3 text-xs text-slate-600 pt-1">
                        <span className="flex items-center space-x-1">
                          <Calendar className="w-3.5 h-3.5 text-slate-400" />
                          <span>{apt.date}</span>
                        </span>
                        <span className="flex items-center space-x-1">
                          <Clock className="w-3.5 h-3.5 text-slate-400" />
                          <span>{apt.time || apt.timeSlot || '10:30 AM'}</span>
                        </span>
                      </div>
                    </div>

                    <div className="flex sm:flex-col items-center sm:items-end justify-between gap-2 shrink-0">
                      <span className="text-sm font-bold text-slate-950 font-mono">
                        ₹ {apt.fee || 800}
                      </span>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setActiveSlip(apt);
                        }}
                        className="px-3.5 py-1.5 bg-white border border-cyan-200 text-cyan-600 hover:bg-cyan-600 hover:text-white rounded-xl text-xs font-bold shadow-2xs transition-colors cursor-pointer"
                      >
                        View Slip
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Daily Oral Care Regimen & Post-Care */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-4">
              <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                <div className="flex items-center space-x-2">
                  <Sparkles className="w-5 h-5 text-cyan-600" />
                  <h3 className="text-sm font-bold text-slate-950 font-heading">
                    Prescribed Oral Care Regimen & Post-Op Routine
                  </h3>
                </div>
                <span className="text-[11px] text-emerald-700 font-bold bg-emerald-50 px-2 py-0.5 rounded-md">
                  Dr. Arthur Vance Prescribed
                </span>
              </div>

              <div className="space-y-3">
                {prescribedRegimen.map((item, idx) => (
                  <div key={idx} className="p-3.5 bg-slate-50 rounded-2xl border border-slate-200 flex items-start justify-between gap-3 text-xs">
                    <div className="space-y-1">
                      <div className="flex items-center space-x-2">
                        <span className="text-[10px] font-bold text-cyan-700 uppercase bg-cyan-50 px-2 py-0.5 rounded-md">
                          {item.step}
                        </span>
                        <h4 className="font-bold text-slate-900">{item.name}</h4>
                      </div>
                      <p className="text-slate-500 text-[11px]">{item.detail}</p>
                    </div>

                    <span className="px-2 py-1 bg-white border border-slate-200 text-[10px] font-bold text-slate-700 rounded-md shrink-0">
                      {item.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* RIGHT 5 COLS: Printable Official Slip & 3D CBCT Metrics */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* OFFICIAL PRINTABLE CONSULTATION SLIP */}
            {activeSlip && (
              <div className="bg-white rounded-3xl p-6 sm:p-8 border-2 border-cyan-500/30 shadow-xl space-y-5 print:p-0 print:border-none print:shadow-none">
                
                <div className="text-center space-y-1 border-b border-slate-200 pb-4">
                  <span className="px-2.5 py-0.5 bg-cyan-50 text-cyan-800 text-[10px] font-bold uppercase tracking-wider rounded-full border border-cyan-200">
                    Official Appointment Token
                  </span>
                  <h3 className="text-base font-extrabold text-slate-950 font-heading">
                    DentaCare Specialists Hospital
                  </h3>
                  <p className="text-[11px] text-slate-500">
                    {activeSlip.branchName || 'DentaCare Central Hub'}
                  </p>
                </div>

                <div className="bg-slate-950 text-white rounded-2xl p-4 text-center space-y-1 shadow-inner">
                  <span className="text-[10px] text-cyan-300 font-bold uppercase tracking-wider block">
                    Your Queue Token Number
                  </span>
                  <span className="text-3xl font-black font-mono tracking-widest text-cyan-400">
                    {activeSlip.appointmentId || activeSlip.token || 'DENT001'}
                  </span>
                  <span className="text-[10px] text-slate-400 block">
                    Show this slip at the operatory reception
                  </span>
                </div>

                {/* Slip Details Grid */}
                <div className="space-y-2 text-xs divide-y divide-slate-100">
                  <div className="flex justify-between py-1.5">
                    <span className="text-slate-400 font-medium">Patient UHID</span>
                    <span className="font-mono font-bold text-slate-900">{patientData.uhid}</span>
                  </div>
                  <div className="flex justify-between py-1.5">
                    <span className="text-slate-400 font-medium">Patient Name</span>
                    <span className="font-bold text-slate-900">{activeSlip.patientName || patientData.name}</span>
                  </div>
                  <div className="flex justify-between py-1.5">
                    <span className="text-slate-400 font-medium">Dental Occlusion</span>
                    <span className="font-bold text-slate-900">{patientData.dentalArch}</span>
                  </div>
                  <div className="flex justify-between py-1.5">
                    <span className="text-slate-400 font-medium">Consulting Dentist</span>
                    <span className="font-bold text-cyan-700">{activeSlip.doctorName || 'Dr. Arthur Vance'}</span>
                  </div>
                  <div className="flex justify-between py-1.5">
                    <span className="text-slate-400 font-medium">Treatment / Dept</span>
                    <span className="font-bold text-slate-900">{activeSlip.department || 'Implantology'}</span>
                  </div>
                  <div className="flex justify-between py-1.5">
                    <span className="text-slate-400 font-medium">Date & Time</span>
                    <span className="font-bold text-slate-900">{activeSlip.date} at {activeSlip.time || activeSlip.timeSlot || '10:30 AM'}</span>
                  </div>
                  <div className="flex justify-between py-1.5">
                    <span className="text-slate-400 font-medium">Consultation Fee</span>
                    <span className="font-bold text-emerald-700">₹ {activeSlip.fee || 800} (CONFIRMED)</span>
                  </div>
                </div>

                {/* Slip Action Buttons */}
                <div className="pt-3 border-t border-slate-200 grid grid-cols-2 gap-3 print:hidden">
                  <button
                    onClick={handlePrint}
                    className="py-2.5 bg-slate-900 hover:bg-slate-800 text-white rounded-xl text-xs font-bold flex items-center justify-center space-x-1.5 transition-colors cursor-pointer shadow-sm"
                  >
                    <Printer className="w-3.5 h-3.5" />
                    <span>Print Slip</span>
                  </button>

                  <button
                    onClick={() => handleDownloadSlip(activeSlip)}
                    className="py-2.5 bg-cyan-50 hover:bg-cyan-100 text-cyan-700 border border-cyan-200 rounded-xl text-xs font-bold flex items-center justify-center space-x-1.5 transition-colors cursor-pointer"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Download TXT</span>
                  </button>
                </div>

              </div>
            )}

            {/* 3D CBCT Bone Density & Oral Health Score */}
            <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm space-y-4">
              <div className="flex items-center space-x-2">
                <TrendingUp className="w-4 h-4 text-cyan-600" />
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-700">
                  Planmeca 3D CBCT Bone Analytics
                </h3>
              </div>

              <div className="grid grid-cols-2 gap-3 text-center">
                <div className="p-3 bg-slate-50 rounded-2xl border border-slate-100">
                  <p className="text-[10px] text-slate-400 font-medium">Bone Density (D2)</p>
                  <p className="text-lg font-black text-cyan-600">950 HU</p>
                  <span className="text-[9px] text-emerald-600 font-bold">Optimal for Implants</span>
                </div>
                <div className="p-3 bg-slate-50 rounded-2xl border border-slate-100">
                  <p className="text-[10px] text-slate-400 font-medium">Gingival Bleeding Index</p>
                  <p className="text-lg font-black text-emerald-600">&lt; 5%</p>
                  <span className="text-[9px] text-emerald-600 font-bold">Healthy Periodontium</span>
                </div>
                <div className="p-3 bg-slate-50 rounded-2xl border border-slate-100">
                  <p className="text-[10px] text-slate-400 font-medium">Osseointegration Stability</p>
                  <p className="text-lg font-black text-blue-600">78 ISQ</p>
                  <span className="text-[9px] text-slate-500">Solid Primary Stability</span>
                </div>
                <div className="p-3 bg-slate-50 rounded-2xl border border-slate-100">
                  <p className="text-[10px] text-slate-400 font-medium">Smile Alignment Progress</p>
                  <p className="text-lg font-black text-cyan-600">92%</p>
                  <span className="text-[9px] text-emerald-600 font-bold">Arch Completed</span>
                </div>
              </div>
            </div>

          </div>

        </div>

      </main>
    </div>
  );
};

export default PatientPortal;
