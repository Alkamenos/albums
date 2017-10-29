import { SAVE_ALBUM, LOAD_ALBUMS, DELETE_ALBUM } from '../constants/ActionTypes'

const initialState = {
	albums: [],
};

export default function saved(state = initialState, action) {
	switch (action.type) {
		case SAVE_ALBUM:
			return { ...state, albums: [action.album, ...state.albums] };

		case DELETE_ALBUM:
			return { ...state, albums: state.albums.filter(album => album.id !== action.mbid) };

		case LOAD_ALBUMS:
			return { ...state, albums: action.albums };

		default:
			return state
	}
}
