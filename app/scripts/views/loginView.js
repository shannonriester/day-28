import $ from 'jquery';
import Backbone from 'backbone';

import router from '../router';
import settings from '../settings';
import session from '../models/session';
import SignupView from './signupView';

const LoginView = Backbone.View.extend({
    tagName: 'form',
    className: 'login-form',
    events: {
        'submit': 'submitFunction',
        'click #signup-btn': 'signupFunction'
    },
    submitFunction: function(evt) {
        evt.preventDefault();
        let username = this.$('#username').val();
        let password = this.$('#password').val();
        session.save({username: username, password: password}, {
            success: function(model, response) {
                model.unset('password');
                router.navigate('profile', {trigger: true});
            },
            error: function() {
                router.navigate('login', {trigger: true});
                console.log('ERROR! User failed to login! See loginView.js');
            }});
    },
    signupFunction: function(){
      let signup = new SignupView();
      signup.render();
      $('.register').empty().append(signup.$el);
      router.navigate('login/signup', {trigger:true});
    },
    template: function() {
        return `
      <form class="login-modal">
        <h1>Riester's Tweeters</h1>
        <input id="username" type="text" name="username" placeholder="username" />
        <input id="password" type="text" name="password" placeholder="password" />
        <input type="submit" name="submit" placeholder="submit" />
        <section class="register">
            <h3>Not Registered? Sign Up</h3>
            <button id="signup-btn" type="button" name="signup-btn">Sign Up</button>
        </section>
      </form>
      `;
    },
    render: function() {
        this.$el.html(this.template());
        return this;
    }
});

export default LoginView;
