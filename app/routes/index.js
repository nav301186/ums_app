import Ember from 'ember';
import ApplicationRouteMixin from 'ember-simple-auth/mixins/application-route-mixin';
export default Ember.Route.extend(ApplicationRouteMixin,{

  session: Ember.inject.service(),
  currentUser: Ember.inject.service(),

  model() {
    var model = this.store.createRecord('user');
    return model;
  },

  actions: {
    createUser: function(){
    console.log("user created");
    this.currentModel.set('hasRegistered',true);
    this.currentModel.save();

  },

  showWelcomeMessage: function(){
    this.set('hasRegistered',true);
  },

  loginUser: function(){
    let credentials = this.currentModel.getProperties('email','password');
    let authenticator = 'authenticator:jwt';

     this.get('session').authenticate(authenticator, credentials).then((result) => {
       console.log(result);
      // this.get('currentUser').load();
      this.transitionTo('profile');
    },(reason) => {
      console.log(reason);
    });
  }
}
});
