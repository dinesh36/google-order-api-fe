import LAYOUT_ACTIONS from './layout.action-types';

// eslint-disable-next-line import/prefer-default-export
export const updateTitle = (title: string) => ({
  type: LAYOUT_ACTIONS.UPDATE_TITLE,
  title,
});
