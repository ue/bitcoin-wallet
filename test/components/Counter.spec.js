import { spy } from 'sinon';
import React from 'react';
import { shallow } from 'enzyme';
import { BrowserRouter as Router } from 'react-router-dom';
import renderer from 'react-test-renderer';
import Wallet from '../../app/components/Wallet';

function setup() {
  const actions = {
    increment: spy(),
    incrementIfOdd: spy(),
    incrementAsync: spy(),
    decrement: spy()
  };
  const component = shallow(<Wallet wallet={1} {...actions} />);
  return {
    component,
    actions,
    buttons: component.find('button'),
    p: component.find('.wallet')
  };
}

describe('Wallet component', () => {
  it('should should display count', () => {
    const { p } = setup();
    expect(p.text()).toMatch(/^1$/);
  });

  it('should first button should call increment', () => {
    const { buttons, actions } = setup();
    buttons.at(0).simulate('click');
    expect(actions.increment.called).toBe(true);
  });

  it('should match exact snapshot', () => {
    const { actions } = setup();
    const tree = renderer
      .create(
        <div>
          <Router>
            <Wallet wallet={1} {...actions} />
          </Router>
        </div>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('should second button should call decrement', () => {
    const { buttons, actions } = setup();
    buttons.at(1).simulate('click');
    expect(actions.decrement.called).toBe(true);
  });

  it('should third button should call incrementIfOdd', () => {
    const { buttons, actions } = setup();
    buttons.at(2).simulate('click');
    expect(actions.incrementIfOdd.called).toBe(true);
  });

  it('should fourth button should call incrementAsync', () => {
    const { buttons, actions } = setup();
    buttons.at(3).simulate('click');
    expect(actions.incrementAsync.called).toBe(true);
  });
});
