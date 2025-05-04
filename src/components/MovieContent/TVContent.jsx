import s from "./movieContent.module.css";

function TVContent({ data }) {
    if (!data) return <p>Loading content...</p>;

    const {
        name,
        overview,
        vote_average,
        first_air_date,
        last_air_date,
        episode_run_time,
        number_of_seasons,
        number_of_episodes,
        genres,
        tagline,
        poster_path,
        status,
    } = data;

    const genresStr = genres.map((item) => item.name).join(", ");
    const image = poster_path
        ? `https://image.tmdb.org/t/p/w500${poster_path}`
        : "https://sd.keepcalms.com/i/keep-calm-poster-not-found.png";

    // Форматування часу епізоду
    const runtime =
        episode_run_time?.length > 0 ? `${episode_run_time[0]} min` : "N/A";

    return (
        <div className={s.content__wrapper}>
            <img src={image} alt={name} className={s.content__picture} />
            <div className={s.content__info}>
                <h3 className={s.content__subtitle}>{tagline ?? name ?? ""}</h3>
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
                <div className={s.list__wrapper}>
                    <ul className={s.content__list}>
                        <li className={s.content__item}>
                            <h5 className={s.content__itemTitle}>Type</h5>
                            <p className={s.content__itemInfo}>TV Show</p>
                        </li>
                        <li className={s.content__item}>
                            <h5 className={s.content__itemTitle}>
                                First Air Date:
                            </h5>
                            <p className={s.content__itemInfo}>
                                {first_air_date}
                            </p>
                        </li>

                        <li className={s.content__item}>
                            <h5 className={s.content__itemTitle}>
                                Episode Runtime
                            </h5>
                            <p className={s.content__itemInfo}>{runtime}</p>
                        </li>
                        <li className={s.content__item}>
                            <h5 className={s.content__itemTitle}>Seasons</h5>
                            <p className={s.content__itemInfo}>
                                {number_of_seasons}
                            </p>
                        </li>

                        <li className={s.content__item}>
                            <h5 className={s.content__itemTitle}>Genres</h5>
                            <p className={s.content__itemInfo}>{genresStr}</p>
                        </li>
                    </ul>
                    <ul className={s.content__list}>
                        <li className={s.content__item}>
                            <h5 className={s.content__itemTitle}>Status</h5>
                            <p className={s.content__itemInfo}>{status}</p>
                        </li>
                        <li className={s.content__item}>
                            <h5 className={s.content__itemTitle}>
                                Last Air Date:
                            </h5>
                            <p className={s.content__itemInfo}>
                                {last_air_date}
                            </p>
                        </li>
                        <li className={s.content__item}>
                            <h5 className={s.content__itemTitle}>Episodes</h5>
                            <p className={s.content__itemInfo}>
                                {number_of_episodes}
                            </p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default TVContent;
