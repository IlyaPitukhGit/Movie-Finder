import { NavLink } from "react-router-dom";
import SelectCategory from "../../components/SelectCategory/SelectCategory";
import MoviesList from "../../components/MovieList/MovieList";
import s from "./home.module.css";

function Home() {
    return (
        <section className={s.home}>
            <div className={s.container}>
                <div className={s.content}>
                    <h1 className={s.title}>Welcome To Movie Finder</h1>
                    <p className={s.text}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Similique eaque aspernatur dolorem adipisci maxime
                        facere quae voluptatibus deserunt itaque nobis, neque
                        porro, culpa placeat ea distinctio ducimus. Doloribus,
                        consectetur recusandae.
                    </p>
                    <SelectCategory />
                    <MoviesList />
                </div>
            </div>
        </section>
    );
}

export default Home;
