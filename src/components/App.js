import "./App.css";
import { Routes, Route } from "react-router-dom";

import Layout from "./Layout/Layout";
import Home from "../pages/Home/Home";
import MovieDetails from "../pages/MovieDetails/MovieDetails";

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="/:category" element={<Home />} />
                    <Route
                        path="/details/:movie-id"
                        element={<MovieDetails />}
                    ></Route>
                </Route>
            </Routes>
        </>
    );
}

export default App;
