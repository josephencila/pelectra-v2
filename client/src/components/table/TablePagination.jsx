import { useEffect, useMemo, useState } from "react"

const TablePagination = () => {
  const [count,setCount] = useState(0)
  const [allData,setAllData] = useState([])
  const BASE_URL = `http://localhost:4000/api/v1/montly-appliances/read`

   useEffect(()=>{
    const fetchMontlyAppliaces = async()=>{
      try {
        const response = await fetch(`${BASE_URL}/${count}/5`,{
          headers:{
            Accept: 'application/json',
            'Content-type': 'application/json;charset=utf-8'
           },
          method:'POST',
          
       })
       const result = await response.json()
       if(!response.ok){
          throw new Error(result.message ?? result)
       }
       setAllData(result?.data)
      } catch (error) {
        console.log(error.message ?? error)
      }
    }
    fetchMontlyAppliaces()
   },[BASE_URL,count])
  

  const call = ()=>{
      setCount(prev => prev + 5)
  }
 

  return (
    <div className="h-60px w-full bg-slate-400">
       <button className="bg-purple-600 text-white" onClick={call }>
         call It
       </button>
       {allData.map((d)=>{
         console.log("FETCH DATA\n",d)
       })

       }
    </div>
  )
}

export default TablePagination
