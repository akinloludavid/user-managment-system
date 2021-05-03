const axios = require('axios');
const {
  response
} = require('express');
exports.home = (req, res) => {
  axios.get('http://localhost:3000/api/users')
    .then(response => {
      res.render('index', {
        users: response.data
      })
      console.log(response.data)
    })
    .catch(err => {
      res.send(err)
    })

}

exports.add_user = (req, res) => {
  res.render('add-user')
}

exports.update_user = (req, res) => {
  axios.get('http://localhost:3000/api/users', {
      params: {
        id: req.query.id
      }
    })
    .then(data => {
      res.render('update-user', {
        user: userdata.data
      })
    })
    .catch(err => {
      res.send(err)
    })
  res.render('update-user')
}