import React, { useState, useEffect } from 'react';
import Lenis from 'lenis';
import { EmergencyBar } from './components/Navbar/EmergencyBar';
import { Navbar } from './components/Navbar/Navbar';
import { Hero } from './components/Hero/Hero';
import { EmergencyRibbon } from './components/EmergencyRibbon/EmergencyRibbon';
import { SymptomNavigator } from './components/SymptomNavigator/SymptomNavigator';
import { SurgeonSection } from './components/Surgeon/SurgeonSection';
import { SurgeryComparison } from './components/Comparison/SurgeryComparison';
import { SpecialtiesGrid } from './components/Specialties/SpecialtiesGrid';
import { ScrollySection } from './components/Scrollytelling/ScrollySection';
import { InsuranceSection } from './components/Insurance/InsuranceSection';
import { FacilitiesSection } from './components/HospitalFacilities/FacilitiesSection';
import { ReviewsSection } from './components/Reviews/ReviewsSection';
import { Footer } from './components/Footer/Footer';
import { AppointmentModal } from './components/Modal/AppointmentModal';
import { ParallaxBanner } from './components/ui/ParallaxBanner';
import { MessageCircle, Phone } from 'lucide-react';
import { HOSPITAL_METADATA, HOSPITAL_IMAGES } from './data/hospitalData';

export const App: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);

  // Smooth inertia scrolling with Lenis
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.0,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-800 font-sans antialiased selection:bg-[#0B57D0] selection:text-white relative">
      
      {/* 1. Healthcare Utility Topbar */}
      <EmergencyBar />

      {/* 2. Executive Hospital Header */}
      <Navbar onBookClick={() => setModalOpen(true)} />

      {/* 3. Full-Bleed 4K Parallax Hospital Hero + Instant OPD Token Form */}
      <Hero onBookClick={() => setModalOpen(true)} />

      {/* 4. Rapid Triage, Second Opinion & Cashless Strip */}
      <EmergencyRibbon />

      {/* 5. Symptom-to-Treatment Triage Navigator (with 4K Visual Headers) */}
      <SymptomNavigator onBookClick={() => setModalOpen(true)} />

      {/* 4K HD Scroll-Parallax Hospital Interlude #1: Modular Surgical Theatre */}
      <ParallaxBanner
        image={HOSPITAL_IMAGES.operationTheatre}
        eyebrow="Modular HEPA Surgical Theatre"
        headline="German Diode Laser & 5mm Keyhole Precision"
        subline="Zero scalpel cuts, near-zero bleeding, and same-day discharge under Dr. B. Raghuram Reddy."
        ctaLabel="Book Surgical Evaluation"
        onCtaClick={() => setModalOpen(true)}
      />

      {/* 6. Chief Surgeon Profile & Daily OPD Schedule */}
      <SurgeonSection onBookClick={() => setModalOpen(true)} />

      {/* 7. Advanced Laser vs. Traditional Surgery Comparison */}
      <SurgeryComparison />

      {/* 8. Specialized Surgical & Outpatient Departments */}
      <SpecialtiesGrid />

      {/* 4K HD Scroll-Parallax Hospital Interlude #2: Calm Inpatient Recovery */}
      <ParallaxBanner
        image={HOSPITAL_IMAGES.wardCorridor}
        eyebrow="24/7 Inpatient & Daycare Suites"
        headline="Morning Admission. Home Same Evening."
        subline="Air-conditioned daylight suites with compassionate 1:1 nursing care and transparent fixed packages."
        ctaLabel="Verify Cashless Coverage"
        ctaHref="#insurance"
      />

      {/* 9. 24-Hour Daycare Surgery Protocol (4K Photo Steps) */}
      <ScrollySection />

      {/* 10. Interactive Cashless Insurance & TPA Search Desk */}
      <InsuranceSection />

      {/* 11. 4K Hospital Infrastructure & Campus Safety Gallery */}
      <FacilitiesSection />

      {/* 4K HD Scroll-Parallax Hospital Interlude #3: Modern Hospital Building */}
      <ParallaxBanner
        image={HOSPITAL_IMAGES.hospitalExterior}
        eyebrow="Trusted Across Secunderabad & Ghatkesar"
        headline="4.9★ Rated Care Near Yamnampet Bridge"
        subline="Open Monday through Sunday (7:30 AM – 11:00 PM) with round-the-clock surgical support."
        ctaLabel="Chat With Doctor on WhatsApp"
        ctaHref={HOSPITAL_METADATA.whatsappUrl}
        heightClass="h-[280px] sm:h-[320px]"
      />

      {/* 12. Filterable Verified Patient Testimonials */}
      <ReviewsSection />

      {/* 13. Interactive Leaflet Campus Map & Streamlined Footer */}
      <Footer />

      {/* Appointment Booking Modal */}
      <AppointmentModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />

      {/* Floating Bottom Quick Action Pills */}
      <div className="fixed bottom-5 right-5 z-40 flex flex-col gap-2.5">
        <a
          href={HOSPITAL_METADATA.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Direct WhatsApp Consultation"
          className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#16A34A] hover:bg-[#15803D] text-white font-bold text-xs shadow-lg transition-all hover:scale-105 active:scale-95"
        >
          <MessageCircle className="w-4 h-4 text-white" />
          <span className="hidden sm:inline">WhatsApp Doctor</span>
        </a>

        <a
          href={`tel:${HOSPITAL_METADATA.phoneClean}`}
          aria-label="Call Hospital Desk"
          className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#0B57D0] hover:bg-[#0842A0] text-white font-bold text-xs shadow-lg transition-all hover:scale-105 active:scale-95"
        >
          <Phone className="w-4 h-4 text-white" />
          <span className="hidden sm:inline">{HOSPITAL_METADATA.phone}</span>
        </a>
      </div>

    </div>
  );
};

export default App;
