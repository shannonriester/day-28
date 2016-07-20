import Backbone from 'backbone';
import TweetPost from './tweetPost';
// import TweetView from './tweetView';
import FeedView from './feedView';

const TweetPageView = Backbone.View.extend({
  render: function(){
    let tweetPost =  new TweetPost();
    tweetPost.render();
    let feedView =  new FeedView();
    feedView.render();
    this.$el.append([feedView.$el, tweetPost.$el]);
    return this;
  }
});

export default TweetPageView;
