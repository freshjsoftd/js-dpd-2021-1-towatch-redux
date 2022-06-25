import React from 'react'
import './WatchForm.css';
import {useField} from '../../hooks'

function WatchForm() {
  const title = useField('');
  const director = useField('');

  return (
    <form 
    className="watch-form" 
    >
      <input type="text" name="title" {...title} />
      <input
        type="text"
        name="director"
        {...director}
      />
      <button className="add">Add</button>
    </form>
  )
}

export default WatchForm