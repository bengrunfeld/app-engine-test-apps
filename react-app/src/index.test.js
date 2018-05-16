import React from 'react'
import Enzyme, { shallow, mount, render } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16';
import Component from './index'

Enzyme.configure({adapter: new Adapter()});

describe('<Component />', () => {
  test('renders an h1 tag', () => {
    const wrapper = shallow(<MyComponent />);
    expect(wrapper.find(Component)).toBe(1);
  });
})


