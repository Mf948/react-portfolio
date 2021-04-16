import React from "react";
import ContactSection from "../../components/ContactSection";
import NavTabs from "../../components/Nav/sectiontop";
import FormCard from "../../components/conatctForm/Form";
import ContactWrapper from "../../components/ContactWrapper";

// import  FooterPage from "../../components/Footer/Foot"
export default function Contact() {
  return (
    <>
      <NavTabs />
      <ContactWrapper>
        <ContactSection />
        <FormCard />
      </ContactWrapper>
    </>
  );
}
