const connection = require('./connection');

const getAll = async () => {
  const [users] = await connection.execute(
    'SELECT * FROM SalesManager.users'
  );
  console.log(users);
  return users;
}

const getById = async (id) => {
  const [[users]] = await connection.execute(
    'SELECT * FROM SalesManager.users WHERE id = ?', [id],
  );
  return users;
}

const createUsers = async (arrayUsers) => {
  const promisse = arrayUsers.map(async ({ name, email }) => {
    await connection.execute(
      'INSERT INTO SalesManager.users (name, email) VALUES (?, ?);' [name, email],
    );
  })
  await Promise.all(promisse);
  return promisse;
}

const updateUser = async (name, email, id) => {
  const [{ affectedRows }] = await connection.execute(
    'UPDATE SalesManager.users SET name = ?, email = ? WHERE id = ?;', [name, email, id],
  )
  return affectedRows;
}

const userDelete = async (id) => {
  await connection.execute(
    'DELETE FROM SalesManager.users WHERE id = ?;', [id],
  );
}


module.exports = { 
  getAll,
  getById,
  createUsers,
  updateUser,
  userDelete,
 }