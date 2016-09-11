import Ember from 'ember';

const {inject: {service}, isEmpty,RSVP} = Ember;

export default Ember.Service.extend({
store: service(),
session: service('session'),
load() {
   this.get('store').find('user','me').then((user) => {
     this.get('store').set('user', user);
    });
},

loadBasicInfo() {
  this.get('store').findRecord('basicinfo', 'me').then((info) => {
    this.get('store').set('basicInfo', info);
   });
}
});
