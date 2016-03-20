import Ember from 'ember';


export default Ember.Component.extend({
  didInsertElement() {

    var controller = new ScrollMagic.Controller({
        vertical:true,
        globalSceneOption: {
      triggerHook: 'OnEnter'
    }
      });

    var tween = new TimelineMax()
    .add([
      TweenMax.to("#with-background", 5, {backgroundPosition: "0 300%", ease: Linear.easeNone}),
      TweenMax.to("#text", 3, {backgroundPosition: "0% 300%", ease: Linear.easeNone})
    ]);
    var scene = new ScrollMagic.Scene({triggerElement: "#with-background",triggerHook: 'onEnter', duration:1500, offset:20})
                .setTween(tween)
                // .setPin("#text")
                .addTo(controller);

}
});
