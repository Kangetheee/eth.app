import React from "react";
import HeroSection from "@/components/layouts/dashboard/hero-section";
import FeaturesSection from "@/components/layouts/dashboard/feature-section";
import ServicesSection from "@/components/layouts/dashboard/service-section";
import WorkingProcessSection from "@/components/layouts/dashboard/working-process-section";
import TeamSection from "@/components/layouts/dashboard/team-section";
import ContactSection from "@/components/layouts/dashboard/contact-section";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <ServicesSection />
      <WorkingProcessSection />
      <TeamSection />
      <ContactSection />
    </>
  );
}
