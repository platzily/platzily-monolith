mongosh -u $MONGO_INITDB_ROOT_USERNAME -p $MONGO_INITDB_ROOT_PASSWORD <<EOF

use $MONGO_INITDB_DATABASE

db.createUser({
  user: '$MONGODB_USER',
  pwd: '$MONGODB_PASS',
  roles: [{
    role: 'readWrite',
    db: '$MONGO_INITDB_DATABASE'
  }]
});

db.config.insertOne({
  seed: {
    user: '$MONGODB_USER',
    role: 'readWrite' 
  }
});
EOF