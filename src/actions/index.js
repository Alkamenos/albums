import fetch from 'isomorphic-fetch'
import { reactLocalStorage } from 'reactjs-localstorage';
import * as types from '../constants/ActionTypes'

const api = 'http://musicbrainz.org/ws/2';

export const saveAlbum = (album) => (dispatch) => {
	dispatch({
		type: types.SAVE_ALBUM,
		album,
	});
	dispatch(updateLocalStorage());
};

export const deleteAlbum = (mbid) => (dispatch) => {
	dispatch({
		type: types.DELETE_ALBUM,
		mbid,
	});
	dispatch(updateLocalStorage());
};

export const loadAlbums = () => (dispatch) => {
	const albums = reactLocalStorage.getObject('albums');
	dispatch({
		type: types.LOAD_ALBUMS,
		albums: [...albums],
	})
};

export const updateLocalStorage = () => (dispatch, getState) => {
	reactLocalStorage.setObject('albums', getState().saved.albums);
};

// export const addAlbumByMbid = (mbid) => (dispatch) => {
//   dispatch(searchAlbumRequest());
//   return fetch(`${api}/release-group/?query=${mbid}&limit=20&fmt=json`)
//     .then(response => response.json())
//     .then(json => dispatch(searchAlbumResponse(json)))
//     .catch(err => dispatch(searchAlbumError(err)));
// };

export const searchAlbumsTextUpdate = (text) => ({
	type: types.SEARCH_ALBUMS_TEXT_UPDATE,
	text,
});

export const searchAlbums = (text) => (dispatch, getState) => {
	const query = getState().search.text;
	dispatch(searchAlbumsRequest(query));
	return fetch(`${api}/release-group/?query=${query}&limit=20&fmt=json`)
		.then(response => response.json())
		.then(json => dispatch(searchAlbumsResponse(json)))
		.catch(err => dispatch(searchAlbumsError(err)));
};

export const searchAlbumsRequest = (text) => ({
	type: types.SEARCH_ALBUMS_REQUEST,
	text,
});

export const searchAlbumsResponse = (json) => ({
	type: types.SEARCH_ALBUMS_RESPONSE,
	albums: json['release-groups']
});

export const searchAlbumsError = (err) => ({ type: types.SEARCH_ALBUMS_ERROR, err });


