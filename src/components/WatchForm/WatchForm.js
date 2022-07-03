import React from 'react'
import './WatchForm.css';
import {useField} from '../../hooks';
import { connect } from 'react-redux';
import {addToWatchAction} from '../../store/actions/toWatchAction';

function WatchForm({addToWatchAction}) {
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
    addToWatchAction(newToWatch);
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
  addToWatchAction
}

export default connect(null, mapDispatchToProps)(WatchForm)