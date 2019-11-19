import React from 'react';
import App from "../src/components/App"
import { shallow } from './enzyme';
import { shallowToJson  } from 'enzyme-to-json';

it('renders correctly', () => {
  const app = shallow(<App/>);
  expect(shallowToJson(app)).toMatchSnapshot();
});