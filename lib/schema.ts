import { clinic, faqs, treatments } from "@/data/site";

const baseUrl = "https://srimaathadentalhospital.com";

export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "Dentist"],
    "@id": `${baseUrl}/#dentist`,
    name: clinic.name,
    description:
      "Dental hospital in Karimnagar led by Dr. B. Hemareddy Vivek Reddy, offering dental implants, root canal treatment, braces, clear aligners, smile makeover, children's dentistry and emergency dental support.",
    image: `${baseUrl}/dr-vivek-reddy.png`,
    url: baseUrl,
    sameAs: [clinic.googleBusinessHref],
    telephone: clinic.phone,
    email: clinic.email,
    founder: {
      "@type": "Person",
      name: clinic.doctor,
      jobTitle: clinic.doctorRole,
    },
    address: {
      "@type": "PostalAddress",
      ...clinic.address,
    },
    geo: {
      "@type": "GeoCoordinates",
      address: clinic.fullAddress,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        opens: "09:00",
        closes: "21:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Sunday",
        description: "Appointment basis",
      },
    ],
    areaServed: {
      "@type": "City",
      name: clinic.city,
      containedInPlace: {
        "@type": "State",
        name: clinic.state,
      },
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: clinic.rating,
      reviewCount: clinic.reviewCount,
    },
    medicalSpecialty: [
      "Dentistry",
      "Cosmetic Dentistry",
      "Orthodontics",
      "Oral Surgery",
      "Endodontics",
      "Pediatric Dentistry",
    ],
    makesOffer: treatments.map((treatment) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "MedicalProcedure",
        name: treatment.seoTitle,
      },
    })),
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${baseUrl}/#website`,
    name: clinic.name,
    url: baseUrl,
    inLanguage: "en-IN",
    publisher: {
      "@id": `${baseUrl}/#dentist`,
    },
  };
}

export function faqSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}
