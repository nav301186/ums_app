import Ember from 'ember';

export default Ember.Component.extend({

actions: {
  search() {
        this.transitionTo("search");

  }
},
});
