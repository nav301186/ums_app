import DS from 'ember-data';

// app/serializers/cat.js
export default DS.RESTSerializer.extend({
  normalizeResponse(store, primaryModelClass, payload, id, requestType) {
    payload = {
      basicinfo: payload
    };

    return this._super(store, primaryModelClass, payload, id, requestType);
  }
});
