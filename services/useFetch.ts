import { useEffect, useState } from "react";

const useFetch=<T>(fetchFunction: ()=>Promise<T>,autoFetch=true)=>{
    const [data, setData]=useState<T | null>(null);
    const [loading, setLoading]=useState(false);
    const [error, setError]=useState<Error | null | string>(null);


    const fetchData=async ()=>{
        setLoading(true);
        setError(null);
        try{
            const result=await fetchFunction();
            setData(result);
        }catch(err){
            if(err instanceof Error){
                setError("hey bitch");
            }
        }finally{
            setLoading(false);
        }
    }
    const reset=()=>{
        setData(null);
        setLoading(false);
        setError(null);
    }
    useEffect(()=>{
        if(autoFetch){
            fetchData();
        }
    },[]);
    return {data, loading, error, fetchData, reset};

}
export default useFetch;