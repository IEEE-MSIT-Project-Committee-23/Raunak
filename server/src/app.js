require('dotenv').config({ path: "../.env" });
const express = require('express');
const app = express();
const cors = require('cors');
const passport = require('./routes/auth');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const User = require('./models/user');

const serverURL = process.env.serverURL;
const clientURL = process.env.clientURL;

app.use(cookieParser());

// Use the express-session middleware.
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
  })
);

// Initialize Passport and enable session support.
app.use(passport.initialize());
app.use(passport.session());


// Serialize and deserialize users for Passport.
passport.serializeUser(function (user, done) {
  done(null, user.id);
});

passport.deserializeUser(async function (id, done) {
  try {
    const user = await User.findById(id);
    done(null, user);
  } catch (err) {
    done(err, null);
  }
});


// Use the Passport Google strategy.
passport.use(User.createStrategy());

// Set the Access-Control-Allow-Credentials header to allow cross-origin cookies.
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Credentials', true);
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,UPDATE,OPTIONS');
  res.header('Access-Control-Allow-Headers', 'X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept');
  next();
});



// Define a route to redirect users to Google for authentication.
app.get(`${serverURL}/auth/google`, passport.authenticate('google', { scope: ['profile', 'email'] }));

// Define a route to handle Google authentication callbacks.
app.get('/auth/google/callback', passport.authenticate('google'), (req, res) => {
  // Set cookies containing the user's name and email address.
  res.cookie('name', req.user.name, { domain: '' });
  res.cookie('email', req.user.email, { domain: '' });

  // Redirect the user to the client application.
  res.redirect(`${clientURL}/pass`);
});


// Use the cors middleware to restrict access to the API from specific origins.
app.use(cors({
  origin: [],
}));

// Connect to the database.
require('./db/conn');

app.use(express.json());
app.use(express.urlencoded());

require("./models/user");
require("./models/Transaction")


app.use(require("./routes/user"));
app.use(require("./routes/razorpay"))

// Start the Express application.
const port = process.env.PORT || 8000;
app.listen(port, '0.0.0.0', () => {
  console.log(`listening on port ${port}`);
});
