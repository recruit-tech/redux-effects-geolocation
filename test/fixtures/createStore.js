import { createStore, applyMiddleware } from 'redux';
import geo from '../../src';

export default function () {
  return createStore(() => {
  }, {}, applyMiddleware(geo()));
}
