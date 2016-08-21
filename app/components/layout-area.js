import Ember from 'ember';
/* global $*/
/* global TweenMax */
/* global TweenLite */
/* global ScrollMagic */
/* global TimelineMax */
/* global Linear */
/* global Scene */
/* global Power2 */

export default Ember.Component.extend({
  didInsertElement() {

    $("#testimonial").owlCarousel({
      // autoPlay: 3000,
      navigation : true, // Show next and prev buttons
      slideSpeed : 300,
      paginationSpeed : 400,
      singleItem:true,

 });



 $('#myCarousel').carousel({
  interval: 3000,
  cycle: true
});

    var controller = new ScrollMagic.Controller({
        vertical:true,
        globalSceneOption: {
      triggerHook: 'OnEnter'
    }
      });

    var tween = new TimelineMax()
    .add([
      TweenMax.to("#text", 3, {backgroundPosition: "0% 300%", ease: Linear.easeNone})
    ]);
}
});
