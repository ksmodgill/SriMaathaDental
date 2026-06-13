import {
  Baby,
  BadgeCheck,
  CalendarCheck,
  Clock,
  HeartPulse,
  MapPin,
  MessageCircle,
  Phone,
  ShieldCheck,
  Sparkles,
  Star,
  Stethoscope,
  Syringe,
  Users,
} from "lucide-react";

export const clinic = {
  name: "Sri Maatha Multispeciality Dental Hospital",
  doctor: "Dr. B. Hemareddy Vivek Reddy",
  doctorRole: "Founder & Chief Dentist",
  city: "Karimnagar",
  state: "Telangana",
  address: {
    streetAddress:
      "Kubra Apartment, Doctor Street, Beside Sudha Nursing Home, Azmath Pura",
    addressLocality: "Karimnagar",
    addressRegion: "Telangana",
    postalCode: "505001",
    addressCountry: "IN",
  },
  fullAddress:
    "Kubra Apartment, Doctor Street, Beside Sudha Nursing Home, Azmath Pura, Karimnagar, Telangana 505001",
  phone: "+91 9390550339",
  phoneHref: "tel:+919390550339",
  emergencyPhone: "+91 8328148385",
  emergencyHref: "tel:+918328148385",
  whatsappHref:
    "https://wa.me/919390550339?text=Hello%20Sri%20Maatha%20Dental%20Hospital%2C%20I%20would%20like%20guidance%20for%20a%20dental%20concern.",
  googleBusinessHref: "https://share.google/pXj9jPP5EpSLCfQ5Q",
  mapsHref:
    "https://www.google.com/maps/search/?api=1&query=Sri%20Maatha%20Multispeciality%20Dental%20Hospital%2C%20Kubra%20Apartment%2C%20Doctor%20Street%2C%20Azmath%20Pura%2C%20Karimnagar%2C%20Telangana%20505001",
  directionsHref:
    "https://www.google.com/maps/dir/?api=1&destination=Sri%20Maatha%20Multispeciality%20Dental%20Hospital",
  email: "srimaathadentalhospital@gmail.com",
  emailHref: "mailto:srimaathadentalhospital@gmail.com",
  established: "2021",
  rating: "5.0",
  reviewCount: "21",
  weekdayHours: "Monday - Saturday, 9:00 AM - 9:00 PM",
  sundayHours: "Sunday: Appointment Basis",
  emergencyHours: "Emergency: 24/7",
};

