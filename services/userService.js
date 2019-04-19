const User = require("../models").User;
const bcrypt = require("bcrypt");

class UserService {
  async create(userRequest) {
    return await User.create({
      ...userRequest,
      password: await this.saltPassWord(userRequest.password)
    });
  }

  async getUserById(userId) {
    return await User.findOne({
      where: {
        id: userId
      }
    });
  }

  async saltPassWord(password) {
    return await bcrypt.hash(password, 5);
  }
}

module.exports = UserService;
