import Ember from 'ember';
/* global $*/

export default Ember.Component.extend({
  didInsertElement() {

 //    $("#recent-visitors").owlCarousel({
 //      // autoPlay: 3000,
 //      navigation : true, // Show next and prev buttons
 //      slideSpeed : 300,
 //      paginationSpeed : 400,
 //      singleItem:true,
 //      item: 2,
 //
 // });

 $('#recent-visitors').owlCarousel({
    // loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
});
}
});
