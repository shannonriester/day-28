import Backbone from 'backbone';

import settings from '../settings';

const Session = Backbone.Model.extend({
  urlRoot: `https://baas.kinvey.com/user/${settings.appKey}/login`,
  defaults: {
    username: '',
  },
  parse: function(response){
    if (response) {
      return {
        username: response.username,
        userId: response._id,
        authtoken: response._kmd.authtoken
      };
    }
  }
});

let session = new Session();

export default session;
