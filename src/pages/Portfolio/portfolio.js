import React from 'react'
import NavTabs from '../../components/Nav/sectiontop'
import ProjectCard from '../../components/Card/projectCard'
import dataProjects from "../utils/Projects"
import FooterPage from '../../components/Footer/foot'



export default function portfolio() {
    return (
        <div>
            <NavTabs></NavTabs>
{dataProjects.map( ({name,imageUrl,description,github,app})=> (
 <ProjectCard
 image={imageUrl}
    name={name}
    description={description}
    github={github}
    app={app}/> ))}
    <FooterPage></FooterPage>
        </div>
    )
}
