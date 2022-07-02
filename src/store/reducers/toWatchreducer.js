import ACTION_TYPES from '../actions/actionTypes'
const initialState = {
	movies: [],
	isFetching: false,
	error: null,
};

export default function toWatchReducer(state = initialState, { type, payload }
) {
	switch (type) {
		// Create
		case ACTION_TYPES.POST_MOVIE_SUCCESS:
			return { ...state, movies: [...state.movies, payload], isFetching: false };
		case ACTION_TYPES.POST_MOVIE_REQUEST: return {...state, isFetching: true};
		case ACTION_TYPES.POST_MOVIE_ERROR: return { ...state, isFetching: false, error: payload}
		// Delete
		case ACTION_TYPES.DELETE_MOVIE_SUCCESS:
			return {
				...state,
				movies: [	...state.movies.filter((movie) => movie.id !== payload)],
				isFetching: false
			};
		case ACTION_TYPES.DELETE_MOVIE_REQUEST: return {...state, isFetching: true};
		case ACTION_TYPES.DELETE_MOVIE_ERROR: return { ...state, isFetching: false, error: payload}
		//  Update
		case ACTION_TYPES.PUT_MOVIE_SUCCESS: return {...state,
				movies: state.movies.map((movie) =>
					movie.id === payload.id
						? { ...movie, isDone: !movie.isDone }
						: movie
				),
				isFetching: false
			};
		case ACTION_TYPES.PUT_MOVIE_REQUEST: return {...state, isFetching: true};
		case ACTION_TYPES.PUT_MOVIE_ERROR: return { ...state, isFetching: false, error: payload}	
		// Get
    case ACTION_TYPES.GET_MOVIES_SUCCESS: return { ...state, movies: [...payload], isFetching: false}
		case ACTION_TYPES.GET_MOVIES_REQUEST: return {...state, isFetching: true};
		case ACTION_TYPES.GET_MOVIES_ERROR: return { ...state, isFetching: false, error: payload}
		default:
			return state;
	}
}
