import s from "./movieContent.module.css";

function MovieContent({ data }) {
    if (!data) return <p>Loading content...</p>;
    console.log("Content");

    console.log(data);

    const {
        title,
        overview,
        vote_average,
        release_date,
        runtime,
        genres,
        tagline,
        poster_path,
    } = data;
    // console.log(title, overview, vote_average, release_date, runtime, genres);

    const genresStr = genres.map((item) => item.name).join(", ");

    const image = poster_path
        ? `https://image.tmdb.org/t/p/w500${poster_path}`
        : "https://sd.keepcalms.com/i/keep-calm-poster-not-found.png";
    return (
        <div className={s.content__wrapper}>
            <img src={image} alt={title} className={s.content__picture} />
            <div className={s.content__info}>
                <h3 className={s.content__subtitle}>
                    {tagline ?? title ?? ""}
                </h3>
                <p className={s.content__text}>{overview}</p>
                <div className={s.content__rating}>
                    <img
                        src="/img/movieCard/star.svg"
                        alt="rating-star"
                        className={s.content__ratingStar}
                    />
                    <span className={s.content__ratingText}>
                        {Math.floor(parseFloat(vote_average) * 10) / 10}
                    </span>
                </div>
                <ul className={s.content__list}>
                    <li className={s.content__item}>
                        <h5 className={s.content__itemTitle}>Type</h5>
                        <p className={s.content__itemInfo}>Movie</p>
                    </li>
                    <li className={s.content__item}>
                        <h5 className={s.content__itemTitle}>Release Date:</h5>
                        <p className={s.content__itemInfo}>{release_date}</p>
                    </li>
                    <li className={s.content__item}>
                        <h5 className={s.content__itemTitle}>Run time</h5>
                        <p className={s.content__itemInfo}>{runtime} min</p>
                    </li>
                    <li className={s.content__item}>
                        <h5 className={s.content__itemTitle}>Genres</h5>
                        <p className={s.content__itemInfo}>{genresStr}</p>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default MovieContent;
