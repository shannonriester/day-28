import $ from 'jquery';
import Backbone from 'backbone';

import settings from './settings';
import user from './models/session';
import session from './models/session';
import LoginView from './views/loginView';
import LogoutView from './views/logoutView';
import ProfileView from './views/profileView';

const Router = Backbone.Router.extend({
  routes : {
    login          :  'loginFunction',
    'login/signup' :  'signupFunction',
    logout         :  'signoutFunction',
    profile        :  'profileFunction',
    'profile/:id'  :  'idProfileFunction'
  },
  loginFunction : function(){
    let login = new LoginView();
    login.render();
    $('.container').empty().append(login.$el);
  },
  profileFunction : function(){
    // console.log( ' session', session.firstname);
    // console.log( ' user', user.firstname);
    let logout = new LogoutView();
    let profile = new ProfileView();

    $('.container').empty().append(logout.render().$el);
  }

});

const router = new Router();

export default router;
