import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchMovies, deleteMovie, setSortBy } from './slices/moviesSlice';
import './App.scss';
import Card from './components/Card';
import CategoryFilter from './components/CategoryFilter';
import Pagination from './components/Pagination';
import { OrbitProgress } from 'react-loading-indicators';

function App() {
  const dispatch = useDispatch();
  const { filteredList, currentPage, itemsPerPage, loading, error, sortBy } = useSelector((state) => state.movies);
  const [sortOption, setSortOption] = useState(sortBy);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentMovies = filteredList.slice(startIndex, startIndex + itemsPerPage);

  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);

  useEffect(() => {
    dispatch(setSortBy(sortOption));
  }, [sortOption, dispatch]);

  const handleDelete = (id) => {
    dispatch(deleteMovie(id));
  };

  const handleSortChange = (event) => {
    const newSortOption = event.target.value;
    setSortOption(newSortOption);
  };

  if (loading) return <div className='loading'><OrbitProgress color="#32cd32" size="medium" text="" textColor="" /></div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="container">
      <h1 className="title">Latest from the<br/>world of film.</h1>
      <div className="sortings">
        <h2 className="list__title">Movies</h2>
        <Pagination />
      </div>
      <div className="sub__sortings">
        <CategoryFilter />
        <div className="sort__wrapper">
          <div className="label__wrapper">
            <p className="label__tag">Results :</p>
            <p className="label__content">[{filteredList.length}]</p>
          </div>
          <div className="sort__options">
            <label htmlFor="sort">Sort By:</label>
            <select id="sort" value={sortOption} onChange={handleSortChange}>
              <option value="titleAsc">Title Ascending</option>
              <option value="titleDesc">Title Descending</option>
              <option value="likesAsc">Likes Ascending</option>
              <option value="likesDesc">Likes Descending</option>
            </select>
          </div>
        </div>
      </div>
      <div className="card__list">
        {currentMovies.map((movie) => (
          <Card
            key={movie.id}
            id={movie.id}
            title={movie.title}
            category={movie.category}
            likes={movie.likes}
            dislikes={movie.dislikes}
            liked={movie.liked}
            disliked={movie.disliked}
            backgroundColor={movie.backgroundColor} 
            onDelete={() => handleDelete(movie.id)} 
          />
        ))}
      </div>
    </div>
  );
}

export default App;
