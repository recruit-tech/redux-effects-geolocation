import { test } from 'eater/runner';
import assert from 'assert';
import { useFakeTimers } from 'sinon';
import mustCall from 'must-call';
import { getPosition } from '../src';
import { POSITION, installGeoLocationSuccess, installGeoLocationFailure } from './fixtures/getlocation';
import createStore from './fixtures/createStore';

test('unsupported', () => {
  const store = createStore();
  store.dispatch(getPosition()).then(assert.fail, mustCall((err) => {
    assert(/not supported/.test(err.message));
  }));
});

test('geolocation, success', () => {
  installGeoLocationSuccess();
  const store = createStore();
  store.dispatch(getPosition()).then(mustCall((position) => {
    assert.deepEqual(position, POSITION);
  }), assert.fail);
});

test('geolocation, failure', () => {
  installGeoLocationFailure();
  const store = createStore();
  store.dispatch(getPosition()).then(assert.fail, mustCall((error) => {
    assert(error.code === 1);
  }));
});
