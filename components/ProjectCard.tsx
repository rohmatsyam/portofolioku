import { FunctionComponent, useState } from "react"
import { AiFillGithub, AiFillProject } from "react-icons/ai"
import { MdClose } from "react-icons/md"
import { IProject } from "../types"

const ProjectCard:FunctionComponent<{project:IProject}> = ({project:{name,image_path,category,deployed_url,description,github_url,key_techs}}) => {
    const [showDetail, setShowDetail] = useState(false)
    return (
        <>
            <img src={image_path} alt={name} onClick={() => setShowDetail(true)} className="cursor-pointer"/>
            <p className='my-2 text-center'>{name}</p>
            
            {showDetail && (
            <div className="absolute top-0 left-0 z-50 grid w-full h-auto p-2 text-black bg-gray-100 md:grid-cols-2 gap-x-12 dark:text-white dark:bg-dark-100">
                <div>                    
                    <img src={image_path} alt={name} />
                    <div className='flex justify-center my-4 space-x-3'>
                        <a href={github_url} className='flex items-center px-4 py-2 space-x-3 text-lg bg-gray-200 dark:bg-dark-200'>
                            <AiFillGithub/> <span>Github</span>
                        </a>
                        <a href={deployed_url} className='flex items-center px-4 py-2 space-x-3 text-lg bg-gray-200 dark:bg-dark-200'>
                            <AiFillProject/> <span>Projects</span>
                        </a>
                    </div>
                </div>
                <div>
                    <h2 className='mb-3 text-xl font-medium md:text-2xl'>{name}</h2>
                    <h3 className='mb-3 font-medium'>{description}</h3>
                    <div className='flex flex-wrap mt-5 space-x-2 text-sm tracking-wider'>
                        {key_techs.map((tech,i)=><span key={i} className='px-2 py-2 my-1 bg-gray-200 rounded-sm dark:bg-dark-200'>{tech}</span>)}
                    </div>
                </div>

                <button className='absolute p-1 bg-gray-200 rounded-full top-3 right-3 focus:outline-none dark:bg-dark-100'
                onClick={()=>setShowDetail(false)}
                >
                    <MdClose size={30} />
                </button>
            </div>
            )}
        </>
    );
};

export default ProjectCard;