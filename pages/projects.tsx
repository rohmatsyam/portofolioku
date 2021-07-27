import { motion } from "framer-motion"
import { useState } from "react"
import ProjectCard from "../components/ProjectCard"
import fadeInUp from '../components/anim/fadeInUp'
import stagger from '../components/anim/stagger'
import routeAnimation from '../components/anim/routeAnimation'
import Head from "next/head"
import {createClient} from 'contentful';

export async function getStaticProps(){
  const client = createClient({
    space:process.env.CONTENTFULL_SPACE_ID,
    accessToken:process.env.CONTENTFUL_ACCESS_KEY,
  })
  const res = await client.getEntries({content_type:'projectsPortofolio'})  
  return {
    props:{
      contentful:res.items
    }
  }
}

const Projects = ({contentful}) => {
    const [showDetail, setShowDetail] = useState<number|null>(null);
    return (
        <motion.div variants={routeAnimation} initial="initial" animate="animate" exit="exit" className="p-4 py-2 overflow-y-auto" style={{height:'75vh'}}>
            <Head>
            <title>Rohmat | Projects</title>
            </Head>            
            <p className="my-1">Data ini di fetch dari Contenful</p>            
            <motion.div variants={stagger} initial="initial" animate="animate" className='relative grid grid-cols-12 gap-4 my-3'>                                
                {
                    contentful.map(content =>{                        
                        const project:{id:number,name:string,descriptions:string,image,deployedUrl:string,githubUrl:string,category:[],keyTechs:[]} = content.fields;                        
                        return(
                        <motion.div key={content.sys.id} variants={fadeInUp} className='col-span-12 bg-gray-200 rounded-lg sm:col-span-6 lg:col-span-4 dark:bg-dark-200'>                            
                            <ProjectCard project={project} showDetail={showDetail} setShowDetail={setShowDetail} />
                        </motion.div>
                    )})
                }
            </motion.div>            
        </motion.div>
    )
}

export default Projects
