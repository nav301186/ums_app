import Base from 'ember-simple-auth-token/authenticators/jwt';

export default Base.extend({
  getAuthenticateData(credentials) {
    const authentication = {
      [this.passwordField]: credentials.password,
      [this.identificationField]: credentials.email
    };
    return authentication;
  }
});
