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


    setupController(controller, model) {
      controller.set('model', model);
      // controller.set('books', model.books);
      // controller.set('authors', model.authors);
    }
});
