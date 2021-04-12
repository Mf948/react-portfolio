import React from 'react'
import ContactSection from '../../components/Contact'
import NavTabs from '../../components/Nav/sectiontop'
import FormCard from "../../components/conatctForm/Form"

export default function contact() {
    return (
        <div>
         <NavTabs/>
           <ContactSection/>
           <FormCard></FormCard>
        </div>
    )
}
