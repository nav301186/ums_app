import Ember from 'ember';


export default Ember.Component.extend({
  didInsertElement() {

    // var controller = new ScrollMagic.Controller({
    //     vertical:true,
    //     globalSceneOption: {
    //   triggerHook: 'OnEnter'
    // }
    //   });
    //
    // var tween = new TimelineMax()
    // .add([
    //   TweenMax.to("#with-background", 5, {backgroundPosition: "0 220%", ease: Linear.easeNone}),
    //   TweenMax.to("#text", 5, {backgroundPosition: "0% 200%", ease: Linear.easeNone})
    // ]);
    // var scene = new ScrollMagic.Scene({triggerElement: "#with-background",triggerHook: 'onEnter', duration:1500, offset:20})
    //             .setTween(tween)
    //             // .setPin("#text")
    //             .addTo(controller);

    $("body").vegas({
      delay: 7000,
   timer: false,
   shuffle: false,
   transition: 'slideDown2',
   transitionDuration: 2000,
    slides: [
        { src: "assets/slide1.jpg", color: '#CBC2B9', animation: 'kenburns', transition: 'zoomOut' },
        { src: "assets/slide2.jpg" , color: '#F6B700', transition: 'swirlRight2', transitionDuration: 8000 },
        { src: "assets/slide3.jpg" , color: '#C47F48', transition: 'swirlRight' },
    ]
  })('overlay', {
      src:'assets/overlays/11.png'
    });
}
});
