import $ from 'jquery';
import Backbone from 'backbone';

import userCollection from '../collections/Users';
import session from '../models/session';
import user from '../models/user';

const ProfileView = Backbone.View.extend({
  initialize: function(){
    userCollection.on('add', () =>{
      this.render();
      console.log(this);
    });
    userCollection.fetch();
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
        <data>joined on:${user.joinedOn}</data>
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
  }
});

export default ProfileView;
