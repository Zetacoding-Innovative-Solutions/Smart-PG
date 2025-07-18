import ContactFormSection from "@/components/Contact/ContactFormSection";
import ContactHeroSection from "@/components/Contact/ContactHeroSection";
import ContactInfoSection from "@/components/Contact/ContactInfoSection";
import React from "react";

function Contact() {
    return (
        <>
            <ContactHeroSection />
            <ContactInfoSection />
            <ContactFormSection />
        </>
    )
}

export default Contact;
