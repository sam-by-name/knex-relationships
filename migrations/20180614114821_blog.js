exports.up = (knex, Promise) => {
  return knex.schema.createTable('blogs', (table) => {
    table.increments('id').primary()
    table.string('title')
    table.string('blog')
    table.integer('user_id')
  })
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('blogs')
}
