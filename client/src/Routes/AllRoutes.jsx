import React from "react";
import Navbar from "../Components/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import WatchList from "../Pages/WatchList";
import SinglePageMovie from "../Pages/MovieDetails";

const AllRoutes = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<SinglePageMovie />} />
        <Route path="/watchlist" element={<WatchList />} />
      </Routes>
    </div>
  );
};

export default AllRoutes;
