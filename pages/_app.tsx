import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
  <div className="grid grid-cols-12 gap-6 px-4 mx-auto my-4 lg:px-48 sm:px-20 md:px-30">
    <div className="col-span-12 p-4 text-center bg-white xl:col-span-3 rounded-2xl">
      <Sidebar/>
    </div>
    <div className="flex flex-col col-span-12 overflow-hidden bg-white xl:col-span-9 rounded-2xl">
    <Navbar/>
    <Component {...pageProps} />
    </div>
  </div>
  )
}

export default MyApp
