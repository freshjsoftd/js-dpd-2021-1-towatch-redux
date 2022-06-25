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
  return (
    <div
      className='watch-item'
      style={toggleBackground(movie)}
      onClick={() => onToggle(movie)}
     >
      <p className='content'>{movie.title} produced by {movie.director}</p>
      <span 
        className='delete-btn'
            >X</span>
    </div>
  )
}

export default WatchItem