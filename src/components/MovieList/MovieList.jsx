import { useSearchParams } from "react-router-dom";
import { useFetchData } from "../../hooks/useFetchData";

import s from "./movieList.module.css";

import MovieCard from "../MovieCard/MovieCard";

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
        <ul className={s.movie__list}>
            {data?.results?.map((movie) => {
                return <MovieCard key={movie.id} movie={movie} />;
            })}
        </ul>
    );
};

export default MoviesList;
