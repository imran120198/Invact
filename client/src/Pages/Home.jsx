import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMoviesData } from "../Redux/action";
import { Box, Button, Grid, Heading, Text } from "@chakra-ui/react";
import MovieCard from "../Components/MovieCard";
import { FaHistory } from "react-icons/fa";
import AddMovieModal from "../Components/AddMovieModal";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const movies = useSelector((store) => store.movies);
  const dispatch = useDispatch();
  const nav = useNavigate();
  const [deletionCount, setDeletionCount] = useState(0);

  useEffect(() => {
    dispatch(getMoviesData());
  }, [dispatch, deletionCount]);

  const handleMovieUpdate = () => {
    setDeletionCount((prev) => prev + 1);
  };

  const watchedMovies = () => {
    nav("/watchlist");
  };

  return (
    <Box>
      <Box>
        <Box w={"90%"} margin={"auto"} mt={"1rem"} mb={"1rem"}>
          <Box
            w={"95%"}
            margin={"auto"}
            display={"flex"}
            flexDirection={"row"}
            justifyContent={"flex-end"}
            mb={4}
          >
            <AddMovieModal onAdd={handleMovieUpdate} />
          </Box>
          <Grid templateColumns="repeat(4, minmax(300px, 1fr))" gap={2}>
            {Array.isArray(movies) &&
              movies.map((movie) => (
                <MovieCard
                  key={movie._id}
                  movie={movie}
                  onDelete={handleMovieUpdate}
                />
              ))}
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
