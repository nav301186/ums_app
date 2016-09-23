import Ember from 'ember';
const { service } = Ember.inject;
import ApplicationRouteMixin from 'ember-simple-auth/mixins/application-route-mixin';

export default Ember.Route.extend (ApplicationRouteMixin,{
  store: service(),
  currentUser: service(),

  model: function() {
    return this.get('store').findRecord('basicinfo', 'me');
  }
});
