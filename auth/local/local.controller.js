const UserModel = require("../../api/user/user.model");
const CryptoJS = require("crypto-js");

async function handlerSignUpUser(req, res) {
  const newUser = new UserModel({
    fullname: req.body.fullname,
    username: req.body.username,
    email: req.body.email,
    password: CryptoJS.AES.encrypt(
      req.body.password,
      process.env.PASS_SECRET_KEY
    ).toString(),
  });

  try {
    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (err) {
    res.status(500).json(err);
  }
}

module.exports = {
  handlerSignUpUser,
};
