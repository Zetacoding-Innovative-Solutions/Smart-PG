import RulesSection from "@/components/Service/RulesSection";
import ServicesGridSection from "@/components/Service/ServicesGridSection";
import ServicesHeroSection from "@/components/Service/ServicesHeroSection";
import React from "react";

function Services() {
    return (
        <>
            <ServicesHeroSection />
            <ServicesGridSection />
            <RulesSection />
        </>
    )
}

export default Services;
