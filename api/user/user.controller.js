const userModel = require('./user.model');
const {
  getAllUser,
  getOneUser,
  createUser,
  updateUser,
  deleteUser,
} = require('./user.service');

async function handlerAllUser(req, res) {
  const users = await getAllUser();
  res.json(users);
}

async function handlerOneUser(req, res) {
  const { id } = req.params;
  const user = await getOneUser(id);

  if (!user) {
    res.status(404).json({ message: `User not found with id: ${id}`});
  } else {
    res.json(user);
  }
}

async function handlerCreateUser(req, res) {
  const newUser = req.body;

  try {
    // TODO: manejar, validar campos requeridos/obligatorios al crear
    const user = await createUser(newUser);
    if(!user) {
      res.status(400).json({ message: `${newUser.email} is already registered`});
    } else {
      res.status(201).json(user);
    }
  } catch (error) {
    res.status(500).json(error);
  }
}

async function handlerUpdateUser(req, res) {
  const { id } = req.params;

  try {
    // TODO: manejar, validar campos requeridos/obligatorios al actualizar
    // TODO: solo el ADMIN o el mismo usuario puede actualizar su informacion
    // TODO: excepto el campo ROL, solo el ADMIN lo puede cambiar
    const oldUser = await getOneUser(id);

    if (!oldUser) {
      res.status(404).json({ message: `User not found with id: ${id}`});
    } else {
      const newUser = await updateUser(id, req.body);

      // TODO: verificar validacion del la existencia de email
      if(!newUser) {
        res.status(400).json({ message: `${newUser.email} is already registered`});
      } else {
        res.json(newUser);
      }
    }

  } catch (error) {
    res.status(500).json(error);
  }
}

async function handlerDeleteUser(req, res) {
  const id = req.params.id;
  const user = await deleteUser(id);

  if(!user) {
    res.status(404).json({ message: `User not found with id: ${id}`});
  } else {
    res.json(user);
  }
}

module.exports = {
  handlerAllUser,
  handlerOneUser,
  handlerCreateUser,
  handlerUpdateUser,
  handlerDeleteUser,
};
