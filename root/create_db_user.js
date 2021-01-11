// user root
use admin
db.createUser({ user: "root" , pwd: "root", roles: ["root"]});

//user admin
use admin
db.createUser({ user: "admin" , pwd: "admin", roles: ["readAnyDatabase","readWriteAnyDatabase","userAdminAnyDatabase","dbAdminAnyDatabase"]});

// user HOST readWrite
use HOST
db.dropUser("HOST");
db.createUser({ user: "HOST" , pwd: "HOST", roles: [ { role:"readWrite", db:"HOST" } ]});