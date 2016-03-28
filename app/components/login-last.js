import Ember from 'ember';

export default Ember.Component.extend({

isRegistering: false,

  actions: {
    showForm(){
      this.set('isRegistering', true);
    }
  }
});
