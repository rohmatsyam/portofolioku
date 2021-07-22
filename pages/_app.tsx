import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'
import '../styles/globals.css'

import {ThemeProvider} from 'next-themes'

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider forcedTheme={Component.theme || undefined} attribute="class">
      <div className="grid grid-cols-12 gap-6 px-4 mx-auto my-4 lg:px-48 sm:px-20 md:px-30">
        <div className="col-span-12 p-4 text-center bg-white dark:bg-dark-500 xl:col-span-3 rounded-2xl shadow-custom-light dark:shadow-custom-dark">
          <Sidebar/>
        </div>
        <div className="flex flex-col col-span-12 overflow-hidden bg-white xl:col-span-9 rounded-2xl dark:bg-dark-500 shadow-custom-light dark:shadow-custom-dark">
        <Navbar/>
        <Component {...pageProps} />
        </div>
      </div>
    </ThemeProvider>
  )
}

export default MyApp
