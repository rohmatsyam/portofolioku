import { motion } from "framer-motion"
import { useState } from "react"
import ProjectCard from "../components/ProjectCard"
import ProjectNavbar from "../components/ProjectNavbar"
import { projects as projectsData } from "../data"
import { Category } from "../types"
import { fadeInUp, routeAnimation, stagger } from "../components/animations"

const Projects = () => {            
    const [projects, setProjects] = useState(projectsData);
    const [active, setActive] = useState('all')
    
    const [showDetail, setShowDetail] = useState<number|null>(null)
    const hanldlerFilterCategory = (category:Category | 'all') =>{                
        if(category === 'all'){setProjects(projectsData);setActive(category);return;}

        const newArray = projectsData.filter((project)=>project.category.includes(category));        
        setProjects(newArray);
        setActive(category);                
    }    
    return (
        <motion.div variants={routeAnimation} initial="initial" animate="animate" exit="exit" className="p-4 py-2 overflow-y-auto" style={{height:'75vh'}}>
            <ProjectNavbar hanldlerFilterCategory={hanldlerFilterCategory} active={active}/>
            <motion.div variants={stagger} initial="initial" animate="animate" className='relative grid grid-cols-12 gap-4 my-3'>                
                {projects.length > 0?(
                    projects.map((project,i)=>(
                    <motion.div variants={fadeInUp} key={i} className='col-span-12 bg-gray-200 rounded-lg sm:col-span-6 lg:col-span-4 dark:bg-dark-200'>
                        <ProjectCard project={project} showDetail={showDetail} setShowDetail={setShowDetail}/>
                    </motion.div>
                ))):(
                    <motion.div variants={fadeInUp} initial="initial" animate="animate" className="col-span-12 bg-gray-200 rounded-lg dark:bg-dark-200">
                        <p className="font-bold text-center">Data Belum tersedia</p>
                    </motion.div>
                )
                }                
            </motion.div>            
        </motion.div>
    )
}

export default Projects
