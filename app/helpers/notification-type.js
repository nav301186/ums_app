import Ember from 'ember';

export function notificationType(params/*, hash*/) {
let [sender, type] = params;
console.log(sender);
console.log(type);
if(type === "message"){
  // return " sent you a message";
  return new Ember.Handlebars.SafeString(" sent you a "  + '<a href=""><strong>' + "message" + '</strong></a>');
}
else if(type === "request") {
  return " viewed your profile";
}
}

export default Ember.Helper.helper(notificationType);
