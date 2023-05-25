import { useEffect, useState } from "react";
import axios from 'axios';
const useApi = (url: string) => {
    const [loading, setLoading] = useState(true)
    const [data, setData] = useState<any>([])
    const fetchApi = () => {
        axios.get<any>(url)
            .then(res => {
                setLoading(false);
                setData(res.data);
            })
    };

    useEffect(() => {
        fetchApi();
    }, []);

    return { loading, data }
}
export default useApi;