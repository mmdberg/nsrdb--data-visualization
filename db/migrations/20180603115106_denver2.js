
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('denver2', 
      function(table) {
        table.increments('id').primary();
        table.string('Latitude');
        table.string('Longitude');
        table.string('Day');
        table.integer('Time').unsigned();
        table.integer('DNI').unsigned();
      })
  ])
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('denver2')
  ])
};