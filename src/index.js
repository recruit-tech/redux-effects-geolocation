/*
 * Constants
 */
const NOT_SUPPORTED = 0;

/*
 * Action types
 */
const GET_POSITION = 'EFFECT_GEO_GET_POSITION';

/*
 * Action creators
 */
export function getPosition(options) {
  return {
    type: GET_POSITION,
    payload: {
      options,
    },
  };
}

/*
 * Middleware
 */
export default function geoMiddleware() {
  const navigator = typeof window !== 'undefined' ? window.navigator : null;

  return ({ dispatch }) => (next) => (action) => {
    if (action.type !== GET_POSITION) {
      return next(action);
    }

    if (!navigator || !navigator.geolocation) {
      return Promise.reject(Object.assign(new Error('geo location API is not supported'), { code: NOT_SUPPORTED }));
    }

    const { options } = action.payload;
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(resolve, reject, options);
    });
  };
}
