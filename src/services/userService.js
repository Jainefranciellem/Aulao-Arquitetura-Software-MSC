const userModel = require('../models/userModel');

const getAll = async () => {
  const users = await userModel.getAll();
  return users
}

const getById = async (id) => {
  const userById = await userModel.getById(id);
  if(!userById) {
    return { type: 404, message: 'User Not Found' }
  }
  return {type: null, message: userById }
}

const createUsers = async (userArray) => {
  const users = await userModel.createUsers(userArray);
  return {type: null, message: users}
}

const updateUser = async (name, email, id) => {
  const updateUser = await userModel.updateUser(name, email, id);
  if(updateUser === 0){
    return { type: 404, message: 'Not updated'}
  }
  return {type: null, message: {name, email}}
}

// const userDelete = async (id) => {
//   console.log('Service id', id);
//   const user = await userModel.getById(id);
//   if(!user) return { type: 404, message: 'User Not Found'}
//   await userModel.userDelete(id)
//   return { type: null, message: 'succes delete user'}
// }

const userDelete = async (id) => {
  const UserId = await userModel.getById(id);
   if (!UserId) {
     return { type: 404, message: 'User not found' };
   }
  await userModel.userDelete(id);
  return { type: null, message: UserId };
};

module.exports = {
  getAll,
  getById,
  createUsers,
  updateUser,
  userDelete,
}