import Backbone from 'backbone';

import tweet from '../models/tweet';
import settings from '../settings';

const Tweets = Backbone.Collection.extend({
  model: tweet,
  url: `https://baas.kinvey.com/appdata/${settings.appKey}/tweets`
});

let userCollection = new Tweets();

export default userCollection;
