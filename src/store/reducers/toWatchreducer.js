import {
	TOGGLE_TO_WATCH,
	ADD_TO_WATCH,
	DEL_TO_WATCH,
  GET_MOVIES
} from '../actions/toWatchAction';
const initialState = {
	movies: null
  // [
	// 	{
	// 		title: 'Indiana Johns',
	// 		director: 'Stiven Spilberg',
	// 		id: 1,
	// 		isDone: false,
	// 	},
	// 	{
	// 		title: 'Lord of the rings',
	// 		director: 'Peter Jackson',
	// 		isDone: true,
	// 		id: 1655206999251,
	// 	},
	// 	{
	// 		title: 'Гладиатор',
	// 		director: 'Ридли Скотт',
	// 		isDone: false,
	// 		id: 1655209099993,
	// 	},
	// ],
};

export default function toWatchReducer(
	state = initialState,
	{ type, payload }
) {
	switch (type) {
		case ADD_TO_WATCH:
			return { ...state, movies: [...state.movies, payload] };
		case DEL_TO_WATCH:
			return {
				...state,
				movies: [
					...state.movies.filter((movie) => movie.id !== payload),
				],
			};
		case TOGGLE_TO_WATCH:
			return {
				...state,
				movies: state.movies.map((movie) =>
					movie.id === payload
						? { ...movie, isDone: !movie.isDone }
						: movie
				),
			};
    case GET_MOVIES: return { ...state, movies: [...payload]}
		default:
			return state;
	}
}
