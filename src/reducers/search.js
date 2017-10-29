import { SEARCH_ALBUMS_REQUEST, SEARCH_ALBUMS_RESPONSE, SEARCH_ALBUMS_TEXT_UPDATE } from '../constants/ActionTypes'

const initialState = {
	albums: [],
	text: 'Reload',
};

export default function search(state = initialState, action) {
	switch (action.type) {
		case SEARCH_ALBUMS_TEXT_UPDATE:
			return { ...state, text: action.text };

		case SEARCH_ALBUMS_REQUEST:
			return { ...state, isSearch: true };
		case SEARCH_ALBUMS_RESPONSE:
			return { ...state, isSearch: false, albums: action.albums };

		default:
			return state
	}
}
