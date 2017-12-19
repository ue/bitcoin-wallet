// @flow
import { INCREMENT_WALLET, DECREMENT_WALLET } from '../actions/wallet';

export type walletStateType = {
  +wallet: number
};

type actionType = {
  +type: string
};

export default function wallet(state: number = 0, action: actionType) {
  switch (action.type) {
    case INCREMENT_WALLET:
      return state + 1;
    case DECREMENT_WALLET:
      return state - 1;
    default:
      return state;
  }
}
