import { useEffect, useState } from "react";

const useGetData = (url) => {
    const [apidata, setApidata] = useState(null);

    useEffect(()=>{

        const getData = async() => {
            const response = await fetch(url);
            const jsonresponse = await response.json();
            setApidata(jsonresponse);
        }
        getData();
    },[])

   return apidata;
};

export default useGetData;