const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
  getUsers,
  getProf,
  addBlog
}

function getUsers (testConn) {
  const conn = testConn || connection
  return conn('users').select()
}

function getProf (id, testConn) {
  const conn = testConn || connection
  return conn('users')
    .join('profiles', 'users.id', 'profiles.user_id')
    .where('users.id', id)
    .select()
}

function addBlog (id, title, blog) {
  const conn = testConn || connection
  return conn('blog')
    .insert('user_id', id, 'title', title, 'blog', blog)
}
