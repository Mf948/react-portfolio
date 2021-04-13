import React from 'react'
import ContactSection from '../../components/Contact'
import NavTabs from '../../components/Nav/sectiontop'
import FormCard from "../../components/conatctForm/Form"
import  FooterPage from "../../components/Footer/Foot"
export default function contact() {
    return (
        <div>
         <NavTabs/>
           <ContactSection/>
           <FormCard></FormCard>
           <FooterPage></FooterPage>
        </div>
    )
}
