import $ from 'jquery';
import Backbone from 'backbone';

const TweetView = Backbone.View.extend({
  tagName: 'li',
  className: 'tweet',
  template: function(){
    return `
      <section class="tweet-user-info">
        <img src="#" alt="profile picture icon"/>
        <h5>@${this.model.get('username')}</h5>
        <p>${this.model.get('author')}</p>
        <p>${this.model.get('timestamp')}</p>
      </section>
      <main>
        <p class="tweet">${this.model.get('body')}</p>
      </main>
    `;
  },
  render: function() {
    this.$el.html(this.template());
  }
});

export default TweetView;
