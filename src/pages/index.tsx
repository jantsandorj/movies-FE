
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
    <div className='max-w-screen-xl'>

      <Movies movies={props.result}/>
    </div>
    </>
  )
}

export async function getServerSideProps() {
  const res = await axios.get("http://localhost:9000/api/movies")
  console.log(res.data.result);
  
  return {
    props:{
      message : "success",
      result : res.data.result
    }
  }
}
