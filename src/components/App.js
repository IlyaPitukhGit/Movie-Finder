import "./App.css";
import { Routes, Route } from "react-router-dom";

import ScrollToTop from "./ScrollToTop/ScrollToTop";
import Layout from "./Layout/Layout";
import Home from "../pages/Home/Home";
import MovieDetails from "../pages/MovieDetails/MovieDetails";
import Movies from "../pages/Movies/Movies";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

function App() {
    return (
        <>
            <QueryClientProvider client={queryClient}>
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
            </QueryClientProvider>
        </>
    );
}

export default App;
