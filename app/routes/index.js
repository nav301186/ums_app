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

     this.get('session').authenticate(authenticator, credentials).then((result) => {
       console.log(result);
       this.store.queryRecord('user', { name: "Peter" }).then((user) => {
         this.get('session').set('user', user)
         this.transitionTo('profile');
        });
    },(reason) => {
      console.log(reason);
    });
  }
}
});
