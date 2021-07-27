import { motion } from "framer-motion";
import Image from "next/image";
import { FunctionComponent} from "react"
import { AiFillGithub, AiFillProject } from "react-icons/ai"
import { MdClose } from "react-icons/md"
import fadeInUp from '../components/anim/fadeInUp'
import stagger from '../components/anim/stagger'
import { IProject } from "../types"

const ProjectCard:FunctionComponent<{project:IProject;showDetail:null|number;setShowDetail:(id:null|number)=>void}> = ({project:{id,name,descriptions,image,deployedUrl,githubUrl,category,keyTechs},showDetail,setShowDetail}) =>{        
    return(
        <>
            <Image src={'https:'+image.fields.file.url} alt={name} onClick={() => setShowDetail(id)} className="cursor-pointer" width="300" height="150" layout="responsive"/>
            <p className='my-2 text-center'>{name}</p>            
            {showDetail === id && (
            <div className="absolute top-0 left-0 z-50 grid w-full h-auto p-2 text-black bg-gray-100 rounded-lg md:p-10 md:grid-cols-2 gap-x-12 dark:text-white dark:bg-dark-100">
                <motion.div variants={stagger} initial="initial" animate="animate">                    
                    <motion.div variants={fadeInUp} className="border-4 border-gray-100">
                        <Image src={'https:'+image.fields.file.url} alt={name} width="300" height="150" layout="responsive"/>
                    </motion.div>
                    <motion.div variants={fadeInUp} className='flex justify-center my-4 space-x-3'>
                        <a href={githubUrl} className='flex items-center px-4 py-2 space-x-3 text-lg bg-gray-200 dark:bg-dark-200'>
                            <AiFillGithub/> <span>Github</span>
                        </a>
                        <a href={deployedUrl} className='flex items-center px-4 py-2 space-x-3 text-lg bg-gray-200 dark:bg-dark-200'>
                            <AiFillProject/> <span>Projects</span>
                        </a>
                    </motion.div>
                </motion.div>
                <motion.div variants={stagger} initial="initial" animate="animate">
                    <motion.h2 variants={fadeInUp} className='mb-3 text-xl font-medium md:text-2xl'>{name}</motion.h2>
                    <motion.h3 variants={fadeInUp} className='mb-3 font-medium'>{descriptions}</motion.h3>
                    <motion.div variants={fadeInUp} className='flex flex-wrap mt-5 space-x-2 text-sm tracking-wider'>
                        {keyTechs.map((tech,i)=><span key={i} className='px-2 py-2 my-1 bg-gray-200 rounded-sm dark:bg-dark-200'>{tech}</span>)}
                    </motion.div>
                </motion.div>

                <button className='absolute p-1 bg-gray-200 rounded-full top-3 right-3 focus:outline-none dark:bg-dark-100'
                onClick={()=>setShowDetail(null)}
                >
                    <MdClose size={30} />
                </button>
            </div>
            )}
        </>
    )
}

export default ProjectCard;
