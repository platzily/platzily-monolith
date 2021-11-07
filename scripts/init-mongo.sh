mongo -- "$MONGO_INITDB_DATABASE" <<EOF
use $MONGO_INITDB_DATABASE;

db.auth('$MONGO_INITDB_ROOT_USERNAME', '$MONGO_INITDB_ROOT_PASSWORD');

use $MONGODB_DATABASE;

db.createUser({
  user: '$MONGODB_USER',
  pwd: '$MONGODB_PASS',
  roles: [{
    role: 'readWrite',
    db: '$MONGODB_DATABASE'
  }]
});

db.config.insert({'test': 'hello'});
EOF