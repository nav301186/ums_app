import Ember from 'ember';
const { service } = Ember.inject;
import ApplicationRouteMixin from 'ember-simple-auth/mixins/application-route-mixin';

export default Ember.Route.extend (ApplicationRouteMixin,{
  store: service(),
  currentUser: service(),

beforeModel: function(){
    return this.get('currentUser').load();
},

  model: function() {
      let user = this.get('store').get('user');
      return user;
  },

  // afterModel(model, transition) {
  //   if (model.user.get('id') === this.get('sessionAccount.user.id')) {
  //     // Allow Editing
  //   }
  //   else{
  //     this.transitionTo('index');
  //   }
  // }
});
