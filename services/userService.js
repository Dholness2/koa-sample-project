const User = require("../models").User;

class UserService {
  async create(ctx) {
    const { body } = ctx.request;
    return await User.create({
      firstName: body.firstName,
      lastName: body.lastName,
      email: body.email
    });
  }

  async getUserById(ctx) {
    const userId = ctx.params.id;
    return await Message.findOne({
      where: {
        id: userId
      }
    });
  }
}

module.exports = UserService;
