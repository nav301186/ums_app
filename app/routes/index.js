import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    var model = this.store.createRecord('register',{
      email:"xyz.com",
      username: "nav3011",
      password: "abrakadabra"
    });
    console.log(model.get('password'));
    return model;
  },

  actions: {
    createUser: function(){
      this.currentModel.save();
    console.log("user created");

    }
  }
});
