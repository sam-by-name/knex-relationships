const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
  getUsers,
  getProf
}

function getUsers (testConn) {
  const conn = testConn || connection
  return conn('users').select()
}

// function getUser (id, testConn) {
//   const conn = testConn || connection
//   return conn('users').where('id', id).first()
// }

function getProf (id, testConn) {
  const conn = testConn || connection
  return conn('users')
    .join('profiles', 'users.id', 'profiles.user_id')
    .where('users.id', id)
    .select()
}
