import {AiFillGithub,AiFillInstagram,AiFillFacebook} from 'react-icons/ai'
import {GoLocation} from 'react-icons/go'
import {GiTie} from 'react-icons/gi'
import Image from 'next/image'
import {useTheme} from 'next-themes'

const Sidebar = () => {
    const {theme,setTheme} = useTheme();        

    return (
        <>
            <Image src="/img/profil.jpg" alt="user avatar" width={128} height={128} className="mx-auto rounded-full" layout="intrinsic"/>
            <h3 className="mt-4 text-3xl font-bold tracking-wider font-kaushan min-w-max xl:text-base">
                <span className="text-green">Rohmat </span>
                Syamsul Huda
            </h3>
            <p className="px-2 py-1 my-3 font-semibold bg-gray-200 rounded-full dark:bg-dark-200">Mahasiswa</p>
            <a className="flex items-center justify-center px-2 py-1 my-3 font-semibold bg-gray-200 rounded-full dark:bg-dark-200"
            href="" download="">
                <GiTie className="w-6 h-6"/>Download Resume
            </a>
            
            {/* Sosial Icons */}
            <div className="flex justify-around w-9/12 mx-auto my-4 text-green-400 md:w-full">
                <a href="https://github.com/rohmatsyam">
                    <AiFillGithub className="w-8 h-8 cursor-pointer"/>
                </a>
                <a href="https://www.instagram.com/rohmat_syam">
                    <AiFillInstagram className="w-8 h-8 cursor-pointer"/>
                </a>
                <a href="https://www.facebook.com/rohmatsyam99">
                    <AiFillFacebook className="w-8 h-8 cursor-pointer"/>
                </a>
            </div>

            {/* Address */}
            <div className="py-4 my-5 bg-gray-200 dark:bg-dark-200 min-w-max" style={{marginLeft:'-1rem',marginRight:'-1rem'}}>
                <div className="flex items-center justify-center space-x-2">
                    <GoLocation/>
                    <span>Trenggalek, Indonesia</span>
                </div>
                <p className="my-2">rohmatsyam@yahoo.com</p>
                <p className="my-2">+6287880144906</p>   
            </div>

            {/* Email Button */}
            <div>
            <button className="w-8/12 px-4 py-2 my-1 text-white rounded-full xl:w-10/12 bg-gradient-to-r from-green to-blue-400 focus:outline-none" onClick={()=>window.open('mailto:rohmatsyam@yahoo.com')}>Email Me</button>
            <button className="w-8/12 px-4 py-2 my-1 text-white rounded-full xl:w-10/12 bg-gradient-to-r from-green to-blue-400 focus:outline-none" onClick={() => {
            setTheme(theme === 'light' ? 'dark' : 'light')
          }}>Toggle Theme</button>
            </div>
        </>
    )
}

export default Sidebar
