var Userdb = require('../model/model')

// Create and save new user

exports.create = (req, res) => {
  if (!req.body) {
    res.status(400).send({
      message: "Content cannot be empty"
    })

  }
  //new user
  const user = new Userdb({
    name: req.body.name,
    email: req.body.email,
    gender: req.body.gender,
    status: req.body.status
  })

  //save user in the database
  user
    .save(user)
    .then(data => {
      res.send(data)
    })
    .catch(err => res.status(500).send({
      message: err.message || 'Error while creating a new user'
    }))
}


exports.find = (req, res) => {

}

exports.update = (req, res) => {

}

exports.delete = (req, res) => {

}