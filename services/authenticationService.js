const User = require("../models").User;
const bcrypt = require("bcrypt");
const jsonwebtoken = require("jsonwebtoken");
const secret = process.env.JWT_SECRET || "shared-secret";

class AuthentiationService {
  async login(ctx) {
    const { body } = ctx.request;
    const user = await User.findOne({
      where: {
        email: body.email
      }
    });

    if (!user) ctx.throw(404, "user not found");
    const isValid = await bcrypt.compare(body.password, user.password);
    if (isValid) {
      ctx.session.user = user;
      ctx.body = { status: "created" };
    } else {
      ctx.throw(404, "user not found");
    }
  }

  async logout(ctx) {
    delete ctx.session.user;
    ctx.body = { status: "ok" };
  }
}

module.exports = AuthentiationService;
