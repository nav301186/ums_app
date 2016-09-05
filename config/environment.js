/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'ums-app',

    environment: environment,
    baseURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };
  ENV['ember-simple-auth'] = {
  authorizer: 'simple-auth-authorizer:token',
  crossOriginWhitelist: ['*']
};

ENV['ember-simple-auth-token'] = {
  refreshAccessTokens: true,
  timeFactor: 1000,
  refreshLeeway: 300, // Refresh the token 5 minutes (300s) before it expires.
  serverTokenEndpoint: 'https://localhost:4443/api/authenticate',
  crossOriginWhitelist:[
     'https://localhost:4443/api/authenticate'
    ],
  identificationField: 'email',
  passwordField: 'password',
  tokenPropertyName: 'token',
  authorizationPrefix: 'Bearer ',
  authorizationHeaderName: 'Authorization',

  // headers: {},
};
ENV.contentSecurityPolicy = {
  // ... other stuff here
  'connect-src': "'self' http://localhost:4443"
};

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;

  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {

  }

  return ENV;
};
