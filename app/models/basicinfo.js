import DS from 'ember-data';
import attr from 'ember-data/attr';

export default DS.Model.extend({
  name: attr(),
  age: attr(),
  contact_number: attr(),
  dob: attr(),
  city: attr(),
  hometown: attr(),
  user_id: attr(),
});
