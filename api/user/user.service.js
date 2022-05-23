const UserModel = require('./user.model');

async function getAllUser() {
  const users = await UserModel.find();
  return users;
}

async function getOneUser(id) {
  const user = await UserModel.findById(id);

  if (!user) {
    return null;
  }
  return user;
}

async function createUser(user) {
  const { email } = user;
  const existEmail = await UserModel.findOne({ email });

  if(existEmail) {
    return null;
  }
  const newUser = await UserModel.create(user);
  return newUser;
}

async function updateUser(id, user) {
  // TODO: verificar si el nuevo email ya existe
  // TODO: a menos que sea del propio usuario
  const newData = user;
  /* quitar campos que no se deberian actualizar */
  delete newData.google;
  delete newData.facebook;

  const oldUser = await UserModel.findById(id);
  if(newData.email == oldUser.email) {
    /* quitar email xq es el mismo */
    delete newData.email;
    /* mongoose suele devolver el antiguo user, {new:true} devuelve el nuevo */
    const updatedUser = await UserModel.findByIdAndUpdate(id, user, {new: true});
    return updatedUser;
  } else {
    const existEmail = await UserModel.findOne({email: user.email});
    if(existEmail) {
      return null;
    }
  }

  const updatedUser = await UserModel.findByIdAndUpdate(id, user, {new: true});
  return updatedUser;
}

async function deleteUser(id) {
  const user = await UserModel.findByIdAndDelete(id);
  return user;
}

module.exports = {
  getAllUser,
  getOneUser,
  createUser,
  updateUser,
  deleteUser,
}
