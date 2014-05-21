var ldapauth = require("ldapauth");
var auth = require("basic-auth");
var express = require("express");
var config = require("./config");

var app = express();
app.set("view engine", "hbs");

var ldap = new ldapauth(config.ldap);

var unauthorized = function(response) {
  response.statusCode = 401;
  response.setHeader("WWW-Authenticate", "Basic realm='LDAP Example'");
  response.end("401 Unauthorized");
}

app.get("/", function(request, response) {
  if (user = auth(request)) {
    ldap.authenticate(user.name, user.pass, function(error, user) {
      if (!error) {
        response.render("index", user);
      } else {
        unauthorized(response);
      }
    });
  } else {
    unauthorized(response);
  }
});

var server = app.listen(5000, function() {
  console.log("Listening on port %d", server.address().port);
});
