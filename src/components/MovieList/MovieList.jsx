import { useSearchParams, useLocation } from "react-router-dom";
import { useFetchData } from "../../hooks/useFetchData";

import s from "./movieList.module.css";

import MovieCard from "../MovieCard/MovieCard";

const MoviesList = () => {
    const [searchParams] = useSearchParams();
    const category = searchParams.get("category") ?? "all";
    const location = useLocation();

    const query = searchParams.get("query");

    let endpoint = null;

    if (query) {
        let mediaType = "multi";

        // Визначаємо тип пошуку на основі категорії (якщо це головна сторінка)
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
            // Для сторінок /movies та /tv-shows
            mediaType = location.pathname === "/movies" ? "movie" : "tv";
        }

        endpoint = `/search/${mediaType}?query=${encodeURIComponent(
            query
        )}&language=en-US`;
    }

    const { data, loading, error } = useFetchData(endpoint);

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

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <ul className={s.movie__list}>
            {filteredResults.map((movie) => (
                <MovieCard key={movie.id} movie={movie} />
            ))}
        </ul>
    );
};

export default MoviesList;
