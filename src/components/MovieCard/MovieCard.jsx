import { Link, useLocation } from "react-router-dom";

import s from "./movieCard.module.css";

function MovieCard({
    movie: {
        id,
        name,
        title,
        original_name,
        original_title,
        poster_path,
        vote_average,
        media_type,
    },
}) {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const category = searchParams.get("category") ?? "all";

    const currentPath = location.pathname;
    let type = media_type;

    if (!type) {
        if (currentPath === "/movies") {
            type = "movie";
        } else if (currentPath === "/tv-shows") {
            type = "tv";
        } else {
            switch (category) {
                case "popular-movies":
                    type = "movie";
                    break;
                case "popular-tv-shows":
                    type = "tv";
                    break;
                default:
                    type = "movie"; // Фолбек для головної сторінки з категорією "all"
            }
        }
    }

    const image = poster_path
        ? `https://image.tmdb.org/t/p/w500${poster_path}`
        : "https://sd.keepcalms.com/i/keep-calm-poster-not-found.png";

    return (
        <li className={s.card}>
            <Link state={{ from: location }} to={`/details/${type}/${id}`}>
                <div className={s.card__rating}>
                    <img
                        src="/img/movieCard/star.svg"
                        alt="rating-star"
                        className={s.card__ratingStar}
                    />
                    <span className={s.card__ratingText}>
                        {Math.floor(parseFloat(vote_average) * 10) / 10}
                    </span>
                </div>
                <img
                    src={image}
                    alt={name ?? title ?? original_name ?? original_title}
                    className={s.card__img}
                />
                <h2 className={s.card__title}>
                    {name ?? title ?? original_name ?? original_title}
                </h2>
            </Link>
        </li>
    );
}

export default MovieCard;
