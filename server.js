const express = require("express");
const dotenv = require("dotenv");
const passport = require("passport");
const session = require("express-session");

const app = express();
dotenv.config();
const PORT = 3000;

require("./src/oauth/oauth");

const isLoggedIn = (req, res, next) => {
  req.user ? next() : res.send(401);
};

app.use(session({ secret: process.env.SESSION_SECRET }));
app.use(passport.initialize());
app.use(passport.session());

app.get("/", (req, res) => {
  res.send("<p>Go to <a href='/auth/google/'>Google</a> authentication</p>");
});

app.get(
  "/auth/google/",
  passport.authenticate("google", { scope: ["email", "profile"] })
);
app.get(
  "/redirected",
  passport.authenticate("google", {
    successRedirect: "/protected",
    failureRedirect: "/failed",
  })
);
app.get("/failed", (req, res) => {
  res.send("<p>Failed to authenticate</p>");
});

app.get("/protected", isLoggedIn, (req, res) => {
  res.send(
    `<h2>Hello ${req.user.displayName}</h2><a href='/logout'>Logout</a>`
  );
});

app.get("/logout", (req, res, next) => {
  req.logout((err) => {
    if (err) {
      return next(err);
    }
  });
  req.session.destroy();
  res.redirect("/");
});

app.listen(PORT, console.log(`Listening to port: ${PORT}`));
