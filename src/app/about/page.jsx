import AboutHeroSection from "@/components/About/AboutHeroSection";
import FacilitiesSection from "@/components/About/FacilitiesSection";
import IntroSection from "@/components/About/IntroSection";
import WhyChooseUsSection from "@/components/About/WhyChooseUsSection";
import React from "react";

function About() {
    return (
        <div>
            <AboutHeroSection />
            <IntroSection />
            <WhyChooseUsSection />
            <FacilitiesSection />
        </div>
    )
}

export default About;
