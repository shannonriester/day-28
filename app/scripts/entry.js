import $ from 'jquery';
import Backbone from 'backbone';

import router from './router';
import settings from './settings';
import session from './models/session';

$(document).ajaxSend(function(evt, xhrAjax, jqueryAjax){
  // console.log('interecepted by ajaxSend...see entry.js');

  if (session.get('authtoken')){
    xhrAjax.setRequestHeader('Authorization', 'Kinvey ' + session.get('authtoken'));
  } else {
    xhrAjax.setRequestHeader('Authorization', 'Basic ' + settings.basicAuth);
  }

  console.log('ajax send function ', arguments);

});

Backbone.history.start();

if (!session.username) {
  router.navigate('login', {trigger:true});
}
// console.log(settings);
console.log('username is "shannon"');

console.log('password is "password"');
