const User = require('../models/User');

class UserRepository {
  async findByUsername(username) {
    return await User.findOne({ username });
  }

  async createUser(userData) {
    return await User.create(userData);
  }
}

module.exports = UserRepository;