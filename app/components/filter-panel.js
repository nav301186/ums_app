import Ember from 'ember';
/* global $ */

export default Ember.Component.extend({
minAge: 20,
maxAge: 50,
gender: "male",
range: "",

actions: {
  search() {
    // var range = $("#pref-perpage > option:selected").text();
    // var res = range.split("-");
    // this.set("minAge",res[0]);
    // this.set("maxAge",res[1]);
    // console.log(this.get("minAge"));
    // console.log(this.get("maxAge"));

  }
},





});
