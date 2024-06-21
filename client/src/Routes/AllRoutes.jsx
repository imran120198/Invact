import React from "react";
import Navbar from "../Components/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import MovieDetails from "../Pages/MovieDetails";
import WatchList from "../Pages/WatchList";

const AllRoutes = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<MovieDetails />} />
        <Route path="/watchlist" element={<WatchList />} />
      </Routes>
    </div>
  );
};

export default AllRoutes;
