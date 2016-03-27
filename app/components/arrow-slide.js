import Ember from 'ember';
/* global TweenLite */
/* global Power2 */
/* global $ */

export default Ember.Component.extend({

  actions: {
    scrollDown(){
      const height = $(window).height();
      TweenLite.to(window, 1, {scrollTo: {y: height}, ease:Power2.easeOut});
    }
  }
});
