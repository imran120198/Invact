import {
  GET_MOVIES_LOADING,
  GET_MOVIES_SUCCESS,
  GET_MOVIES_ERROR,
  GET_MOVIES_UPDATE,
  GET_MOVIE_DELETE,
  REVIEW_UPDATE,
  WATCH_STATUS_TOGGLE,
  ADD_MOVIES_SUCCESS,
  GET_MOVIE,
} from "./actionTypes";

const initialState = {
  movies: [],
};

const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_MOVIES_LOADING: {
      return {
        ...state,
      };
    }

    case GET_MOVIES_SUCCESS: {
      return {
        ...state,
        movies: payload,
      };
    }

    case GET_MOVIES_ERROR: {
      return {
        ...state,
      };
    }

    case ADD_MOVIES_SUCCESS: {
      return {
        ...state,
        movie: payload,
      };
    }

    case GET_MOVIES_UPDATE: {
      return {
        ...state,
        movies: state.movies.map((movie) =>
          movie._id === payload.id ? payload : movie
        ),
      };
    }

    case GET_MOVIE_DELETE: {
      return {
        ...state,
        movies: state.movies.filter((data) => data._id !== payload.id),
      };
    }

    case WATCH_STATUS_TOGGLE: {
      return {
        ...state,
        movies: state.movies.map((movie) =>
          movie._id === payload._id ? payload : movie
        ),
      };
    }

    case REVIEW_UPDATE: {
      return {
        movies: state.movies.map((movie) =>
          movie._id === payload.id ? payload : movie
        ),
      };
    }

    case GET_MOVIE: {
      return {
        movies: state.movies.map((movie) =>
          movie._id === payload._id ? payload : movie
        ),
      };
    }

    default: {
      return initialState;
    }
  }
};

export default reducer;
