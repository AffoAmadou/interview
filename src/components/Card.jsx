import { useDispatch } from 'react-redux';
import { toggleLike, toggleDislike } from '../slices/moviesSlice';
import Like from "./like";
import Dislike from "./dislike";

function Card({ id, title, category, likes, dislikes, liked, disliked, backgroundColor, onDelete }) {
  const dispatch = useDispatch();

  const handleLike = () => {
    dispatch(toggleLike(id));
  };

  const handleDislike = () => {
    dispatch(toggleDislike(id));
  };

  const handleDelete = () => {
    if (window.confirm("Are you sure you want to delete this movie?")) {
      onDelete();
    }
  };

  return (
    <div className="card">
      <div className="card__poster" style={{ backgroundColor }}>
        <button className="delete" onClick={handleDelete}>X</button>
      </div>
      <h3 className="movie__title">{title}</h3>
      <p className="movie__category">{category}</p>
      <div className="appreciation">
        <button
          className={`like__wrapper}`}
          onClick={handleLike}
        >
          <Like like={liked} />
          <p className="like__number">{likes}</p>
        </button>
        <button
          className={`like__wrapper}`}
          onClick={handleDislike}
        >
          <Dislike dislike={disliked} />
          <p className="dislike__number">{dislikes}</p>
        </button>
      </div>
    </div>
  );
}

export default Card;
