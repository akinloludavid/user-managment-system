let Userdb = require('../model/model');

exports.create = (req, res) => {

  //new user
  const user = new Userdb({
    name: req.body.name,
    email: req.body.email,
    gender: req.body.gender,
    status: req.body.status
  })
  if (!req.body) {
    res.status(400).send({
      message: "Content cannot be empty"
    })

  }

  //save user in the database
  user
    .save(user)
    .then(data => {
      //res.send(data)
      res.redirect('/add-user')
    })
    .catch(err => res.status(500).send({
      message: err.message || 'Error while creating a new user'
    }))
}

exports.getOne = (req, res) => {
  const id = req.params.id;

  Userdb.findById({
      _id: id
    })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: "Cannot find the given id"
        })
      } else {
        res.send(data)
      }
    })
    .catch(err => res.status(500).send({
      message: "Error occured"
    }))
}

exports.find = (req, res) => {

  if (req.query.id) {
    const id = req.query.id;
    Userdb.findById(id)
      .then(data => {
        if (!data) {
          res.status(404).send({
            message: "User not found"
          })
        } else {
          res.status(200).send(data)
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retreiving user"
        })
      })

  } else {
    Userdb.find()
      .then(data => res.send(data))
      .catch(err => res.status(500).send({
        message: err.message
      }))
  }

}

exports.update = (req, res) => {
  if (!req.body) {
    return res.status(500).send({
      message: "Data to update cannot be empty"
    })
  }

  const id = req.params.id;
  Userdb.findByIdAndUpdate(id, req.body, {
      useFindAndModify: false
    })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: "Cannot update user id"
        })
      } else {
        res.send(data)
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating user info"
      })
    })
}

exports.delete = (req, res) => {
  const id = req.params.id;
  Userdb.findByIdAndDelete(id)
    .then(data => {
      if (!data) {
        res.send({
          message: "User not found"
        })
      } else {
        res.send({
          message: "User deleted successfully"
        })
      }
    })
    .catch(err => {
      res.status(500)
        .send({
          message: `User with id ${id} not found`
        })
    })
}