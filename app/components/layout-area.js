import Ember from 'ember';
/* global $*/

export default Ember.Component.extend({
  didInsertElement() {

    $("#testimonial").owlCarousel({
      autoPlay: 3000,
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
      TweenMax.to("#with-background", 3, {backgroundPosition: "0 300%", ease: Linear.easeNone}),
      TweenMax.to("#text", 3, {backgroundPosition: "0% 300%", ease: Linear.easeNone})
    ]);
    var scene = new ScrollMagic.Scene({triggerElement: "#with-background",triggerHook: 'onEnter', duration:1500, offset:20})
                .setTween(tween)
                .addTo(controller);

                var scene = new ScrollMagic.Scene({triggerElement: "#with-background",triggerHook: 'onEnter', duration:1500, offset:20})
                            .setTween(tween)
                            .addTo(controller);
}
});
