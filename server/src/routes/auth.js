require('dotenv').config();
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const User = require('./user');

const serverURL = process.env.serverURL;

// Configure and register the Passport strategy for Google authentication.
passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,

      // The URL where Google will redirect the user after they have authenticated.
      callbackURL: `${serverURL}/auth/google/callback`,

      // The scopes to request from Google. In this case, we are requesting the profile and email scopes.
      scope: ['profile', 'email'],

      // The URL where Google will return the user's profile information.
      userProfileURL: 'https://www.googleapis.com/oauth2/v3/userinfo',
    },

    // The handler for Google authentication.
    (accessToken, refreshToken, profile, done) => {
      // Find or create a user record for the authenticated user.
      User.findOrCreate(
        { googleId: profile.id },
        { name: profile.name.givenName, email: profile.emails[0].value },
        function (err, user) {
          // If there was an error, return the error to the application.
          if (err) {
            return done(err, null);
          }

          // Otherwise, return the authenticated user to the application.
          return done(null, user);
        }
      );
    }
  )
);

// Export the passport object.
module.exports = passport;
