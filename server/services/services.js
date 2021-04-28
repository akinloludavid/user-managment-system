exports.home = (req, res) => {
  res.render('index')
}

exports.add_user = (req, res) => {
  res.render('add-user')
}

exports.update_user = (req, res) => {
  res.render('update-user')
}