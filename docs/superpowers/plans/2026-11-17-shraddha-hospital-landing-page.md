# Shraddha Hospital Landing Page Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build an ultra-modern, production-ready, human-crafted landing page for Shraddha Hospital (Dr. B. Raghuram Reddy) using Template 01 (The Clinical Vanguard), featuring 3D interactive WebGL viewports, smooth scroll motion with parallax images, full hospital data integration, and an interactive dark-themed map in the footer.

**Architecture:** Client-side React 19 + TypeScript + Vite architecture styled with Tailwind CSS v4 / PostCSS. Incorporates Three.js for interactive 3D WebGL surgery/anatomy rendering, Lenis for smooth inertia scrolling, Framer Motion for scroll-driven parallax and entrance dynamics, and Leaflet with dark-mode tiles for the interactive location map.

**Tech Stack:** React 19, TypeScript, Vite, Tailwind CSS, Lucide React, Three.js, Lenis, Framer Motion, Leaflet / React-Leaflet.

**Spec:** `docs/superpowers/specs/2026-11-17-shraddha-hospital-design.md`

## Global Constraints
- Exact Hospital Name: SHRADDHA HOSPITAL
- Lead Surgeon: Dr. B. Raghuram Reddy, MBBS, MS General, Laser & Laparoscopic Surgeon
- Address: Near Bridge, Yamnampet, Rampally, Secunderabad, Telangana 501302
- Phone: +91 99895 13630 (Calls and WhatsApp direct)
- Hours: Mon – Sun 7:30 AM – 11:00 PM with 24/7 Inpatient & Emergency Support
- Rating: 4.9/5 from 100+ verified Google & Justdial patient reviews
- Zero generic AI stock vibes; high medical specificity and editorial precision throughout.

## Review Focus
- Performance: WebGL canvas properly cleans up on unmount without memory leaks or render stalling.
- Responsiveness: Flawless layout on mobile (375px), tablet (768px), and ultra-wide desktop (1920px).
- Accessibility: High color contrast, visible focus rings, aria labels on interactive buttons and booking inputs.
- Map resilience: Interactive map loads fallback gracefully if tile servers are offline or slow.
- Motion smoothness: Parallax scroll does not cause layout shifts or frame stuttering.

---

### Task 1: Project Scaffolding & Dependencies Setup
- [ ] Initialize Vite + React + TypeScript project in workspace.
- [ ] Install core dependencies: `tailwindcss`, `@tailwindcss/vite` (or standard Tailwind + PostCSS), `lucide-react`, `three`, `@types/three`, `lenis`, `framer-motion`, `leaflet`, `@types/leaflet`.
- [ ] Configure Tailwind CSS theme tokens for "The Clinical Vanguard" (Navy `#060E1C`, Surgical Cyan `#00D2B4`, Deep Slate `#0C1A30`).
- [ ] Set up index.html with Google Fonts (*Plus Jakarta Sans*, *Inter*, *JetBrains Mono*) and proper hospital SEO metadata.

### Task 2: Core Data Architecture & Types
- [ ] Create `src/types/hospital.ts` defining data types for Doctor Profile, Specialties, Procedures, Pricing Packages, Testimonials, and Facility Coordinates.
- [ ] Create `src/data/hospitalData.ts` with all verified verified hospital data:
  - Dr. B. Raghuram Reddy clinical credentials and bio
  - 4 major specialty clusters with exact procedure breakdowns (Laser Proctology, Laparoscopy, General Surgery, Diagnostics)
  - Emergency hotline, WhatsApp links, insurance TPA partners list
  - Authentic patient testimonials from Google & Justdial

### Task 3: Interactive 3D WebGL Surgical Viewport Component
- [ ] Create `src/components/ThreeCanvas/SurgeryViewport.tsx` using Three.js.
- [ ] Implement an interactive, procedural 3D model representing the laser surgical precision system / laparoscopic keyhole instrument with glowing fiber-optic tip and subtle rotating anatomical rings.
- [ ] Add mouse/touch gyro tracking (interactive tilt on hover).
- [ ] Connect scroll progression to camera zoom, rotation, and focal depth.
- [ ] Ensure proper WebGL resize handlers and memory disposal on component unmount.

