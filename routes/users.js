const express = require('express')

const db = require('../db')

const router = express.Router()

router.get('/', (req, res) => {
  db.getUsers()
    .then(users => {
      res.render('index', {users: users})
    })
    .catch(err => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

router.get('/profile:id', (req, res) => {
  const id = req.params.id
  db.getProf(id)
    .then(user => {
      res.render('./templates/profiles', {user})
    }).catch(err => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

router.post('/addBlog', (req, res) => {
  const id = req.body.id
  const title = req.body.title
  const blog = req.body.blog
  db.addBlog(id, title, blog)
    .then(() => {
      res.redirect('/')
    }).catch(err => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

module.exports = router
