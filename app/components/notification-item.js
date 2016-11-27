import Ember from 'ember';

export default Ember.Component.extend({

actions: {
  alterClass(params) {
    console.log(params);
        if(params === "message"){
          return "alert alert-success";
        }
        if(params === "message"){
          return "alert alert-info";
        }
     return "alert alter-info";
  }
},
});
