const { getAllUser } = require('./user.service');

function handleAllUsers(req, res) {
  const users = getAllUser();
  res.json(users);
}

module.exports = {
  handleAllUsers
}
