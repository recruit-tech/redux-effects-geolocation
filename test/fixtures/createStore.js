import { createStore, applyMiddleware } from 'redux';
import { default as geo } from '../../src';

export default function () {
  return createStore(() => {
  }, {}, applyMiddleware(geo()));
}
