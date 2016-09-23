import DS from 'ember-data';

export default DS.Model.extend({
  senior_secondary: DS.attr(),
  intermediate: DS.attr(),
  graduation: DS.attr()
});
