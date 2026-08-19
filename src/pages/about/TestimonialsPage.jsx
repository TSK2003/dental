import React from 'react';
import PageHero from '../../components/common/PageHero';
import { Star, Quote, Heart, Sparkles, ShieldCheck, Smile } from 'lucide-react';

const TestimonialsPage = () => {
  const testimonials = [
    {
      name: 'Karthik Narayanan (38 Yrs)',
      condition: 'All-on-4 Guided Dental Implants (Full Upper & Lower Arch)',
      surgeon: 'Dr. Arthur Vance, MDS, FICOI (USA)',
      comment: 'I struggled with failing teeth and severe bone loss for over 8 years. Dr. Arthur and his surgical team used 3D CBCT computer guidance to place 4 implants and fixed a permanent zirconia bridge in just 48 hours. I can now chew crunchy apples and almonds with zero pain!',
      rating: 5
    },
    {
      name: 'Deepika Sunder (26 Yrs)',
      condition: 'Invisalign® Comprehensive Clear Aligners',
      surgeon: 'Dr. Elena Rostova, MDS, MOrth RCS',
      comment: 'As a corporate software consultant, I did not want metal braces. Invisalign clear aligners at DentaCare completely straightened my overlapping front teeth in 9 months. The 3D iTero optical scan preview was so accurate and exciting!',
      rating: 5
    },
    {
      name: 'Vikramaditya S. (45 Yrs)',
      condition: 'Single-Sitting Carl Zeiss Microscopic Root Canal',
      surgeon: 'Dr. Sarah Jenkins, MDS (Endodontics)',
      comment: 'I woke up with unbearable throbbing tooth pain. Dr. Sarah performed a single-sitting root canal under a 25x Carl Zeiss microscope. It was 100% painless, took only 45 minutes, and saved my natural molar from extraction.',
      rating: 5
    },
    {
      name: 'Anandhi Rajan (31 Yrs)',
      condition: '8 Minimal-Prep E.max® Porcelain Veneers',
      surgeon: 'Dr. Claire Moreau, MDS (Smile Architecture)',
      comment: 'Years of fluorosis and chipped edges made me hide my smile in photos. DentaCare used Digital Smile Design (DSD) to create bespoke ultra-thin veneers that gave me a radiant celebrity smile without grinding down my enamel!',
      rating: 5
    }
  ];

  return (
    <div className="bg-slate-50 text-slate-800 antialiased space-y-12 pb-16">
      <PageHero
        title="Patient Smile Transformations & Reviews"
        subtitle="Read firsthand experiences of patients who restored their chewing function, straight teeth, and dazzling smiles at DentaCare."
        breadcrumb={[{ label: 'About', path: '/about' }, { label: 'Testimonials' }]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((t, idx) => (
            <div key={idx} className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm space-y-4 flex flex-col justify-between hover:shadow-xl hover:border-cyan-300 transition-all">
              <div className="space-y-3">
                <div className="flex items-center space-x-1 text-amber-400">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>
                <p className="text-xs sm:text-sm text-slate-700 italic leading-relaxed">
                  "{t.comment}"
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <h4 className="text-xs font-bold text-slate-950 font-heading">{t.name}</h4>
                  <p className="text-[11px] text-cyan-600 font-semibold">{t.condition}</p>
                </div>
                <span className="text-[10px] text-slate-500 font-medium">Specialist: {t.surgeon.split(',')[0]}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialsPage;
