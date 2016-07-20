import $ from 'jquery';
import Backbone from 'backbone';

import session from '../models/session';

const TweetView = Backbone.View.extend({
  tagName: 'li',
  className: 'tweetLi',
  events: {
    'click .delete': 'deleteFunction',
    'click .edit':'editFunction'
  },
  deleteFunction: function() {
    this.model.destroy();
  },
  template: function(){
    if (session.get('username') !== this.model.get('author')){
      return `
        <section class="tweet-user-info">
          <ul class="ul-edit-btns">
            <li><button class="edit">Edit</button></li>
          </ul>
          <a href="#${this.model.get('_id')}"><h5>@${this.model.get('username')}</h5></a>
          <p>${this.model.get('author')}</p>
          <p>${this.model.get('timestamp')}</p>
        </section>
        <main>
          <p class="tweet">${this.model.get('body')}</p>
        </main>
      `;
    } else {
      return `
        <section class="tweet-user-info">
          <ul-edit-btns>
            <li><button class="edit">Edit</button></li>
            <li><button class="delete">Delete</button></li>
          </ul>
          <a href="#${this.model.get('_id')}"><h5>@${this.model.get('username')}</h5></a>
          <p>${this.model.get('author')}</p>
          <p>${this.model.get('timestamp')}</p>
        </section>
        <main>
          <p class="tweet">${this.model.get('body')}</p>
        </main>
      `;
    }
    },
  render: function() {
    this.$el.html(this.template());
  }
});

export default TweetView;
