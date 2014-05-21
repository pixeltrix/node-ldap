module.exports = {
  ldap: {
    url: "ldaps://ldap.example.com:636",
    adminDn: "uid=admin,ou=admins,dc=example,dc=com",
    adminPassword: "password",
    searchBase: "ou=staff,dc=example,dc=com",
    searchFilter: "(uid={{username}})",
    cache: true
  }
};
