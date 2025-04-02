import { useSearchParams } from "react-router-dom";
import { useFetchData } from "../../hooks/useFetchData";

const MoviesList = () => {
    const [searchParams] = useSearchParams();
    const category = searchParams.get("category") ?? "all";

    let endpoint;
    switch (category) {
        case "all":
            endpoint = "/trending/all/day?language=en-US";
            break;
        case "popular-movies":
            endpoint = "/trending/movie/day?language=en-US";
            break;
        case "popular-tv-shows":
            endpoint = "/trending/tv/day?language=en-US";
            break;
        default:
            endpoint = "/trending/all/day?language=en-US";
            break;
    }

    const { data, loading, error } = useFetchData(endpoint);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <ul>
            {data?.results?.map((movie) => (
                <li key={movie.id}>{movie.title || movie.name}</li>
            ))}
        </ul>
    );
};

export default MoviesList;
