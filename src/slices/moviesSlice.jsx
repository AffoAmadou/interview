import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { movies$ } from '../assets/data/movies';

const generateRandomColor = () => {
  return "#" + Math.floor(Math.random() * 16777215).toString(16);
};

const sortMovies = (movies, sortBy) => {
  return movies.slice().sort((a, b) => {
    if (sortBy === 'titleAsc') {
      return a.title.localeCompare(b.title);
    } else if (sortBy === 'titleDesc') {
      return b.title.localeCompare(a.title);
    } else if (sortBy === 'likesAsc') {
      return a.likes - b.likes;
    } else if (sortBy === 'likesDesc') {
      return b.likes - a.likes;
    } else {
      return 0;
    }
  });
};

export const fetchMovies = createAsyncThunk('movies/fetchMovies', async () => {
  const response = await new Promise((resolve) => {
    setTimeout(() => {
      resolve(movies$);
    }, 3000); 
  });
  return response;
});

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
    sortBy: 'titleAsc', // Default sorting
  },
  reducers: {
    deleteMovie: (state, action) => {
      const updatedList = state.list.filter(movie => movie.id !== action.payload);
      state.list = updatedList;
      state.filteredList = sortMovies(updatedList.filter(movie =>
        state.selectedCategories.length === 0 || state.selectedCategories.includes(movie.category)
      ), state.sortBy);
      state.categories = [...new Set(updatedList.map(movie => movie.category))];
      state.currentPage = 1;
    },
    toggleLike: (state, action) => {
      const updatedList = state.list.map(movie => {
        if (movie.id === action.payload) {
          if (movie.liked) {
            return { ...movie, likes: movie.likes - 1, liked: false };
          } else {
            if (movie.disliked) {
              return { ...movie, dislikes: movie.dislikes - 1, disliked: false, likes: movie.likes + 1, liked: true };
            }
            return { ...movie, likes: movie.likes + 1, liked: true };
          }
        }
        return movie;
      });
      state.list = updatedList;
      state.filteredList = sortMovies(updatedList.filter(movie =>
        state.selectedCategories.length === 0 || state.selectedCategories.includes(movie.category)
      ), state.sortBy);
    },
    toggleDislike: (state, action) => {
      const updatedList = state.list.map(movie => {
        if (movie.id === action.payload) {
          if (movie.disliked) {
            return { ...movie, dislikes: movie.dislikes - 1, disliked: false };
          } else {
            if (movie.liked) {
              return { ...movie, likes: movie.likes - 1, liked: false, dislikes: movie.dislikes + 1, disliked: true };
            }
            return { ...movie, dislikes: movie.dislikes + 1, disliked: true };
          }
        }
        return movie;
      });
      state.list = updatedList;
      state.filteredList = sortMovies(updatedList.filter(movie =>
        state.selectedCategories.length === 0 || state.selectedCategories.includes(movie.category)
      ), state.sortBy);
    },
    setCategories: (state, action) => {
      state.categories = action.payload;
    },
    setSelectedCategories: (state, action) => {
      state.selectedCategories = action.payload;
      state.filteredList = sortMovies(state.list.filter(movie =>
        state.selectedCategories.length === 0 || state.selectedCategories.includes(movie.category)
      ), state.sortBy);
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
        const movies = action.payload;
        state.list = movies.map(movie => ({
          ...movie,
          liked: false,
          disliked: false,
          backgroundColor: generateRandomColor(), 
        }));
        state.filteredList = sortMovies(state.list, state.sortBy);
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
