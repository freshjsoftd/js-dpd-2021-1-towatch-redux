import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import WatchItem from '../WatchItem/WatchItem';
import { delToWatch, toggleToWatch, getMovies } from '../../store/actions/toWatchAction';
import movieService from '../../api/movie-service'

function WatchList({movies, delToWatch, toggleToWatch, getMovies}) {

  useEffect(() => {
    movieService.get('/')
    .then(({data}) => getMovies(data))
    .catch(({statusText}) => console.log(statusText))
  }, [getMovies])


  const onToggle = (movie) => {
    const newMovie = {...movie, isDone: !movie.isDone};
    movieService.put(`/${movie.id}`, newMovie)
    .then(({statusText}) => console.log(statusText))
    .catch(error => console.error(error))
    toggleToWatch(movie.id)
  }
  const onDelete = (id) => { 
    movieService.delete(`/${id}`)
    .then(({statusText}) => console.log(statusText))
    .catch(error => console.error(error))
    delToWatch(id)
   }
  return (
    <div>
      {!movies ? 'Loading ... ' : movies.map((movie) => {
        return (
          <WatchItem 
            key={movie.id}
            movie={movie}
            onToggle={onToggle}
            onDelete={onDelete}
          />
        )
      })}
    </div>
  )
}

const mapStateToProps = ({toWatchList: {movies}, contactsList: {contacts}}) => {
  console.log(movies)
  return {
    movies,
    contacts
  }
}

const mapDispatchToProps = {
  delToWatch, 
  toggleToWatch,
  getMovies
}
// const mapDispatchToProps = function(dispatch) {
//   return {
//     delToWatch: (id) => dispatch(delToWatch(id)),
//     toggleToWatch: (id) => dispatch(toggleToWatch(id)),
//   }
// }

export default connect(mapStateToProps, mapDispatchToProps)(WatchList)