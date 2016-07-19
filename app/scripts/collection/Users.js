import Backbone from 'backbone';

import user from '../models/user';
import settings from '../settings';

const Users = Backbone.Collection.extend({
  model: user,
  url: `https://baas.kinvey.com/appdata/${settings.appKey}/tweeterUsers`
});

let userCollection = new Users();

export default userCollection;
