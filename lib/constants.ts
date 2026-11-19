/* ==========================================================================
   AURORA DENTAL STUDIO — Shared constants
   ========================================================================== */

export const SITE = {
  name: "AURORA Dental Studio",
  title: "AURORA Dental Studio | Modern Dentistry",
  description:
    "Modern, personalized dental care designed around your comfort and confidence.",
} as const;

/**
 * Brand palette mirrored from CSS variables in globals.css.
 * Kept here so it can be consumed from JS/TS (e.g. Three.js materials).
 */
export const COLORS = {
  cream: "#F4F1EB",
  ink: "#101820",
  white: "#FFFFFF",
  beige: "#E8E2D8",
  gold: "#B99A6B",
  muted: "#6B7280",
} as const;

/**
 * Path to the 3D tooth model (served from /public). Centralized so the asset
 * can be swapped for any artist-authored GLB without touching the components.
 */
export const TOOTH_MODEL_PATH = "/models/tooth.glb";

/**
 * Planned page sections, in order.
 */
export const SECTIONS = [
  { id: "hero", label: "Home" },
  { id: "brand-statement", label: "About" },
  { id: "trust-statistics", label: "Trust" },
  { id: "treatments", label: "Treatments" },
  { id: "featured-treatment", label: "Featured" },
  { id: "before-after", label: "Results" },
  { id: "doctor", label: "Doctor" },
  { id: "why-choose-us", label: "Why Us" },
  { id: "clinic-experience", label: "Experience" },
  { id: "testimonials", label: "Testimonials" },
  { id: "patient-journey", label: "Journey" },
  { id: "booking", label: "Booking" },
  { id: "emergency-cta", label: "Emergency" },
  { id: "contact", label: "Contact" },
  { id: "faq", label: "FAQ" },
  { id: "final-cta", label: "Get Started" },
] as const;

export type SectionId = (typeof SECTIONS)[number]["id"];

/** Primary navbar links. */
export const NAV_LINKS = [
  { label: "About", href: "#brand-statement" },
  { label: "Treatments", href: "#treatments" },
  { label: "Results", href: "#before-after" },
  { label: "Doctor", href: "#doctor" },
  { label: "Clinic", href: "#clinic-experience" },
] as const;

/** Trust statistics (clinical & practice benchmarks). `value` is the count-up target. */
export const STATS = [
  { value: 15, decimals: 0, suffix: "+", label: "Years Practice" },
  { value: 12, decimals: 0, suffix: "K+", label: "Procedures Completed" },
  { value: 4.9, decimals: 1, suffix: "/5", label: "Patient Rating" },
  { value: 100, decimals: 0, suffix: "%", label: "Sterilization Protocol" },
] as const;

/** Treatments shown as an editorial interactive list. */
export const TREATMENTS = [
  {
    number: "01",
    title: "Cosmetic Dentistry",
    description:
      "Veneers, bonding and full smile design tailored to your features.",
  },
  {
    number: "02",
    title: "Dental Implants",
    description:
      "Permanent, natural-looking replacements for missing teeth.",
  },
  {
    number: "03",
    title: "Teeth Whitening",
    description:
      "Professional whitening for a brighter, more confident smile.",
  },
  {
    number: "04",
    title: "Orthodontics",
    description:
      "Clear aligners and modern braces for beautifully aligned teeth.",
  },
  {
    number: "05",
    title: "General Dentistry",
    description:
      "Routine check-ups, cleanings and preventive care for the whole family.",
  },
  {
    number: "06",
    title: "Pediatric Dentistry",
    description:
      "Gentle, reassuring dental care designed for younger patients.",
  },
] as const;

/**
 * Doctor profile — Registered Dental Surgeon (Dentists Act, 1948 compliant).
 */
export const DOCTOR = {
  name: "Dr. Ahmed Hassan",
  role: "Cosmetic & Implant Dentist",
  monogram: "AH",
  image: "/images/doctor.png",
  credentials: [
    "BDS, MDS (Prosthodontics)",
    "Reg. No. PDC/18452-A",
    "15+ Years Clinical Practice",
    "Fellow, ICOI",
  ] as const,
  regCouncil: "Puducherry State Dental Council (PDC)",
  regNumber: "PDC/18452-A",
  quote:
    "My goal is to make every patient feel informed, comfortable, and confident through evidence-based, compassionate care.",
};

/**
 * Clinic gallery panels with high-resolution PNG photography.
 */
export const CLINIC_IMAGES = [
  { number: "01", label: "Reception", image: "/images/reception.png" },
  { number: "02", label: "Treatment Room", image: "/images/treatment.png" },
  { number: "03", label: "Waiting Area", image: "/images/waiting.png" },
  { number: "04", label: "Equipment", image: "/images/equipment.png" },
  { number: "05", label: "Interior", image: "/images/interior.png" },
] as const;

/** Aggregate review summary (demo). */
export const REVIEW_SUMMARY = {
  rating: "4.9",
  outOf: "5",
  count: "300+",
} as const;

/** Fictional demo testimonials — not real patients. */
export const TESTIMONIALS = [
  {
    quote:
      "From the consultation to the final treatment, everything felt thoughtful, professional, and comfortable.",
    name: "Sarah M.",
    detail: "Smile Makeover",
  },
  {
    quote:
      "I never thought a dental visit could feel this calm. The whole experience was effortless from start to finish.",
    name: "James R.",
    detail: "Dental Implants",
  },
  {
    quote:
      "The attention to detail is unlike anywhere I have been. My results look completely natural.",
    name: "Leila K.",
    detail: "Porcelain Veneers",
  },
  {
    quote:
      "Warm, precise and genuinely reassuring. I finally look forward to my appointments.",
    name: "Daniel P.",
    detail: "General Dentistry",
  },
  {
    quote:
      "They explained every step clearly and made sure I felt confident throughout. Truly exceptional care.",
    name: "Nour A.",
    detail: "Teeth Whitening",
  },
] as const;

