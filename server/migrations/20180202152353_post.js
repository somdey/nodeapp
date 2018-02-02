
exports.up = function(knex, Promise) {
  return knex.schema.createTable('posts', function(t) {
    t.increments('id').unsigned().primary();
    t.integer('userId').notNull();
    t.string('title').notNull();
    t.string('description').nullable();
    t.string('filename').nullable();
    t.dateTime('createdAt').notNull();
    t.dateTime('updatedAt').nullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('posts');
};

