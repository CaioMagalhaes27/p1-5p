const UserRepository = require('../Repositories/UserRepository');

const userRepository = new UserRepository();

exports.registerUser = async (req, res) => {
  try {
    const { username, password } = req.body;
    const userExists = await userRepository.findByUsername(username);
    if (userExists) {
      return res.status(400).json({ error: 'Username already exists' });
    }
    const newUser = await userRepository.createUser({ username, password });
    res.status(201).json(newUser);
  } catch (err) {
    res.status(500).json({ error: 'Internal server error' });
  }
};