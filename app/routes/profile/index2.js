import Ember from 'ember';
const { service } = Ember.inject;
import ApplicationRouteMixin from 'ember-simple-auth/mixins/application-route-mixin';

export default Ember.Route.extend (ApplicationRouteMixin,{
  // store: service(),
  // currentUser: service(),
//
// beforeModel: function(){
//     return this.get('currentUser').load();
// },

  model() {
          // return this.get('store').findRecord('basicinfo', 'me');
    return Ember.RSVP.hash({
      // basicinfo: this.get('store').findRecord('basicinfo', 'me'),
      notifications:  this.get('store').findAll('notification')
   });

  },


  // setupController(controller, model) {
  //   controller.set('basicinfo', model.basicinfo);
  //   controller.set('notifications', model.notifications);
  // }
});
