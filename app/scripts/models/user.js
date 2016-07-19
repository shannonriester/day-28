import Backbone from 'backbone';

import settings from '../settings';

const User = Backbone.Model.extend({
  idAttribute: '_id',
  urlRoot: `https://baas.kinvey.com/user/${settings.appKey}`,
  defaults: {
    username: ''
  }
});

let user = new User();

export default user;
