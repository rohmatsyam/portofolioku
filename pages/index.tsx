import { GetServerSidePropsContext, GetStaticPropsContext } from 'next'
import {services} from '../data'

const index = ({services}) => {
  console.log("Client",services)
  return (
    <div>
      <h1>Hello World</h1>
    </div>
  )
}

export default index

// export const getServerSideProps = async (contect:GetServerSidePropsContext) =>{
//   //calculation
//   const res = await fetch('http://localhost:3000/api/services')
//   const data = await res.json()
// console.log("server", services)

//   return {
//     props:{
//       services:data.services
//     }
//   }
// }

export const getServerStaticProps = async (contect:GetStaticPropsContext) =>{
  //calculation
  const res = await fetch('http://localhost:3000/api/services')
  const data = await res.json()
console.log("server", services)

  return {
    props:{
      services:data.services
    }
  }
}