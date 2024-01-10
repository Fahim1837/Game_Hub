import { useEffect, useState } from "react";
import clientServices from "../services/client-services";
import { AxiosRequestConfig, CanceledError } from "axios";

interface Fetch <T>{
    count: number,
    results: T []
}

function useGenericHooks <T> (endPoint: string, requestConfig ?: AxiosRequestConfig, deps ?: any []) {
const [data, setData] = useState <T[]> ([])
  const [error, setError] = useState ('')
  const [loader, setLoader] = useState (false)
  useEffect(() => {

    setLoader (true)
    const controller = new AbortController ()
    const req = clientServices.get <Fetch <T>> (endPoint, {
      signal: controller.signal, 
      ...requestConfig  
    })
    
    req.then ((res) => {
        setData(res.data.results)
        setLoader(false)
    })
        .catch ((err) => {
            if (err instanceof CanceledError) return
            setError (err.message)
            setLoader (false)
        })
    return () => controller.abort()
  }, deps ?[... deps]: [])
  return {data, error, loader}
}

export default useGenericHooks