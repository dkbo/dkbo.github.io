import {Map} from 'immutable';
import {MENUOPEN} from '../constants';

const json = {
	'menuDisplay': false, // 選單
}
export const menu = (state = Map(json), action) => {
	switch (action.type) {
		case MENUOPEN:
			return state.set('menuDisplay', state.get('menuDisplay') ? false : true);
		default:
			return state;
	}
}
