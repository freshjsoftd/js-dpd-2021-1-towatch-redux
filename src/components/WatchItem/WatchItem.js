import React from 'react';
import './WatchItem.css';

const contentStyles = {
  color: 'white',
}

function toggleBackground(movie){
  return {
    ...contentStyles,
    backgroundColor: movie.isDone ? 'cadetblue' : 'darkgoldenrod',
  }
}

function WatchItem({movie, onDelete, onToggle}) {

  const onMovieDelete = (e) => { 
    e.stopPropagation();
    onDelete(movie.id)
   }

  const onUpdateMovie = () => { 
     onToggle({...movie, isDone: !movie.isDone})
    }

  return (
    <div
      className='watch-item'
      style={toggleBackground(movie)}
      onClick={onUpdateMovie}
     >
      <p className='content'>{movie.title} produced by {movie.director}</p>
      <span 
        className='delete-btn'
        onClick={onMovieDelete}
            >X</span>
    </div>
  )
}

export default WatchItem