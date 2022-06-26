import React from 'react'
import './WatchForm.css';
import {useField} from '../../hooks';
import { connect } from 'react-redux';
import {addToWatch} from '../../store/actions/toWatchAction';
// import movieService from '../../api/movie-service'


function WatchForm({addToWatch}) {
  const title = useField('');
  const director = useField('');

  const createToWatch = (e) => { 
    e.preventDefault();
    const newToWatch = {
      id: Date.now(),
      title: title.value,
      director: director.value,
      isDone: false
    }
    addToWatch(newToWatch);
    fetch('http://localhost:5000/watch/', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(newToWatch)
    })
   }

  return (
    <form 
      className="watch-form"
      onSubmit={createToWatch} 
    >
      <input type="text" name="title" {...title} />
      <input type="text" name="director" {...director}
      />
      <button className="add">Add</button>
    </form>
  )
}


const mapDispatchToProps = {
  addToWatch
}

export default connect(null, mapDispatchToProps)(WatchForm)