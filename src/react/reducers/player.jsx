import { Map } from 'immutable';
import { WAY, POS } from '../constants';

const json = {
	'left': false, //判斷有無按下 左 方向鍵
	'up': false, //判斷有無按下 上 方向鍵
	'right': false, //判斷有無按下 右 方向鍵
	'down': false, //判斷有無按下 下 方向鍵
	'px': 1000, //人物 X 座標
	'py': 600, //人物 Y 座標
	'spx': 700, //人物畫布 X 座標
	'spy': 600, //人物畫布 Y 座標
	'sx': 0, //人物檔案 X 座標裁切點
	'sy': 0, //人物檔案 Y 座標裁切點
	's': 4, //人物行走格數
}
export const player = (state = Map(json), action) => {
  switch (action.type) {
  	case WAY:
  	  return state.set(action.key, action.bool);
  	case POS:
  	  return state.merge({...action.object});
    default:
      return state
  }
}
