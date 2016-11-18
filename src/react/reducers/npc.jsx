import { Map } from 'immutable';
import { MES } from '../constants';

const json = {
	'messageCount': 0,
	'isChat': false,
	'npcName': '',
	'npcMessage': '',
}
export const npc = (state = Map(json), action) => {
  switch (action.type) {
  	case MES:
  	  return state.merge({...action.object});
    default:
      return state
  }
}
