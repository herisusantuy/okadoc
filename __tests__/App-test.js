import 'react-native';
import React from 'react';
import App from '../App';
import CustomeButton from '../js/component/common/CustomButton';
// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

test('App snapShot', () => {
  const snap = renderer.create(<App />).toJSON();
  expect(snap).toMatchSnapshot();
});

test('Custom Button snapShot', () => {
  const snap = renderer.create(<CustomeButton />).toJSON();
  expect(snap).toMatchSnapshot();
});
