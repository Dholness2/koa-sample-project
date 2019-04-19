class UserController {
  constructor(service) {
    this.service = service;
  }

  async create(ctx) {
    const userRequest = ctx.request.body;
    const newUser = await this.service.create(userRequest);
    ctx.session.user = newUser;
    ctx.body = {
      status: "success",
      data: newUser.id
    };
  }

  async find(ctx) {
    const user = await this.service.getUserById(ctx);
    if (user == null) {
      ctx.throw(404, "user not found");
    }
    ctx.body = { status: "ok", data: user };
  }
}

module.exports = UserController;
