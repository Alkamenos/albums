import { combineReducers } from 'redux'
import search from './search'
import saved from './saved'

const rootReducer = combineReducers({
	search,
	saved,
});

export default rootReducer
