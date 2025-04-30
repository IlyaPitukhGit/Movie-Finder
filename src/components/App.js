import "./App.css";
import { Routes, Route } from "react-router-dom";

import ScrollToTop from "./ScrollToTop/ScrollToTop";
import Layout from "./Layout/Layout";
import Home from "../pages/Home/Home";
import MovieDetails from "../pages/MovieDetails/MovieDetails";
import Movies from "../pages/Movies/Movies";

function App() {
    return (
        <>
            <ScrollToTop />
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="/:category" element={<Home />} />
                    <Route path="movies" element={<Movies />} />
                    <Route
                        path="/details/:type/:movieId"
                        element={<MovieDetails />}
                    ></Route>
                </Route>
            </Routes>
        </>
    );
}

export default App;
