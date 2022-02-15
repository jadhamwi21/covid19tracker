import axios from "axios";
import { useEffect, useState } from "react";

export const useAPI = <DataType>(url: string) => {
	const [loading, setLoading] = useState(true);
	const [data, setData] = useState<DataType | null>(null);
	useEffect(() => {
		axios
			.get(url)
			.then((res) => {
				const { data } = res;
				setData(data);
			})
			.finally(() => {
				setLoading(false);
			});
	}, [url]);

	return { data, loading };
};
