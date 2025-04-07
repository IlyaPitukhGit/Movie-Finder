function MovieContent({ data }) {
    if (!data) return <p>Loading content...</p>;
    console.log("Content");

    console.log(data);

    const { title, overview, vote_average, release_date, runtime, genres } =
        data;
    // console.log(title, overview, vote_average, release_date, runtime, genres);

    const genresStr = genres.map((item) => item.name).join(", ");
    return (
        <div className="content__wrapper">
            <img src="" alt="" className="content__picture" />
            <div className="content__info">
                <h3 className="content__subtitle">{title ?? ""}</h3>
                <p className="content__text">{overview}</p>
                <div className="content__rating">
                    <img
                        src="/img/movieCard/star.svg"
                        alt="rating-star"
                        className="content__ratingStar"
                    />
                    <span className="content__ratingText">
                        {Math.floor(parseFloat(vote_average) * 10) / 10}
                    </span>
                </div>
                <ul className="content__list">
                    <li className="content__item">
                        <h5 className="content__item-title">Type</h5>
                        <p className="content__item-info">Movie</p>
                    </li>
                    <li className="content__item">
                        <h5 className="content__item-title">Release Date:</h5>
                        <p className="content__item-info">{release_date}</p>
                    </li>
                    <li className="content__item">
                        <h5 className="content__item-title">Run time</h5>
                        <p className="content__item-info">{runtime} min</p>
                    </li>
                    <li className="content__item">
                        <h5 className="content__item-title">Genres</h5>
                        <p className="content__item-info">{genresStr}</p>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default MovieContent;
