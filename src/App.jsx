import React from "react";
import AboutSection from "./components/sections/AboutSection";
import CallToActionSection from "./components/sections/CallToActionSection";
import ClientSection from "./components/sections/ClientSection";
import ContactSection from "./components/sections/ContactSection";
import FaqSection from "./components/sections/FaqSection";
import FeaturesSection from "./components/sections/FeaturesSection";
import FooterSection from "./components/sections/FooterSection";
import HeroSection from "./components/sections/HeroSection";
import PropertySection from "./components/sections/PropertySection";

export default function App() {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <PropertySection />
      <AboutSection />
      <CallToActionSection />
      <FaqSection />
      <ClientSection />
      <ContactSection />
      <FooterSection />
    </>
  );
}
