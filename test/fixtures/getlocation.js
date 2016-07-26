export const POSITION = {
  coords: {
    accuracy: 1813,
    altitude: null,
    altitudeAccuracy: null,
    heading: null,
    latitude: 35.6754208,
    longitude: 139.7626623,
    speed: null,
  },
};

export function installGeoLocationSuccess() {
  global.window = {
    navigator: {
      geolocation: {
        getCurrentPosition(success, failure, options) {
          success(POSITION);
        },
      },
    },
  };
}

export function installGeoLocationFailure() {
  global.window = {
    navigator: {
      geolocation: {
        getCurrentPosition(success, failure, options) {
          const err = new Error('User denied Geolocation');
          err.code = 1;
          failure(err);
        },
      },
    },
  };
}
