import {WAY, POS} from '../constants';

export function way(key, bool) {
  return {
    type: WAY,
    key,
    bool,
  };
}
export function pos(object) {
  return {
    type: POS,
    object,
  };
}
