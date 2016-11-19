import { Map } from 'immutable';
import { SEC} from '../constants';

const json = {
	'mapId': 0, // 地圖編號
	'msx': 0, //地圖檔案 X 座標裁切點
	'msy': 0, //地圖檔案 Y 座標裁切點
	'mUp': 0,
	'mDw': 0,
	'mLf': 0,
	'mRf': 0,
	'isTransSence': true,
}
export const sence = (state = Map(json), action) => {
  switch (action.type) {
  	case SEC:
  	  return state.merge({...action.object});
    default:
      return state
  }
}
