import { useSearchParams, useLocation } from "react-router-dom";
import { useFetchData } from "../../hooks/useFetchData";

import s from "./movieList.module.css";

import MovieCard from "../MovieCard/MovieCard";
import Pagination from "../Pagination/Pagination";

const MoviesList = () => {
    const [searchParams] = useSearchParams();

    const location = useLocation();

    const category = searchParams.get("category") ?? "all";
    const query = searchParams.get("query") ?? "";
    const page = Number(searchParams.get("page") ?? "1");

    let endpoint = null;

    if (query) {
        let mediaType = "multi";
        if (location.pathname === "/") {
            switch (category) {
                case "popular-movies":
                    mediaType = "movie";
                    break;
                case "popular-tv-shows":
                    mediaType = "tv";
                    break;
                default:
                    mediaType = "multi";
            }
        } else {
            mediaType = location.pathname === "/movies" ? "movie" : "tv";
        }
        endpoint = `/search/${mediaType}?query=${encodeURIComponent(
            query
        )}&language=en-US&page=${page}`;
    } else if (location.pathname === "/") {
        switch (category) {
            case "all":
                endpoint = `/trending/all/day?language=en-US&page=${page}`;
                break;
            case "popular-movies":
                endpoint = `/trending/movie/day?language=en-US&page=${page}`;
                break;
            case "popular-tv-shows":
                endpoint = `/trending/tv/day?language=en-US&page=${page}`;
                break;
            default:
                endpoint = `/trending/all/day?language=en-US&page=${page}`;
        }
    }

    const { data, isLoading, error } = useFetchData(endpoint);

    const isMultiSearch =
        location.pathname === "/" && // Головна сторінка
        category === "all" && // Обрана категорія "all"
        query; // Виконується пошук

    const results = data?.results || [];
    const filteredResults = isMultiSearch
        ? results.filter(
              (item) => item.media_type === "movie" || item.media_type === "tv"
          )
        : results;

    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <>
            <ul className={s.movie__list}>
                {filteredResults.map((movie) => (
                    <MovieCard key={movie.id} movie={movie} />
                ))}
            </ul>
            <Pagination
                currentPage={page}
                totalPages={data?.total_pages || 1}
            />
        </>
    );
};

export default MoviesList;
