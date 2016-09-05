import Ember from 'ember';

export default Ember.Route.extend({

  session: Ember.inject.service(),

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

     this.get('session').authenticate(authenticator, credentials);
    //  console.log(this.get('session.content.secure.token'));
    let user = this.store.query('user', { name: "Peter" });
    console.log(user);
    //  this.transitionTo('profile', this.store.query('user', { name: "Peter" }));
  //  this.store.query('user', { orderby: 'username'}).then(function(peter){
  //     console.log(peter.username);
  }
}
});
