import React, { createContext, useContext, useState, useEffect } from 'react';

// Import default dental data
import { servicesList as defaultServices } from '../data/servicesData';
import { chiefDoctorsList as defaultDoctors } from '../data/doctorsData';
import { branchesList as defaultBranches } from '../data/branchesData';
import { blogPosts as defaultBlogPosts } from '../data/blogData';
import { technologiesList as defaultTechnologies } from '../data/technologiesData';
import { initialBedsList, initialWardsList } from '../data/bedsData';
import { initialStaffList } from '../data/staffData';

const AdminContext = createContext(null);

const STORAGE_KEY = 'dentacare_admin_data_v1';

const defaultHospitalInfo = {
  name: 'DentaCare',
  tagline: 'Institute of Advanced Dentistry, Implantology & Smile Aesthetics',
  fullName: 'DentaCare Specialists Hospital & Center for Advanced Implantology',
  description: 'DentaCare Specialists is an internationally accredited Center of Excellence in 3D Guided Dental Implants, Invisalign® Clear Aligners, Carl Zeiss Microscopic Root Canals, Digital Smile Design, and 24/7 Dental Emergency Care.',
  email: 'care@dentacarespecialists.org',
  phone: '+91 98401 23456',
  emergencyNumber: '1800-419-6784',
  address: 'No. 45, DentaCare Medical Boulevard, Near High Court Junction, Palayamkottai, Tirunelveli, Pin: 627002',
  whatsappNumber: '919840123456',
};

const defaultHeroContent = {
  badge: 'Center of Excellence in Advanced Dental Implants & Smile Design',
  heading: 'Painless 3D Guided Dental Implants, Invisalign & Celebrity Smile Aesthetics',
  description: 'Swiss Nobel Biocare® dental implants with lifetime warranty, 25x Carl Zeiss microscopic root canal preservation, same-day CAD/CAM ceramic crowns, and board-certified dental specialists.',
  heroImage: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1600&q=85',
  stats: [
    { number: '25,000+', label: 'Happy Patient Smiles' },
    { number: '10,000+', label: 'Dental Implants Placed' },
    { number: '99.4%', label: 'Implant Success Rate' },
    { number: '100%', label: 'Hospital-Grade Class B Sterile' },
  ],
  emergencyLabel: '24/7 Dental Emergency & Toothache Hotline',
  emergencyHotline: '1800-419-6784',
};

const defaultWhyChooseUs = [
  {
    title: '3D Guided Keyhole Dental Implants',
    desc: 'Swiss Straumann and Nobel Biocare implants placed with sub-millimeter computer-guided precision for instant, painless fixed teeth.',
    icon: 'Sparkles',
  },
  {
    title: 'Carl Zeiss 25x Micro-Endodontics',
    desc: 'High-magnification surgical operating microscopes allow single-visit, 100% painless root canal preservation of your natural tooth.',
    icon: 'Cpu',
  },
  {
    title: 'Board-Certified Dental Specialists',
    desc: 'Expert clinical team comprising MDS Implantologists, Orthodontists, Maxillofacial Surgeons, and Prosthodontists with 15+ years experience.',
    icon: 'ShieldCheck',
  },
  {
    title: 'Class B 7-Step Hospital Sterilization',
    desc: 'Strict European EN 13060 infection control protocol ensuring 100% sterile cross-infection barrier with fresh autoclaved instrument pouches.',
    icon: 'Heart',
  },
];

// Helper: load from localStorage or return default
function loadData(key, defaultValue) {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      const parsed = JSON.parse(stored);
      if (parsed[key] !== undefined && parsed[key] !== null) return parsed[key];
    }
  } catch (e) {
    console.error('AdminContext: Error loading data from localStorage', e);
  }
  return defaultValue;
}

// Helper: save full state to localStorage
function saveAllData(data) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  } catch (e) {
    console.error('AdminContext: Error saving data to localStorage', e);
  }
}

