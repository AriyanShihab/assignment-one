import React from "react";
import AboutSection from "./components/sections/AboutSection";
import CallToActionSection from "./components/sections/CallToActionSection";
import ClientSection from "./components/sections/ClientSection";
import ContactSection from "./components/sections/ContactSection";
import FaqSection from "./components/sections/FaqSection";
import FeaturesSection from "./components/sections/FeaturesSection";
import PropertySection from "./components/sections/PropertySection";
import FooterSection from "./components/sections/FooterSection";
import HeroSection from "./components/sections/HeroSection";

export default function App() {
  return (
    <>
    <HeroSection></HeroSection>
      <FeaturesSection></FeaturesSection>
      <PropertySection></PropertySection>
      <AboutSection></AboutSection>
      <CallToActionSection></CallToActionSection>
      <FaqSection></FaqSection>
      <ClientSection></ClientSection>
      <ContactSection></ContactSection>
      <FooterSection></FooterSection>
    </>
  );
}
