import $ from 'jquery';
import Backbone from 'backbone';

import session from '../session';
import settings from '../settings';

const router = Backbone.Router.extend({
  routes : {
    login          :  'loginFunction',
    'login/signup' :  'signupFunction',
    logout         :  'signoutFunction'
  },
  loginFunction : function(){
    let login = new LoginView();
    login.render();
    $('.container').empty().append(login.$el);
  }
});

export default router;
