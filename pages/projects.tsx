import ProjectCard from "../components/ProjectCard"
import { projects } from "../data"

const Projects = () => {
    return (
        <div className="p-4 py-2 overflow-scroll" style={{height:'65vh'}}>
            <nav>Navbar</nav>

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
