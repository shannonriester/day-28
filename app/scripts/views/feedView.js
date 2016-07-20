import $ from 'jquery';
import Backbone from 'backbone';

import tweetCollection from '../collections/Tweets';
import Tweet from '../models/tweet';
import TweetView from './tweetView';
// import session from '../models/session';

const FeedView = Backbone.View.extend({
  initialize: function(){
    tweetCollection.on('add', () => {
      this.render();
    });
    tweetCollection.on('change', () => {
      this.render();
    });
    tweetCollection.fetch();
  },
  tagName: 'div',
  className: 'tweets-feed',
  template: function(){
    return `
      <h2>Tweets</h2>
      <ul class="tweets-feed">
      </ul>
    `;
  },
  render: function(){
    this.$el.html(this.template());
    tweetCollection.forEach((tweet) => {
      var tweetItem = new TweetView({
        model: tweet
      });
      tweetItem.render();
      this.$('.tweets-feed').append(tweetItem.$el);
  });
    return this;
  }

});

export default FeedView;
