import Ember from 'ember';

const {inject: {service}, isEmpty,RSVP} = Ember;

export default Ember.Service.extend({
store: service(),
session: service('session'),
load() {
   this.get('store').queryRecord('user', { name: "Peter" }).then((user) => {
     this.get('store').set('user', user);
    });
}
});
