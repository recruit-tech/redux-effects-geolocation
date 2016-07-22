# redux-effects-geolocation

[redux-effects](https://github.com/redux-effects/redux-effects)
middleware for Geolocation API.

## Installation

```
npm install --save redux-effects-geolocation
```

## Usage

### Installing the middleware

```javascript
import { createStore, applyMiddleware } from 'redux';
import geoMiddleware from 'redux-effects-geolocation';
import rootReducer from './reducers';

const store = createStore(
  rootReducer,
  applyMiddleware(
    geoMiddleware()
  )
);
```

### Using Actions:

getting current position:

```javascript
import { getPosition } from 'redux-effects-geolocation';

const propmise = store.dispatch(getPosition());
```

getting current position with options:

```javascript
import { getPosition } from 'redux-effects-geolocation';

const propmise = store.dispatch(getPosition({ enableHighAccuracy: true }));
```

Note: If Geolocation API is not available, the Promise is always rejected.

## API

### Action Creators

#### `getPosition([options])`

###### Arguments

* `options` *(Object)*: See 
  [MDN](https://developer.mozilla.org/en-US/docs/Web/API/PositionOptions)
  for more info.

##### Returns

* *(Object)*: An action object.
