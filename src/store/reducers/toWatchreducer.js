
const initialState = {
  movies: [
    {
      "title": "Indiana Johns",
      "director": "Stiven Spilberg",
      "id": 1,
      "isDone": false
    },
    {
      "title": "Lord of the rings",
      "director": "Peter Jackson",
      "isDone": true,
      "id": 1655206999251
    },
    {
      "title": "Гладиатор",
      "director": "Ридли Скотт",
      "isDone": false,
      "id": 1655209099993
    }
  ]
}

export default function toWatchReducer(state = initialState, {type, payload}) {
  switch (type){
    case 'addToWatch': return {...state, movies: [...state.movies, payload]};
    case 'delToWatch': return {...state, 
      movies: [...state.movies.filter((movie) => movie.id !== payload)]};
    case 'toggleToWatch': return {...state, 
      movies: state.movies.map((movie) => movie.id === payload
        ? {...movie, isDone: !movie.isDone}
        : movie)};
    default: return state;
  }
}