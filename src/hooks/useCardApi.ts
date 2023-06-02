import { useEffect, useState } from "react";
import axios from 'axios';

const useCardApi = (n: number) => {
    const [loading, setLoading] = useState(true)
    const [data, setData] = useState<any>([])

    useEffect(() => {
        axios.get<any>(`http://localhost:8000/card/${n}`)
            .then(res => {
                setLoading(false);
                setData(res.data);
            })
    }, []);

    return { loading, data }
}
export default useCardApi;