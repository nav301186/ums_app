import Ember from 'ember';
/* global $*/

export default Ember.Component.extend({
  didInsertElement() {

    $("#testimonial").owlCarousel({
      // autoPlay: 3000,
      navigation : true, // Show next and prev buttons
      slideSpeed : 300,
      paginationSpeed : 400,
      singleItem:true,

 });
}
});
