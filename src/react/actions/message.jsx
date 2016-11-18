import {MES} from '../constants';

export function mes(object){
  return {
    type: MES,
    object,
  };
}
