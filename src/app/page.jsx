import GallerySection from "@/components/Home/GallerySection";
import HeroSection from "@/components/Home/HeroSection";
import IntroSection from "@/components/Home/IntroSection";
import RulesSection from "@/components/Home/RulesSection";
import ServicesIntroSection from "@/components/Home/ServicesIntroSection";
import TestimonialSection from "@/components/Home/TestimonialSection";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <HeroSection />
      <IntroSection />
      <ServicesIntroSection />
      <GallerySection />
      <TestimonialSection />
      <RulesSection />
    </>
  );
}
