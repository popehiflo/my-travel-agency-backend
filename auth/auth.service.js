const UserModel = require("../api/user/user.model");
const CryptoJS = require("crypto-js");

async function signUpUser(user) {
  const { email, password } = user;
  const existEmail = await UserModel.findOne({ email });

  if (existEmail) {
    return null;
  }
  const newUser = new UserModel(user);
  newUser.password = CryptoJS.AES.encrypt(password, process.env.PASS_SECRET_KEY).toString();
  await newUser.save();
  return newUser;
}

module.exports = {
  signUpUser,
}