import Ember from 'ember';

/* global TweenLite */
/* global $ */

export default Ember.Component.extend({
  isRegistering: false,

  actions: {
    showRegForm(id){
      if($("#reg-button").text() === "Done"){
        this.get('createUser')();
        this.set('hasRegistered',true);
      }
      if($("#reg-button").text() === "Sign up"){
        TweenLite.fromTo($(id) , 0.5, {opacity:1,}, {opacity:0, autoAlpha: 0, display:'none'});
        // TweenLite.to($(id) , 0.3, {autoAlpha: 1, display:'none'});
        TweenLite.fromTo($("#popup-age") , 1.2,  {opacity:0}, {opacity:1,display:'block',delay:0.7});
          console.log(id);
          // TweenLite.to($("#reg-button") , 1,  {text:"Done"});
          $("#reg-button").text("Done");
      }

      else{

      TweenLite.fromTo($('#logo') , 0.5, {opacity:1,}, {opacity:0, autoAlpha: 0, display:'none'});
      TweenLite.fromTo($('#tagline') , 0.5, {opacity:1,}, {opacity:0, autoAlpha: 0, display:'none',delay:0.5});
      TweenLite.fromTo($(id) , 1, {opacity:0}, {opacity:1,display:'block',delay:1});
      $("#reg-button").text("Sign up");
    }
    },

    showLoginForm(id){

      if($("#login-button").text()=== "Login")
      {
        console.log(id);
        TweenLite.fromTo($('#logo') , 0.5, {opacity:1,}, {opacity:0, autoAlpha: 0, display:'none'});
      TweenLite.fromTo($('#tagline') , 0.5, {opacity:1,}, {opacity:0, autoAlpha: 0, display:'none',delay:0.5});
      TweenLite.fromTo($("#reg-button") , 0.5, {opacity:1,}, {opacity:0, autoAlpha: 0,display:'none',delay: 1});
      TweenLite.fromTo($(id) , 2, {opacity:0}, {opacity:1,display:'block',delay:1.5,ease:Power2.easeOut});
      $("#login-button").text("Enter");
    }
    else
    {
      this.get('loginUser')();
    }

    },
  }
});
