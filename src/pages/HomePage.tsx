"use client"


import { AboutSection } from "@/components/about-section";
import { ContactSection } from "@/components/contact-section";
// import { FeaturesSection } from "@/components/feature-section";
import { SiteFooter } from "@/components/Footer/footer";
import { SiteHeader } from "@/components/Header/header";
import { Hero } from "@/components/hero";
import { ProductShowcase } from "@/components/product-showcase";
import { StepsSection } from "@/components/step-section";

export function Homepage() {
  return (
    <section className="relative min-h-screen  overflow-hidden">
      <SiteHeader/>
      <Hero/>
      <AboutSection/>
      <ProductShowcase/>
      {/* <FeaturesSection/> */}
      <StepsSection/>

      <ContactSection/>
      <SiteFooter/>
    </section>
  )
}



