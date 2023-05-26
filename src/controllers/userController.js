const userService = require('../services/userService');


const getAll = async (_req, res) => {
  const users = await userService.getAll();
  return res.status(200).json(users);
}

const getById = async (req, res) => {
  const { id } = req.params
  const { type, message } = await userService.getById(id);
  if(type) {
    return res.status(type).json({message});
  };
}

const createUsers = async (req, res) => {
  const arrayUsers = req.body;
  const { message } = userService.createUsers(arrayUsers);
  return res.status(201).json(message)
}

const updatedUser = async (req, res) => {
  const {name, email} = req.body;
  const { id } = req.params;
  const { type, message } = await userService.updateUser(name, email, id);
  if(type) {
    return res.status(type).json({ message });
  }
  return res.status(200).json(message)
}

const userDelete = async (req, res) => {

  try {
    const { id } = req.params;
  const { type, message } = await userService.userDelete(id);
  if (type) {
    return res.status(404).json({ message });
  }
  return res.status(204).end();
  } catch (error) {
    console.log(error.message);
    return {message: error.message}
  }
};

module.exports = {
  getAll,
  getById,
  createUsers,
  updatedUser,
  userDelete,
}