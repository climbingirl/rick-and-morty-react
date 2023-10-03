import { CardElement } from '../../../types/models';
import { CreateAction, CreateActionTypes } from './types';

export const setCreateCard = (card: CardElement): CreateAction => ({
  type: CreateActionTypes.SET_CREATE_CARD,
  payload: card,
});
