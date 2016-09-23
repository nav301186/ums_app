import Ember from 'ember';
const { service } = Ember.inject;
import ApplicationRouteMixin from 'ember-simple-auth/mixins/application-route-mixin';

export default Ember.Route.extend (ApplicationRouteMixin,{
  store: service(),
  currentUser: service(),
//
// beforeModel: function(){
//     return this.get('currentUser').load();
// },

  model: function() {
    return this.get('store').find('user','me');
  },
});