import 'react-native';
import React from 'react';
import App from '../App';
import {multiply, add, getPrime, getFibonacci} from '../js/helper/formula';
// Note: test renderer must be required after react-native.
// import renderer from 'react-test-renderer';

it('Function Multiply test', () => {
  expect(multiply(3, 3)).toEqual(9);
});

it('Function Add test', () => {
  expect(add(3, 3)).toEqual(6);
});

it('Function getPrime test', () => {
  expect(getPrime(4)).toEqual('2,3');
});

it('Function getFibonacci test', () => {
  expect(getFibonacci(4)).toEqual('0,1,1,2');
});
