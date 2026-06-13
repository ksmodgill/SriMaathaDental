import { Hero } from "@/components/sections/Hero";
import { Header } from "@/components/Header";
import { DoctorStory } from "@/components/sections/DoctorStory";
import { FAQ } from "@/components/sections/FAQ";
import { FeaturedTreatments } from "@/components/sections/FeaturedTreatments";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { ContactLocation } from "@/components/sections/ContactLocation";
import { Testimonials } from "@/components/sections/Testimonials";
import { TrustMetrics } from "@/components/sections/TrustMetrics";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { PatientJourney } from "@/components/sections/PatientJourney";
import { TechnologyFacilities } from "@/components/sections/TechnologyFacilities";
import { Footer } from "@/components/Footer";
import { StickyActions } from "@/components/StickyActions";
import { faqSchema, localBusinessSchema, websiteSchema } from "@/lib/schema";

export default function Home() {
  const schemas = [websiteSchema(), localBusinessSchema(), faqSchema()];

  return (
    <>
      <Header />
      <main>
        <Hero />
        <TrustMetrics />
        <DoctorStory />
        <WhyChooseUs />
        <FeaturedTreatments />
        <PatientJourney />
        <Testimonials />
        <TechnologyFacilities />
        <FAQ />
        <FinalCTA />
        <ContactLocation />
      </main>
      <Footer />
      <StickyActions />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas) }}
      />
    </>
  );
}
