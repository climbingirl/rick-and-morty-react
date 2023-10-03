import { CardElement } from '../../../types/models';

export interface CreateState {
  cards: CardElement[];
}

export enum CreateActionTypes {
  SET_CREATE_CARD = 'SET_CREATE_CARDS',
}

interface SetCreateCard {
  type: CreateActionTypes.SET_CREATE_CARD;
  payload: CardElement;
}

export type CreateAction = SetCreateCard;
