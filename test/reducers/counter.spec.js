import wallet from '../../app/reducers/wallet';
import { INCREMENT_WALLET, DECREMENT_WALLET } from '../../app/actions/wallet';

describe('reducers', () => {
  describe('wallet', () => {
    it('should handle initial state', () => {
      expect(wallet(undefined, {})).toMatchSnapshot();
    });

    it('should handle INCREMENT_WALLET', () => {
      expect(wallet(1, { type: INCREMENT_WALLET })).toMatchSnapshot();
    });

    it('should handle DECREMENT_WALLET', () => {
      expect(wallet(1, { type: DECREMENT_WALLET })).toMatchSnapshot();
    });

    it('should handle unknown action type', () => {
      expect(wallet(1, { type: 'unknown' })).toMatchSnapshot();
    });
  });
});
