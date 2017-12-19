// @flow
import type { walletStateType } from '../reducers/wallet';

type actionType = {
  +type: string
};

export const INCREMENT_WALLET = 'INCREMENT_WALLET';
export const DECREMENT_WALLET = 'DECREMENT_WALLET';

export function increment() {
  return {
    type: INCREMENT_WALLET
  };
}

export function decrement() {
  return {
    type: DECREMENT_WALLET
  };
}

export function incrementIfOdd() {
  return (dispatch: (action: actionType) => void, getState: () => walletStateType) => {
    const { wallet } = getState();

    if (wallet % 2 === 0) {
      return;
    }

    dispatch(increment());
  };
}

export function incrementAsync(delay: number = 1000) {
  return (dispatch: (action: actionType) => void) => {
    setTimeout(() => {
      dispatch(increment());
    }, delay);
  };
}
