const UserModel = require("../../api/user/user.model");
const CryptoJS = require("crypto-js");
const JWT = require("jsonwebtoken");

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

async function handlerSignInUser(req, res) {
  try{
    const user = await UserModel.findOne(
      {
        email: req.body.email
      }
    );

    // !user && res.status(401).json("Wrong email");
    if (!user) {
      return res.status(401).json("Wrong email or password");
    }

    const hashedPassword = CryptoJS.AES.decrypt(
      user.password,
      process.env.PASS_SECRET_KEY
    );

    const originalPassword = hashedPassword.toString(CryptoJS.enc.Utf8);

    const inputPassword = req.body.password;
    
    // originalPassword != inputPassword && 
    //   res.status(401).json("Wrong password");
    if (originalPassword !== inputPassword) {
      return res.status(401).json("Wrong email or password");
    }

    const accessToken = JWT.sign(
    {
      id: user._id,
      isAdmin: user.isAdmin,
      role: user.role,
    },
    process.env.JWT_SECRET_KEY,
    { 
      expiresIn:"3d"
    }
    );

    // no se debe devolver el password
    const { password, ...userWithoutPassword } = user.toObject();
    res.status(200).json({...userWithoutPassword, accessToken});

  } catch(err){
    res.status(500).json(err);
  }
};

module.exports = {
  handlerSignUpUser,
  handlerSignInUser,
};
