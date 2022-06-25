import React from 'react'

const contentStyles = {
  color: 'white',
  // backgroundColor: 'blue'
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
      style={toggleBackground(movie)}
     onClick={() => onToggle(movie)}
     >
      {movie.title} produced by {movie.director}
    </div>
  )
}

export default WatchItem