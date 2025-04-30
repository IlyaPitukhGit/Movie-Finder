import { useState, useEffect } from "react";
import { fetchData } from "../services/api";

export const useFetchData = (endpoint) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!endpoint) {
            setLoading(false);
            return;
        }
        const getData = async () => {
            try {
                setLoading(true);
                const result = await fetchData(endpoint);
                setData(result);
                console.log(result);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        getData();
    }, [endpoint]);

    return { data, loading, error };
};
