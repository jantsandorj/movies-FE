
import Movies from '@/components/Movies'
import { Inter } from 'next/font/google'
import axios from "axios"
const inter = Inter({ subsets: ['latin'] })

interface IProps {
  messsage: string;
  result: any;
}
export default function Home(props:IProps):JSX.Element {
  return (
    <>
    <div className='mx-auto max-w-7xl px-2 sm:px-6 lg:px-8'>
      <Movies movies={props.result}/>
    </div>
    </>
  )
}

export async function getServerSideProps() {
  const res = await axios.post("http://localhost:9000/api/movies", {pageSize:1, limit:30  })
  
  return {
    props:{
      message : "success",
      result : res.data.result
    }
  }
}
