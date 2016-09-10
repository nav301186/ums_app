import Ember from 'ember';
const { service } = Ember.inject;
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend ({
  session: service('session'),

  model: function() {
      // return this.session.get('user');
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
