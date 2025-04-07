import { Link } from "react-router-dom";

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
    },
}) {
    const image = poster_path
        ? `https://image.tmdb.org/t/p/w500${poster_path}`
        : "https://sd.keepcalms.com/i/keep-calm-poster-not-found.png";

    return (
        <li className={s.card}>
            <Link to={`/details/${id}`}>
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
