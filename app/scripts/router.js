import $ from 'jquery';
import Backbone from 'backbone';

import settings from './settings';
import tweetsCollection from './collections/Tweets';

import session from './models/session';
import LoginView from './views/loginView';
import LogoutView from './views/logoutView';
import ProfileView from './views/profileView';
import FeedView from './views/feedView';


const Router = Backbone.Router.extend({
  routes : {
    '/*'           :  'loginFunction',
    'login'          :  'loginFunction',
    'login/signup' :  'signupFunction',
    'logout'      :   'logoutFunction',
    'user/:id' :  'profileFunction'
  },
  loginFunction : function(){
    tweetsCollection.off();
    let login = new LoginView();
    login.render();
    $('.container').empty().append(login.$el);
  },
  logoutFunction : function(){
    tweetsCollection.off();
    router.navigate('login', {trigger: true});
  },
  profileFunction : function(id){
    tweetsCollection.off();
    if (!session.get('username')){
      console.log('no find username');
      if (localStorage.getItem('authtoken')) {
        console.log('find auth token');
        session.retrieve();
      }
    } else {
      console.log('found username');

    let logout = new LogoutView();
    let profile = new ProfileView(id);
    let feed = new FeedView();
    $('.container').empty()
                   .append(logout.render().$el)
                   .append(profile.render().$el)
                   .append(feed.render().$el);
   }
  },

});

const router = new Router();

export default router;
