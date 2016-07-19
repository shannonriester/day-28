import $ from 'jquery';
import Backbone from 'backbone';

import router from '../router';
import settings from '../settings';
import session from '../models/session';
import LoginView from './loginView';

const SignupView = Backbone.View.extend({
    tagName: 'form',
    className: 'signup-form',
    events: {
        'submit' : 'signupFunction',
        'click .cancel-btn' : 'cancelFunction'
    },
    signupFunction: function(evt) {
        evt.preventDefault();
        // $('.signup-modal').toggleClass('showSignup');
        let username = this.$('input[name="username"]').val();
        let password = this.$('input[name="password"]').val();
        let password2 = this.$('input[name="password2"]').val();
        if (password !== password2){
          console.log('your passwords don\'t match!');
        } else {
        // router.navigate('profile', {trigger: true});
        session.save({username: username, password: password}, {
            url: `https://baas.kinvey.com/user/${settings.appKey}`,
            success: function(session, response) {
                // session.username = username;
                // session.authtoken = response._kmd.authtoken;
                sessionStorage.session = JSON.stringify(session);
                session.unset('password');
                router.navigate('profile', {trigger:true});
                $('input[name="username"]').val('');
                $('input[name="password"]').val('');
                $('input[name="password2"]').val('');
            },
            error: function() {
                console.log('ERROR! User failed to signup! See signupView.js');
            }});
          }
    },
    cancelFunction: function(){
      let login = new LoginView();
      login.render();
      router.navigate('login', {trigger:true});
    },
    template: function() {
        return `
          <h2>Sign Up</h2>
          <input type="text" name="username" placeholder="username" />
          <input type="password" name="password" placeholder="password" />
          <input type="password" name="password2" placeholder="confirm password" />
          <input type="submit" name="submit" placeholder="submit" />
          <input class="cancel-btn" type="button" name="cancel" value="cancel" />
          `;
    },
    render: function() {
        this.$el.html(this.template());
        return this;
    }
});

export default SignupView;
