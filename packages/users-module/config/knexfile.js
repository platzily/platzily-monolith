const {databaseConfig} = require('mariadb-connection-module')

module.exports = {
	...databaseConfig,
	migrations: {
		directory: '../src/migrations'
	}
};