export const AdminProvider = ({ children }) => {
  const [hospitalInfo, setHospitalInfo] = useState(() => loadData('hospitalInfo', defaultHospitalInfo));
  const [heroContent, setHeroContent] = useState(() => loadData('heroContent', defaultHeroContent));
  const [whyChooseUs, setWhyChooseUs] = useState(() => loadData('whyChooseUs', defaultWhyChooseUs));
  const [doctors, setDoctors] = useState(() => loadData('doctors', defaultDoctors));
  const [services, setServices] = useState(() => loadData('services', defaultServices));
  const [branches, setBranches] = useState(() => loadData('branches', defaultBranches));
  const [blogPosts, setBlogPosts] = useState(() => loadData('blogPosts', defaultBlogPosts));
  const [technologies, setTechnologies] = useState(() => loadData('technologies', defaultTechnologies));
  const [beds, setBeds] = useState(() => loadData('beds', initialBedsList));
  const [wards, setWards] = useState(() => loadData('wards', initialWardsList));
  const [staff, setStaff] = useState(() => loadData('staff', initialStaffList));
  const [appointments, setAppointments] = useState(() => loadData('appointments', []));
  const [enquiries, setEnquiries] = useState(() => loadData('enquiries', []));
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    try {
      return localStorage.getItem('dentacare_admin_auth') === 'true';
    } catch {
      return false;
    }
  });

  // Persist state to localStorage on changes
  useEffect(() => {
    saveAllData({
      hospitalInfo,
      heroContent,
      whyChooseUs,
      doctors,
      services,
      branches,
      blogPosts,
      technologies,
      beds,
      wards,
      staff,
      appointments,
      enquiries,
    });
  }, [
    hospitalInfo,
    heroContent,
    whyChooseUs,
    doctors,
    services,
    branches,
    blogPosts,
    technologies,
    beds,
    wards,
    staff,
    appointments,
    enquiries,
  ]);

  // Auth Methods
  const login = (password) => {
    // Demo admin password check
    if (password === 'admin123' || password === 'dentacare2026' || password === 'admin') {
      setIsAuthenticated(true);
      try {
        localStorage.setItem('dentacare_admin_auth', 'true');
      } catch (e) {
        console.error(e);
      }
      return true;
    }
    return false;
  };

  const logout = () => {
    setIsAuthenticated(false);
    try {
      localStorage.removeItem('dentacare_admin_auth');
    } catch (e) {
      console.error(e);
    }
  };

  // Updaters for Hospital Info & Hero
  const updateHospitalInfo = (newInfo) => {
    setHospitalInfo((prev) => ({ ...prev, ...newInfo }));
  };

  const updateHeroContent = (newHero) => {
    setHeroContent((prev) => ({ ...prev, ...newHero }));
  };

  const updateWhyChooseUs = (newList) => {
    setWhyChooseUs(newList);
  };

  // Doctor CRUD
  const addDoctor = (doctor) => {
    const newDoc = { ...doctor, id: `doc-${Date.now()}` };
    setDoctors((prev) => [newDoc, ...prev]);
  };

  const updateDoctor = (id, updatedFields) => {
    setDoctors((prev) =>
      prev.map((doc) => (doc.id === id ? { ...doc, ...updatedFields } : doc))
    );
  };

  const deleteDoctor = (id) => {
    setDoctors((prev) => prev.filter((doc) => doc.id !== id));
  };

  // Service CRUD
  const addService = (service) => {
    const newSvc = {
      ...service,
      id: service.slug || `svc-${Date.now()}`,
      slug: service.slug || `svc-${Date.now()}`,
    };
    setServices((prev) => [newSvc, ...prev]);
  };

  const updateService = (id, updatedFields) => {
    setServices((prev) =>
      prev.map((svc) => (svc.id === id || svc.slug === id ? { ...svc, ...updatedFields } : svc))
    );
  };

  const deleteService = (id) => {
    setServices((prev) => prev.filter((svc) => svc.id !== id && svc.slug !== id));
  };

  // Branch CRUD
  const addBranch = (branch) => {
    const newBranch = { ...branch, id: branch.slug || `branch-${Date.now()}` };
    setBranches((prev) => [...prev, newBranch]);
  };

  const updateBranch = (id, updatedFields) => {
    setBranches((prev) =>
      prev.map((b) => (b.id === id || b.slug === id ? { ...b, ...updatedFields } : b))
    );
  };

  const deleteBranch = (id) => {
    setBranches((prev) => prev.filter((b) => b.id !== id && b.slug !== id));
  };

  // Blog CRUD
  const addBlogPost = (post) => {
    const newPost = {
      ...post,
      id: post.slug || `blog-${Date.now()}`,
      slug: post.slug || `blog-${Date.now()}`,
      date: new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }),
    };
    setBlogPosts((prev) => [newPost, ...prev]);
  };

  const updateBlogPost = (id, updatedFields) => {
    setBlogPosts((prev) =>
      prev.map((p) => (p.id === id || p.slug === id ? { ...p, ...updatedFields } : p))
    );
  };

  const deleteBlogPost = (id) => {
    setBlogPosts((prev) => prev.filter((p) => p.id !== id && p.slug !== id));
  };

  // Technology CRUD
  const addTechnology = (tech) => {
    const newTech = {
      ...tech,
      id: tech.slug || `tech-${Date.now()}`,
      slug: tech.slug || `tech-${Date.now()}`,
    };
    setTechnologies((prev) => [...prev, newTech]);
  };

  const updateTechnology = (id, updatedFields) => {
    setTechnologies((prev) =>
      prev.map((t) => (t.id === id || t.slug === id ? { ...t, ...updatedFields } : t))
    );
  };

  const deleteTechnology = (id) => {
    setTechnologies((prev) => prev.filter((t) => t.id !== id && t.slug !== id));
  };

  // Bed & Operatory Operations
  const updateBedStatus = (bedId, status, patientInfo = {}) => {
    setBeds((prev) =>
      prev.map((bed) => {
        if (bed.id === bedId) {
          if (status === 'available') {
            return {
              ...bed,
              status: 'available',
              patientName: '',
              patientId: '',
              admittedDate: '',
              attendingDoctor: '',
              notes: 'Cleaned, autoclave sanitized and ready for next patient.',
            };
          } else {
            return {
              ...bed,
              status: status,
              patientName: patientInfo.patientName || bed.patientName,
              patientId: patientInfo.patientId || bed.patientId,
              admittedDate: patientInfo.admittedDate || new Date().toISOString().split('T')[0],
              attendingDoctor: patientInfo.attendingDoctor || bed.attendingDoctor,
              rehabSupport: patientInfo.rehabSupport || bed.rehabSupport,
              notes: patientInfo.notes || bed.notes,
            };
          }
        }
        return bed;
      })
    );
  };

  const addBed = (bedData) => {
    const newBed = {
      ...bedData,
      id: `op-${Date.now()}`,
      status: bedData.status || 'available',
    };
    setBeds((prev) => [...prev, newBed]);
  };

  const deleteBed = (bedId) => {
    setBeds((prev) => prev.filter((b) => b.id !== bedId));
  };

  const addWard = (wardData) => {
    const newWard = {
      ...wardData,
      id: `suite-${Date.now()}`,
      totalBeds: parseInt(wardData.totalBeds, 10) || 0,
      occupiedBeds: 0,
    };
    setWards((prev) => [...prev, newWard]);
  };

  // Staff CRUD
  const addStaff = (staffMember) => {
    const newMember = {
      ...staffMember,
      id: `stf-${Date.now()}`,
      dutyStatus: staffMember.dutyStatus || 'on-duty',
    };
    setStaff((prev) => [newMember, ...prev]);
  };

  const updateStaff = (id, updatedFields) => {
    setStaff((prev) =>
      prev.map((s) => (s.id === id ? { ...s, ...updatedFields } : s))
    );
  };

  const deleteStaff = (id) => {
    setStaff((prev) => prev.filter((s) => s.id !== id));
  };

  // Appointments & Enquiries
  const addAppointment = (appointment) => {
    const newApt = {
      ...appointment,
      id: `apt-${Date.now()}`,
      createdAt: new Date().toISOString(),
      status: 'confirmed',
    };
    setAppointments((prev) => [newApt, ...prev]);
    return newApt;
  };

  const updateAppointmentStatus = (id, status) => {
    setAppointments((prev) =>
      prev.map((a) => (a.id === id ? { ...a, status } : a))
    );
  };

  const deleteAppointment = (id) => {
    setAppointments((prev) => prev.filter((a) => a.id !== id));
  };

  const addEnquiry = (enquiry) => {
    const newEnq = {
      ...enquiry,
      id: `enq-${Date.now()}`,
      createdAt: new Date().toISOString(),
      status: 'pending',
    };
    setEnquiries((prev) => [newEnq, ...prev]);
    return newEnq;
  };

  const updateEnquiryStatus = (id, status) => {
    setEnquiries((prev) =>
      prev.map((e) => (e.id === id ? { ...e, status } : e))
    );
  };

  const deleteEnquiry = (id) => {
    setEnquiries((prev) => prev.filter((e) => e.id !== id));
  };

  // Reset to Factory Defaults
  const resetToFactoryDefaults = () => {
    setHospitalInfo(defaultHospitalInfo);
    setHeroContent(defaultHeroContent);
    setWhyChooseUs(defaultWhyChooseUs);
    setDoctors(defaultDoctors);
    setServices(defaultServices);
    setBranches(defaultBranches);
    setBlogPosts(defaultBlogPosts);
    setTechnologies(defaultTechnologies);
    setBeds(initialBedsList);
    setWards(initialWardsList);
    setStaff(initialStaffList);
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch (e) {
      console.error(e);
    }
  };

  const value = {
    hospitalInfo,
    heroContent,
    whyChooseUs,
    doctors,
    services,
    branches,
    blogPosts,
    technologies,
    beds,
    wards,
    staff,
    appointments,
    enquiries,
    isAuthenticated,
    login,
    logout,
    updateHospitalInfo,
    updateHeroContent,
    updateWhyChooseUs,
    addDoctor,
    updateDoctor,
    deleteDoctor,
    addService,
    updateService,
    deleteService,
    addBranch,
    updateBranch,
    deleteBranch,
    addBlogPost,
    updateBlogPost,
    deleteBlogPost,
    addTechnology,
    updateTechnology,
    deleteTechnology,
    updateBedStatus,
    addBed,
    deleteBed,
    addWard,
    addStaff,
    updateStaff,
    deleteStaff,
    addAppointment,
    updateAppointmentStatus,
    deleteAppointment,
    addEnquiry,
    updateEnquiryStatus,
    deleteEnquiry,
    resetToFactoryDefaults,
  };

  return <AdminContext.Provider value={value}>{children}</AdminContext.Provider>;
};

export const useAdmin = () => {
  const context = useContext(AdminContext);
  return context;
};

export default AdminContext;
