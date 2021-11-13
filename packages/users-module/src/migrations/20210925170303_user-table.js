
exports.up = function(knex) {
	return knex.schema
		.createTable('users', function (table) {
			table.increments('id');
			table.string('firstname', 255).notNullable();
			table.string('lastname', 255);
			table.text('description');
			table.string('email', 255).notNullable();
			table.string('rol', 255).notNullable().defaultTo('admin');
			table.string('image', 255);
			table.boolean('is_active').notNullable().defaultTo(true);
			table.string('reason',255);
		})
};

exports.down = function(knex) {
	return knex.schema
		.dropTable("users");
};
