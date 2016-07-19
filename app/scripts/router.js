import $ from 'jquery';
import Backbone from 'backbone';

import settings from './settings';
import session from './models/session';
import LoginView from './views/loginView';

const Router = Backbone.Router.extend({
  routes : {
    login          :  'loginFunction',
    'login/signup' :  'signupFunction',
    logout         :  'signoutFunction',
    profile        :  'profileFunction'
  },
  loginFunction : function(){
    let login = new LoginView();
    login.render();
    $('.container').empty().append(login.$el);
  },
  profileFunction : function(){
    
  }

});

const router = new Router();

export default router;