export const navItems = [
  { label: "Doctor", href: "#doctor" },
  { label: "Treatments", href: "#treatments" },
  { label: "Why Choose Us", href: "#why-choose-us" },
  { label: "Reviews", href: "#reviews" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export const heroTrust = [
  "15,000+ Smiles Restored",
  "10+ Years Clinical Experience",
  "5.0 Google Rating",
  "Emergency Dental Support",
];

export const trustMetrics = [
  {
    value: "15,000+",
    label: "Smiles Restored",
    description:
      "Care delivered across check-ups, pain relief, smile improvement, braces, implants and family dental visits.",
    icon: Sparkles,
  },
  {
    value: "10+",
    label: "Years Clinical Experience",
    description:
      "Experience that helps patients understand the problem, the options and the right timing for treatment.",
    icon: BadgeCheck,
  },
  {
    value: "5",
    label: "Specialist Dentists",
    description:
      "Specialist support for different needs, from root canals and braces to implants, children and cosmetic care.",
    icon: Users,
  },
  {
    value: "5.0",
    label: "Google Rating",
    description:
      "A visible trust signal for Karimnagar patients comparing dental hospitals before they call or visit.",
    icon: Star,
  },
  {
    value: "24/7",
    label: "Emergency Support",
    description:
      "Guidance for severe tooth pain, swelling, dental injury and urgent concerns that should not wait.",
    icon: HeartPulse,
  },
];

export const values = [
  "Gentle Care",
  "Transparency",
  "Clinical Excellence",
  "Affordability",
];

export const whyChoose = [
  {
    title: "Doctor-Led Care",
    description:
      "Dr. B. Hemareddy Vivek Reddy guides care with clear explanations, practical options and patient comfort in mind.",
    icon: Stethoscope,
  },
  {
    title: "Multispeciality Dental Treatment",
    description:
      "Patients can discuss routine care, cosmetic dentistry, braces, implants, root canals, oral surgery and children's dentistry in one place.",
    icon: Stethoscope,
  },
  {
    title: "Transparent Treatment Planning",
    description:
      "The team explains what is needed, why it is recommended and what can be planned before treatment begins.",
    icon: ShieldCheck,
  },
  {
    title: "Technology-Supported Care",
    description:
      "Technology-supported evaluation helps make diagnosis and treatment planning clearer for the patient and doctor.",
    icon: Sparkles,
  },
  {
    title: "5 Specialist Dentists",
    description:
      "Specialist support allows patients to receive focused care for different dental needs.",
    icon: Users,
  },
  {
    title: "Emergency Dental Support",
    description:
      "Patients with sudden pain, swelling or injury can call for timely guidance and emergency dental support.",
    icon: Phone,
  },
  {
    title: "Family-Friendly Dentistry",
    description:
      "Care is structured for children, parents, working professionals and older family members who need clear, calm guidance.",
    icon: Baby,
  },
  {
    title: "Affordable Care Approach",
    description:
      "Treatment choices are discussed with attention to clinical need, comfort, timing and affordability.",
    icon: BadgeCheck,
  },
];

export const treatments = [
  {
    title: "Dental Implants",
    seoTitle: "Dental Implants in Karimnagar",
    description:
      "For patients with missing teeth or loose replacements, implant planning helps assess bone support, bite comfort and long-term tooth replacement options.",
    benefit:
      "Designed to restore chewing confidence and a stable smile when implants are clinically suitable.",
    cta: "Ask About Implant Options",
    icon: Syringe,
  },
  {
    title: "Root Canal Treatment",
    seoTitle: "Root Canal Treatment in Karimnagar",
    description:
      "For deep decay, infection or severe tooth pain, root canal treatment is planned to relieve the problem while saving the natural tooth whenever possible.",
    benefit:
      "Helps patients avoid unnecessary extraction when the tooth can be treated and protected.",
    cta: "Discuss Tooth Pain",
    icon: Stethoscope,
  },
  {
    title: "Braces",
    seoTitle: "Braces Treatment in Karimnagar",
    description:
      "Braces are planned for patients with crowding, spacing or bite concerns who need structured orthodontic correction.",
    benefit: "Supports better alignment, improved bite function and easier long-term oral hygiene.",
    cta: "Check Braces Suitability",
    icon: ShieldCheck,
  },
  {
    title: "Clear Aligners",
    seoTitle: "Clear Aligners in Karimnagar",
    description:
      "Clear aligners may suit patients who want teeth straightening with a more discreet and removable option.",
    benefit:
      "Useful for suitable alignment concerns where appearance, comfort and daily routine matter.",
    cta: "Check Aligner Fit",
    icon: Sparkles,
  },
  {
    title: "Smile Makeover",
    seoTitle: "Smile Makeover in Karimnagar",
    description:
      "A smile makeover is planned for patients who want to improve tooth color, shape, spacing, gum appearance or overall smile balance.",
    benefit:
      "Combines suitable cosmetic options such as whitening, veneers, reshaping, gum contouring or bonding.",
    cta: "Plan Smile Improvements",
    icon: Star,
  },
  {
    title: "Children's Dentistry",
    seoTitle: "Family Dentist in Karimnagar for Children's Dental Care",
    description:
      "Children's dentistry focuses on early check-ups, prevention and calm visits so parents know what their child needs and why.",
    benefit:
      "Helps protect growing teeth through guidance on prevention, sealants, space maintainers and timely treatment.",
    cta: "Ask for Child Dental Care",
    icon: Baby,
  },
];

export const journey = [
  {
    title: "Consultation",
    description:
      "The visit begins with your concern: pain, sensitivity, missing teeth, alignment, a child's dental issue or a smile goal.",
    icon: MessageCircle,
  },
  {
    title: "Diagnosis",
    description:
      "The dental team evaluates the condition and explains the findings in language patients can understand.",
    icon: Stethoscope,
  },
  {
    title: "Treatment",
    description:
      "Treatment is planned only after the patient understands the clinical need, comfort steps and expected sequence.",
    icon: Stethoscope,
  },
  {
    title: "Follow-Up",
    description:
      "After treatment, the team guides recovery, home care and the next steps needed to protect oral health.",
    icon: CalendarCheck,
  },
];

export const reviewProof = [
  {
    title: "5.0 Google Rating",
    description:
      "A public trust signal for patients choosing dental care in Karimnagar.",
    icon: Star,
  },
  {
    title: "21 Google Reviews",
    description:
      "Review volume that helps new patients evaluate the hospital before contacting the team.",
    icon: MessageCircle,
  },
  {
    title: "Google-Based Social Proof",
    description:
      "Third-party feedback helps reduce uncertainty for families and working professionals.",
    icon: ShieldCheck,
  },
];

export const facilityFeatures = [
  {
    title: "Equipment-Supported Planning",
    description:
      "Equipment-supported evaluation helps the team plan treatment with better clarity before procedures begin.",
    icon: Sparkles,
  },
  {
    title: "Patient Comfort",
    description:
      "Clear communication and calm clinical steps help patients feel more prepared during consultation and treatment.",
    icon: HeartPulse,
  },
  {
    title: "Safety-Focused Environment",
    description:
      "A structured clinical environment supports safer, more organized care for patients and families.",
    icon: ShieldCheck,
  },
  {
    title: "Precision Treatment Planning",
    description:
      "Planning is especially important for implants, root canal treatment, braces, aligners and smile makeovers.",
    icon: BadgeCheck,
  },
];

export const faqs = [
  {
    question: "Is Root Canal Treatment painful?",
    answer:
      "Root canal treatment is planned to remove infection and save the tooth whenever possible. Before starting, the team explains the steps and comfort measures so you know what to expect.",
  },
  {
    question: "How much do dental implants cost?",
    answer:
      "Dental implant cost depends on bone support, the number of teeth being replaced and the treatment plan. A consultation is needed before giving a responsible estimate.",
  },
  {
    question: "How long do braces take?",
    answer:
      "Braces duration varies from patient to patient. Teeth alignment, bite condition and the orthodontic plan all affect the timeline.",
  },
  {
    question: "Are clear aligners effective?",
    answer:
      "Clear aligners can work well for suitable alignment concerns. The team will first check whether your teeth and bite are appropriate for aligner treatment.",
  },
  {
    question: "Do you treat children?",
    answer:
      "Yes. Pediatric dentistry includes children's check-ups, preventive care, sealants and space maintainers, with calm guidance for parents.",
  },
  {
    question: "What should I do in a dental emergency?",
    answer:
      "Call the hospital if you have severe tooth pain, swelling, bleeding, a broken tooth or dental injury. The team can guide you on the next step and urgency.",
  },
  {
    question: "How often should I visit a dentist?",
    answer:
      "Regular dental visits help detect cavities, gum problems and early concerns before they become painful. Your ideal visit frequency can be advised after evaluation.",
  },
  {
    question: "How long does teeth whitening last?",
    answer:
      "Whitening results vary based on diet, oral habits and maintenance. The dental team can explain what to expect and how to care for your teeth afterward.",
  },
  {
    question: "Should I call before visiting?",
    answer:
      "Yes, calling or sending a WhatsApp message helps the team guide you on timing and availability. Sunday visits are on an appointment basis.",
  },
  {
    question: "What payment methods are accepted?",
    answer:
      "Please confirm payment details directly with the hospital team during your visit or before coming in.",
  },
  {
    question: "How long does an implant procedure take?",
    answer:
      "The implant timeline depends on oral health, bone support and whether any additional procedures are needed. The doctor will explain the sequence after evaluation.",
  },
  {
    question: "Can I get same-day consultation?",
    answer:
      "Same-day consultation may be possible based on availability. Call or WhatsApp the hospital team to check the best time to visit.",
  },
  {
    question: "What is a smile makeover?",
    answer:
      "A smile makeover is a planned cosmetic dentistry approach that may include whitening, veneers, gum contouring, reshaping or bonding based on your smile goals.",
  },
  {
    question: "Do braces work for adults?",
    answer:
      "Yes. Adults can be evaluated for braces or clear aligners depending on alignment needs, bite condition and clinical suitability.",
  },
  {
    question: "Do you offer emergency treatment?",
    answer:
      "Yes. Sri Maatha Multispeciality Dental Hospital provides emergency dental support for urgent concerns such as pain, swelling and dental injury.",
  },
];

export const footerTreatments = [
  "Dental Implants in Karimnagar",
  "Root Canal Treatment in Karimnagar",
  "Braces Treatment in Karimnagar",
  "Clear Aligners in Karimnagar",
  "Smile Makeover in Karimnagar",
  "Family Dentist in Karimnagar",
  "Emergency Dentist in Karimnagar",
];

export const contactCards = [
  {
    label: "Call",
    value: clinic.phone,
    href: clinic.phoneHref,
    icon: Phone,
  },
  {
    label: "Emergency",
    value: clinic.emergencyPhone,
    href: clinic.emergencyHref,
    icon: HeartPulse,
  },
  {
    label: "Timings",
    value: clinic.weekdayHours,
    href: "#contact",
    icon: Clock,
  },
  {
    label: "Location",
    value: clinic.fullAddress,
    href: clinic.googleBusinessHref,
    icon: MapPin,
  },
];
