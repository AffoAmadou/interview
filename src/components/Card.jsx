import { useDispatch } from 'react-redux';
import { toggleLike, toggleDislike } from '../slices/moviesSlice';
import ConfirmationDialog from "./ConfirmationDialog";
import Like from "./like";
import Dislike from "./dislike";
import { useState, useRef, useEffect } from 'react';
import gsap from 'gsap';


function Card({ id, title, category, likes, dislikes, liked, disliked, backgroundColor, onDelete, index }) {
  const dispatch = useDispatch();

  const [showDialog, setShowDialog] = useState(false);
  const cardRef = useRef(null);

  const handleLike = () => {
    dispatch(toggleLike(id));
  };

  const handleDislike = () => {
    dispatch(toggleDislike(id));
  };

  const handleDelete = () => {
    setShowDialog(true);
  };

  const confirmDelete = () => {
    gsap.to(cardRef.current, {
       duration: 0.5,
        opacity: 0, 
        onStart: () => {
          setShowDialog(false);
        },
       onComplete: 
        () =>
        {
          onDelete();
        }
        });


  };

  const cancelDelete = () => {
    setShowDialog(false);
  };

  useEffect(() => {
    gsap.from(cardRef.current, {
      duration: 0.5,
      opacity: 0,
      y: 50,
      ease: "power2.out",
      delay: 0.05 * index
    });
  }
  , []);

  return (
    <>
    <div ref={cardRef} className="card">
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

    {showDialog && (
        <ConfirmationDialog
          message={"Are you sure you want to delete : " + title + " ?"} 
          onConfirm={confirmDelete}
          onCancel={cancelDelete}
        />
      )}
    </>
  );
}

export default Card;
