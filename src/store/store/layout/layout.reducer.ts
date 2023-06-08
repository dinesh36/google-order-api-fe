import { cloneDeep } from 'lodash';
import LAYOUT_ACTIONS from './layout.action-types';

const initialState = {
  title: 'Google Order Creator Form',
};

export default (state = cloneDeep(initialState),
  action: {type: string, title?: string}) => {
  switch (action.type) {
    case LAYOUT_ACTIONS.UPDATE_TITLE: {
      return {
        ...state,
        title: action.title,
      };
    }
    default:
      return state;
  }
};
