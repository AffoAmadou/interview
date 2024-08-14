import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { movies$ } from '../assets/data/movies';

const generateRandomColor = () => `#${Math.floor(Math.random() * 16777215).toString(16)}`;

const sortMovies = (movies, sortBy) => {
  const sortFunctions = {
    titleAsc: (a, b) => a.title.localeCompare(b.title),
    titleDesc: (a, b) => b.title.localeCompare(a.title),
    likesAsc: (a, b) => a.likes - b.likes,
    likesDesc: (a, b) => b.likes - a.likes
  };

  return movies.slice().sort(sortFunctions[sortBy] || sortFunctions.titleAsc);
};

export const fetchMovies = createAsyncThunk('movies/fetchMovies', async () => {
  const response = await new Promise((resolve) => {
    setTimeout(() => {
      resolve(movies$);
    }, 3000);
  });
  return response;
});

const updateMovie = (list, id, updateFn) =>
  list.map(movie => movie.id === id ? updateFn(movie) : movie);

const moviesSlice = createSlice({
  name: 'movies',
  initialState: {
    list: [],
    filteredList: [],
    categories: [],
    selectedCategories: [],
    currentPage: 1,
    itemsPerPage: 4,
    loading: false,
    error: null,
    sortBy: 'titleAsc',
  },
  reducers: {
    deleteMovie: (state, action) => {
      const updatedList = state.list.filter(movie => movie.id !== action.payload);
      state.list = updatedList;
      state.filteredList = sortMovies(
        updatedList.filter(movie => state.selectedCategories.length === 0 || state.selectedCategories.includes(movie.category)),
        state.sortBy
      );
      state.categories = [...new Set(updatedList.map(movie => movie.category))];
      state.currentPage = 1;
    },
    toggleLike: (state, action) => {
      state.list = updateMovie(state.list, action.payload, movie => {
        if (movie.liked) {
          return { ...movie, likes: movie.likes - 1, liked: false };
        } else {
          if (movie.disliked) {
            return { ...movie, dislikes: movie.dislikes - 1, disliked: false, likes: movie.likes + 1, liked: true };
          }
          return { ...movie, likes: movie.likes + 1, liked: true };
        }
      });
      state.filteredList = sortMovies(
        state.list.filter(movie => state.selectedCategories.length === 0 || state.selectedCategories.includes(movie.category)),
        state.sortBy
      );
    },
    toggleDislike: (state, action) => {
      state.list = updateMovie(state.list, action.payload, movie => {
        if (movie.disliked) {
          return { ...movie, dislikes: movie.dislikes - 1, disliked: false };
        } else {
          if (movie.liked) {
            return { ...movie, likes: movie.likes - 1, liked: false, dislikes: movie.dislikes + 1, disliked: true };
          }
          return { ...movie, dislikes: movie.dislikes + 1, disliked: true };
        }
      });
      state.filteredList = sortMovies(
        state.list.filter(movie => state.selectedCategories.length === 0 || state.selectedCategories.includes(movie.category)),
        state.sortBy
      );
    },
    setCategories: (state, action) => {
      state.categories = action.payload;
    },
    setSelectedCategories: (state, action) => {
      state.selectedCategories = action.payload;
      state.filteredList = sortMovies(
        state.list.filter(movie => state.selectedCategories.length === 0 || state.selectedCategories.includes(movie.category)),
        state.sortBy
      );
      state.currentPage = 1;
    },
    setItemsPerPage: (state, action) => {
      state.itemsPerPage = action.payload;
      state.currentPage = 1;
    },
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
    setSortBy: (state, action) => {
      state.sortBy = action.payload;
      state.filteredList = sortMovies(state.filteredList, state.sortBy);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMovies.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchMovies.fulfilled, (state, action) => {
        const movies = action.payload.map(movie => ({
          ...movie,
          liked: false,
          disliked: false,
          backgroundColor: generateRandomColor(),
        }));
        state.list = movies;
        state.filteredList = sortMovies(movies, state.sortBy);
        state.categories = [...new Set(movies.map(movie => movie.category))];
        state.loading = false;
      })
      .addCase(fetchMovies.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const {
  deleteMovie,
  toggleLike,
  toggleDislike,
  setCategories,
  setSelectedCategories,
  setItemsPerPage,
  setCurrentPage,
  setSortBy,
} = moviesSlice.actions;

export default moviesSlice.reducer;