/** Clinic contact details (Registered Dental Establishment, India). */
export const CLINIC = {
  name: "AURORA Dental Studio",
  address: "White Town, Puducherry 605001, India",
  hours: [
    { days: "Monday – Saturday", time: "10:00 AM – 8:00 PM" },
    { days: "Sunday", time: "10:00 AM – 2:00 PM" },
  ],
  phone: "+91 413 222 4567",
  phoneHref: "tel:+914132224567",
  email: "care@auroradentalstudio.com",
  grievanceEmail: "grievance@auroradentalstudio.com",
  whatsapp: "https://wa.me/914132224567",
  directions:
    "https://www.google.com/maps/search/?api=1&query=White+Town+Puducherry+India",
  stateRegistration: "PDC/EST/2026/PDY-0428",
} as const;

/** FAQ items (demo, non-medical). */
export const FAQ_ITEMS = [
  {
    q: "Do you accept emergency appointments?",
    a: "Yes — we keep dedicated slots each day for urgent care. Call us and we will see you as soon as possible.",
  },
  {
    q: "How long does a consultation take?",
    a: "Most first consultations take around 30–45 minutes, including a full assessment and time to answer all of your questions.",
  },
  {
    q: "Do you offer payment plans?",
    a: "We do. Flexible, interest-free plans are available for many treatments, and our team will walk you through the options.",
  },
  {
    q: "Do you treat children?",
    a: "Absolutely. Our team provides gentle, friendly care designed to help younger patients feel completely at ease.",
  },
  {
    q: "How should I prepare for my first visit?",
    a: "Simply bring any previous records and a list of questions. Arriving a few minutes early lets you complete a short form.",
  },
] as const;

/** Footer navigation + legal links + socials. */
export const FOOTER_LINKS = [
  { label: "About", href: "#brand-statement" },
  { label: "Treatments", href: "#treatments" },
  { label: "Results", href: "#before-after" },
  { label: "Doctor", href: "#doctor" },
  { label: "Clinic", href: "#clinic-experience" },
  { label: "Contact", href: "#contact" },
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms of Care", href: "/terms" },
] as const;

export const SOCIAL_LINKS = [
  { label: "Instagram", href: "https://instagram.com" },
  { label: "Facebook", href: "https://facebook.com" },
  { label: "WhatsApp", href: "https://wa.me/914132224567" },
] as const;

/** Patient journey timeline steps. */
export const JOURNEY_STEPS = [
  {
    number: "01",
    title: "Consultation",
    description: "We listen, examine, and understand your goals together.",
  },
  {
    number: "02",
    title: "Personalized Plan",
    description: "A clear, tailored plan designed entirely around you.",
  },
  {
    number: "03",
    title: "Treatment",
    description: "Precise, comfortable care at every single visit.",
  },
  {
    number: "04",
    title: "Follow-up",
    description: "We check in to make sure your results last.",
  },
  {
    number: "05",
    title: "Your New Smile",
    description: "Confidence you can genuinely see and feel.",
  },
] as const;

/** Booking form option lists matching the site's 6 core treatments. */
export const TREATMENT_OPTIONS = [
  "Cosmetic Dentistry",
  "Dental Implants",
  "Teeth Whitening",
  "Orthodontics",
  "General Dentistry",
  "Pediatric Dentistry",
] as const;

export const TIME_OPTIONS = [
  "10:00 AM",
  "11:30 AM",
  "01:00 PM",
  "03:00 PM",
  "05:00 PM",
  "07:00 PM",
] as const;

/** "Why choose us" principles (scroll-activated one at a time). */
export const PRINCIPLES = [
  {
    number: "01",
    title: "Experience",
    description:
      "Fifteen years spent refining every detail of modern, considered dentistry.",
  },
  {
    number: "02",
    title: "Precision",
    description:
      "Digital planning and meticulous technique guide everything we do.",
  },
  {
    number: "03",
    title: "Comfort",
    description:
      "A calm, unhurried environment built entirely around how you feel.",
  },
  {
    number: "04",
    title: "Personalized Care",
    description:
      "Every plan is shaped around your goals and lifestyle — never a template.",
  },
] as const;

/**
 * Before / After showcase cases (demo content — illustrative, not real
 * patients). `before` / `after` are CSS gradients used as art-directed
 * placeholder imagery until real clinical photography is provided.
 */
export const BEFORE_AFTER_CASES = [
  {
    id: "veneers",
    treatment: "Porcelain Veneers",
    description:
      "Hand-crafted veneers that refine shape and shade for a flawless, natural finish.",
    before: "/images/veneers_before.png",
    after: "/images/veneers_after.png",
  },
  {
    id: "makeover",
    treatment: "Smile Makeover",
    description:
      "A complete transformation balancing proportion, alignment and colour.",
    before: "/images/makeover_before.png",
    after: "/images/makeover_after.png",
  },
  {
    id: "whitening",
    treatment: "Teeth Whitening",
    description:
      "Professional whitening that lifts years of staining in a single visit.",
    before: "/images/whitening_before.png",
    after: "/images/whitening_after.png",
  },
] as const;
