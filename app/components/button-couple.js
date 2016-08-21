import Ember from 'ember';

/* global TweenLite */
/* global $ */
/* global Linear*/

export default Ember.Component.extend({
  isRegistering: false,

  actions: {
    showRegForm(id){
       console.log(id);
      TweenLite.fromTo($(id) , 2, {opacity:0}, {opacity:1,display:'block'});
      $("#reg-button").text("Sign up");
    },

    showLoginForm(id){
      TweenLite.fromTo($(id) , 2, {opacity:0}, {opacity:1,display:'block'});
    },
  }
});
