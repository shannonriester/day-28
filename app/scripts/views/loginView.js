import $ from 'jquery';
import Backbone from 'backbone';

import session from '../models/session';

const LoginView = Backbone.View.extend({
    tagName: 'form',
    className: 'login-form',
    events: {
        'submit': 'submitFunction'
    },
    submitFunction: function(evt) {
        evt.preventDefault();
        let username = this.$('#username').val();
        let password = this.$('#password').val();
        session.save({
            username: username,
            password: password
        }, {
            success: function(model, response) {
                model.unset('password');
                router.navigate('profile', {
                    trigger: true
                });
            },
            error: function() {
                console.log('ERROR! User failed to login. See loginView.js');
            }});
    },
    template: function() {
        return `
      <form class="login-modal">
        <h1>Riester's Tweeters</h1>
        <input id="username" type="text" name="username" placeholder="username" />
        <input id="password" type="text" name="password" placeholder="password" />
        <input type="submit" name="submit" placeholder="submit" />
          <div class="signup-modal">
            <h2>Sign Up</h2>
            <input type="text" name="username" placeholder="username" />
            <input type="text" name="password1" placeholder="password" />
            <input type="text" name="password2" placeholder="confirm password" />
            <input type="submit" name="submit" placeholder="submit" />
          </div>
          <section class="register">
            <h3>Not Registered? Sign Up</h3>
            <button type="button" name="signup-btn">Sign Up</button>
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
