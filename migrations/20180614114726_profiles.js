exports.up = (knex, Promise) => {
  return knex.schema.createTable('profiles', (table) => {
    table.increments('id').primary()
    table.string('img')
    table.integer('user_id')
  })
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('profiles')
}
