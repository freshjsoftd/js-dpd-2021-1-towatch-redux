import React from 'react';
import { connect } from 'react-redux';
import WatchItem from '../WatchItem/WatchItem';
import { delToWatch, toggleToWatch } from '../../store/actions/toWatchAction'

function WatchList({movies, delToWatch, toggleToWatch}) {
  // console.log(props)

  const onToggle = (movie) => {
    // const newMovie = {...movie, isDone: !movie.isDone};
    toggleToWatch(movie.id)
  }
  return (
    <div>
      {movies.map((movie) => {
        return (
          <WatchItem 
            key={movie.id}
            movie={movie}
            onToggle={onToggle}
            onDelete={delToWatch}
          />
        )
      })}
    </div>
  )
}

const mapStateToProps = ({movies}, {hello}) => {
  console.log(movies)
  // console.log(hello)
  return {
    movies
  }
}

const mapDispatchToProps = {
  delToWatch, 
  toggleToWatch
}

export default connect(mapStateToProps, mapDispatchToProps)(WatchList)