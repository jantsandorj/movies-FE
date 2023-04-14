import {Movies} from '@/components/Movies'
import { Inter } from 'next/font/google'
import axios from "axios"
import {Pagination} from "../../components/page"
import { useRouter } from 'next/router'
const inter = Inter({ subsets: ['latin'] })

interface IProps {
  messsage: string;
  result: any;
  totalRows: number;
  pageSize: number;
}

 
export default function Index(props:IProps):JSX.Element {
  console.log(props);
  
  return (
    <>
    <div className='mx-auto max-w-7xl px-2 sm:px-6 lg:px-8'>
      <Movies movies={props.result}/>
      <Pagination totalRows={props.totalRows} pageSize={props.pageSize}/>
    </div>
    </>
  )
}

export async function getServerSideProps(ctx:any) {
  const {query} = ctx;
  const search = query? query.searchText? query.searchText : "" : "";
  const pageSize = query ? query.pageSize? query.pageSize: 1 : 1;
  const res = await axios.post(`http://localhost:9000/api/movies?searchText=${search}`, {pageSize:pageSize, limit:28  });
  
  return {
    props:{
      message : "success",
      result : res?.data?.result,
      totalRows: res.data.totalRows,
      pageSize: res.data.pageSize,
    }
  }}
