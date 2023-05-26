const validation = async (req, res, next) => {
  const users = req.body;

  if(!users.name) {
    return res.status(400).json({message: 'name is required'})
  }

  if(users.name.length < 5) {
    return res.status(422).json({message: '"name" length must be at least 5 characters long'})
  }
  next();
}

module.exports = validation;
