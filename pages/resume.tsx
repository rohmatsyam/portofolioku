import Bar from "../components/Bar"
import { languages, tools } from "../data"
import {motion} from 'framer-motion'
import fadeInUp from '../components/anim/fadeInUp'
import routeAnimation from '../components/anim/routeAnimation'
import Head from "next/head"

const resume = () => {
    
    return (
        <motion.div variants={routeAnimation} initial="initial" animate="animate" exit="exit" className="px-6 py-2">
            <Head>
            <title>Rohmat | Resume</title>
            </Head>
            {/* Education & Experience */}
            <div className="grid gap-6 md:grid-cols-2">
                <motion.div variants={fadeInUp} initial="initial" animate="animate">
                    <h3 className="text-2xl font-bold">Pendidikan</h3>
                    <div>
                        <h6 className="my-1 text-xl font-bold">Teknik Informatika</h6>
                        <p className="my-1 font-semibold">Universitas Nusantara PGRI Kediri</p>
                        <p className="my-1">Saat ini saya sedang mengejar gelar S.Kom</p>
                    </div>
                </motion.div>
                <motion.div variants={fadeInUp} initial="initial" animate="animate">
                    <h3 className="text-2xl font-bold">Pengalaman</h3>
                    <div>
                        <h6 className="my-1 font-semibold">Web Developer Jr.</h6>
                        <p className="my-1 font-semibold">Newbie Graphic Designer</p>
                        {/* <p className="my-1">Lorem ipsum dolor sit amet consectetur adipisicing.</p> */}
                    </div>
                </motion.div>
            </div>

            {/* Language & Tool */}
            <div className="grid gap-6 md:grid-cols-2">
                <div>
                    <h5 className="my-3 text-2xl font-bold">Language</h5>
                    <div className="my-2">
                        {
                            languages.map((language)=><Bar data={language} key={language.name}/>)
                        }
                    </div>
                </div>
                <div>
                    <h5 className="my-3 text-2xl font-bold">Tool & Software</h5>
                    <div className="my-2">
                        {
                            tools.map((tool)=><Bar data={tool} key={tool.name}/>)
                        }
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default resume
