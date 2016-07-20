import $ from 'jquery';
import Backbone from 'backbone';

import settings from '../settings';
import userCollection from '../collections/Users';
import session from '../models/session';
import User from '../models/user';

const ProfileView = Backbone.View.extend({
  initialize: function(){
    userCollection.fetch({
      url: `https://baas.kinvey.com/appdata/${settings.appKey}/profile/${username}`,
      success: (model, response) => {
        console.log('response', response);
        console.log('model ', model);
      }
    });
  },
  tagName: 'div',
  className: 'profile',
  events: {},
  template: function(){
    return `
      <div id="short-bio">
        <h2>${session.firstname} ${session.lastname}</h2>
        <h4>@${session.username}</h2>
        <p>a little quote I wrote</p>
        <data>birthday ${session.birthdayMonth} ${session.birthdayDay}, ${session.birthdayYear}</data>
      </div>
      <nav class="nav-profile">
        <ul>
          <li class="li1">tweets</li>
          <li class="li2">following</li>
          <li class="li3">followers</li>
          <li class="li4">likes</li>
        </ul>
      </nav>
      `;
  },
  render: function(){
    this.$el.html(this.template());
    return this;
  }
});

export default ProfileView;
