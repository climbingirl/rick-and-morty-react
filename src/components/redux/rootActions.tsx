import * as charactersActions from './characters/actions';
import * as createActions from './create/actions';

export const rootActions = {
  ...charactersActions,
  ...createActions,
};
