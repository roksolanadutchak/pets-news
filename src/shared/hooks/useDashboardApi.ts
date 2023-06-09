import { useEffect, useState } from 'react';
import axios from 'axios';
const useDashboardApi = () => {
	const [loading, setLoading] = useState(true);
	const [data, setData] = useState<any>([]);

	useEffect(() => {
		axios.get<any>('cards').then((res) => {
			setLoading(false);
			setData(res.data);
		});
	}, []);

	return { loading, data };
};
export default useDashboardApi;
