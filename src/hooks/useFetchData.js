import { useQuery } from "@tanstack/react-query";
import { fetchData } from "../services/api";

//  NEW VERSION BASED BY react-query

export const useFetchData = (endpoint) => {
    return useQuery({
        queryKey: ["data", endpoint], // Унікальний ключ кешу
        queryFn: () => fetchData(endpoint),
        enabled: !!endpoint,
        staleTime: 5 * 60 * 1000, // 5 хвилин
    });
};

// export const useFetchData = (endpoint) => {
//     const [data, setData] = useState(null);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);

//     useEffect(() => {
//         if (!endpoint) {
//             setLoading(false);
//             return;
//         }
//         const getData = async () => {
//             try {
//                 setLoading(true);
//                 const result = await fetchData(endpoint);
//                 setData(result);
//                 console.log(result);
//             } catch (err) {
//                 setError(err.message);
//             } finally {
//                 setLoading(false);
//             }
//         };

//         getData();
//     }, [endpoint]);

//     return { data, loading, error };
// };
