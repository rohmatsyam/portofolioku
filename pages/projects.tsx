import { useState } from "react"
import ProjectCard from "../components/ProjectCard"
import ProjectNavbar from "../components/ProjectNavbar"
import { projects as projectsData } from "../data"
import { Category } from "../types"

const Projects = () => {
    const [projects, setProjects] = useState(projectsData);
    const [active, setActive] = useState('all')

    const hanldlerFilterCategory = (category:Category | 'all') =>{
        if(category === 'all'){
            setProjects(projectsData);
            setActive(category);
            return;
        }
        const newArray = projectsData.filter((project)=>project.category.includes(category));
        setProjects(newArray);
        setActive(category);
    }
    return (
        <div className="p-4 py-2 overflow-y-auto" style={{height:'80vh'}}>
            <ProjectNavbar hanldlerFilterCategory={hanldlerFilterCategory} active={active}/>
            <div className='relative grid grid-cols-12 gap-4 my-3'>
                {
                projects.map((project,i)=>(
                    <div key={i} className='col-span-12 bg-gray-200 rounded-lg sm:col-span-6 lg:col-span-4 dark:bg-dark-200'>
                        <ProjectCard project={project}/>
                    </div>
                ))
                }
            </div>
        </div>
    )
}

export default Projects
