import ServiceCard from '../components/ServiceCard'
import {services} from '../data'

const index = () => {
  return (
    <div className="flex flex-col flex-grow px-6">
      <h5 className="my-1 font-medium">
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit, nemo sapiente eius aspernatur molestias molestiae. Porro voluptatem inventore, libero earum suscipit consequuntur, aperiam dolore, consectetur officia dolor soluta a qui!
      </h5>
      <div className="flex-grow p-5 mt-1 bg-gray-400 dark:bg-dark-100" style={{marginLeft:"-1.5rem",marginRight:"-1.5rem"}}>
        <h4 className="my-2 text-xl font-bold tracking-wide">What I Offer</h4>        
        <div className="grid gap-6 mt-2 lg:grid-cols-2">
          {
            services.map((service,index)=>(
              <div className="bg-gray-200 rounded-lg lg:col-span-1 dark:bg-dark-200" key={index}>
                <ServiceCard service={service}/> 
              </div>
            )
            )
          }
        </div>
      </div>
    </div>    
  )
}

export default index