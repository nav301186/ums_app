import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('profile', function() {
    this.route('notification');

    this.route('me', function() {
        this.route('userinfo');
        this.route('educationalinfo');
        this.route('astroinfo');
        this.route('otherinfo');
    });
  });

});

export default Router;