### Task 4: Navigation & Emergency Top Bar
- [ ] Create `src/components/Navbar/EmergencyBar.tsx` featuring live casualty status, direct WhatsApp button, 7:30 AM–11:00 PM OPD timing, and phone number dialer.
- [ ] Create `src/components/Navbar/Navbar.tsx` with hospital branding ("SHRADDHA HOSPITAL"), smooth scroll anchor navigation, mobile drawer menu, and primary "Book Consultation" CTA.

### Task 5: Hero Section with Quick Triage & Appointment Booking Dock
- [ ] Create `src/components/Hero/Hero.tsx` featuring:
  - Bold clinical typography ("Painless Laser Surgery. Exceptional Surgical Mastery.")
  - Accreditation badges (4.9★ rating, 24-hr recovery guarantee)
  - Quick action appointment dock (Specialty select, Date picker, Direct WhatsApp / Call booking trigger)
  - Seamless integration with the 3D WebGL viewport

### Task 6: Specialties, Laser Proctology & Procedures Showcase
- [ ] Create `src/components/Specialties/SpecialtiesGrid.tsx` with interactive procedure tabs:
  - Painless Laser Proctology (Piles, Fissures, Fistula, Pilonidal Sinus) with 24-hr recovery callout
  - Laparoscopic Surgery (Gallbladder stones, Appendix, Hernia)
  - General & Family Planning (Hydrocele, Lipoma, Vasectomy, Tubectomy)
  - General Medicine & Diagnostics
- [ ] Include animated procedure feature cards with parallax depth and clinical benefits tags.

### Task 7: Chief Surgeon Spotlight & Clinical Credibility
- [ ] Create `src/components/Surgeon/SurgeonSection.tsx` highlighting Dr. B. Raghuram Reddy (MBBS, MS).
- [ ] Detail surgical philosophy, bedside care, fellowship experience, and verified patient satisfaction.
- [ ] Include scroll-driven image motion with floating credential badges ("15+ Years Surgical Experience", "Over 10,000+ Successful Procedures").

### Task 8: Hospital Infrastructure, Amenities & Cashless Insurance TPA
- [ ] Create `src/components/HospitalFacilities/FacilitiesSection.tsx` showcasing:
  - Modular Operation Theatre with HEPA filtration
  - Inpatient Private & Semi-Private Recovery Rooms
  - Wheelchair accessibility, ramp, patient parking
  - Safe medication disposal
- [ ] Create `src/components/Insurance/InsuranceSection.tsx` with cashless insurance TPA partner logos and transparent fixed package guarantee.

### Task 9: Patient Testimonials & Google Review Social Proof
- [ ] Create `src/components/Reviews/ReviewsSection.tsx` featuring verified 4.9★ patient reviews from Google and Justdial.
- [ ] Include patient recovery stories highlighting painless laser surgery, affordable billing, and Dr. Raghuram Reddy's compassionate guidance.

### Task 10: Interactive Dark-Mode Map & Location Footer
- [ ] Create `src/components/Map/HospitalMap.tsx` using Leaflet with dark-mode map tiles.
- [ ] Pin exact location: Near Bridge, Yamnampet, Rampally, Secunderabad (501302).
- [ ] Add interactive custom hospital marker with popup, live distance, and 1-click Google Maps Navigation button.
- [ ] Create `src/components/Footer/Footer.tsx` with full operating hours, emergency lines, parking directions, and copyright notices.

### Task 11: Smooth Inertia Scroll (Lenis) & Parallax Motion Integration
- [ ] Set up Lenis smooth scroll provider in `src/App.tsx`.
- [ ] Add scroll-linked motion wrappers (`Framer Motion`) on all photography and section headings.
- [ ] Test build, run typecheck, and verify 0 warnings/errors.
