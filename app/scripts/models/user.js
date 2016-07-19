import Backbone from 'backbone';

import settings from '../settings';

const User = Backbone.Model.extend({
  idAttribute: '_id',
  urlRoot: `https://baas.kinvey.com/appdata/${settings.appKey}/tweeterUsers`,
  defaults: {
    username: ''
  }
});

let user = new User();

export default user;
