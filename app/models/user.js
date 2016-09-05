import DS from 'ember-data';
import attr from 'ember-data/attr';

export default DS.Model.extend({
  hasRegistered: attr(),
  email: attr(),
  password: attr(),
  username: attr(),
  age: attr(),
  gender: attr()
});
