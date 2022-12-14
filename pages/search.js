import Head from 'next/head'
import Header from '../components/Header'
import {API_KEY, CONTEXT_KEY} from '../keys'
import Response from '../response'
import {useRouter} from 'next/router'
import SearchResult from '../components/SearchResult'

export default function Search({results}) {
  const router = useRouter()

  console.log(results)
  return (
    <div>
    <Head>
       <title>{router.query.term} - whiteSearch</title>
    </Head>
    {/* header  */}
   <Header />
    {/* search result  */}
      <SearchResult results={results} />
    </div>
  )
}

export async function getServerSideProps(context){
    const useDummyData = false
    const startIndex = context.query.start || "0"
    const data =  useDummyData ? Response : await 
    fetch(`https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${context.query.term}&start=${startIndex}`)
    .then(response => response.json())
    // after SSR pass to client
    return{
      props:{
        results:data
      }
    }
}