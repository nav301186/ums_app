import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  //  this.route('index', { path: '/logon' });
    this.route('profile', function() {
    this.route('basicinfo');
    this.route('educationalinfo');
    this.route('astroinfo');
    this.route('otherinfo');
  });
  // this.route('profile',{path: '/profile/:user_name'});
  // this.route('notifications');
  // this.route('other');
});

export default Router;
