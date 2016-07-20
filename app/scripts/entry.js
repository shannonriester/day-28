import $ from 'jquery';
import Backbone from 'backbone';

import router from './router';
import settings from './settings';
import session from './models/session';

$(document).ajaxSend(function(evt, xhrAjax, jqueryAjax){
  // console.log('interecepted by ajaxSend...see entry.js');

  if (localStorage.getItem('authtoken')){
    xhrAjax.setRequestHeader('Authorization', 'Kinvey ' + localStorage.getItem('authtoken'));
  } else {
    xhrAjax.setRequestHeader('Authorization', 'Basic ' + settings.basicAuth);
  }
  // console.log('ajax send function ', arguments);

});

Backbone.history.start();

if (!session.get('username')) {
  router.navigate('login', {trigger:true});
} else {
  router.navigate('user/:id', {trigger:true});
}
// console.log(settings);
console.log('username is "shannon"');

console.log('password is "password"');
