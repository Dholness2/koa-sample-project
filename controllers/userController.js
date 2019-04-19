const v1Adapter = require("../adapters/userAdapterV1");
const LEGACEY_PAYLOAD_PAY = "v1";

class UserController {
  constructor(service) {
    this.service = service;
  }

  async create(ctx) {
    console.log(ctx.path);
    const newUser = await this.service.create(this.buildUserRequest(ctx));
    ctx.session.user = newUser;
    ctx.body = {
      status: "success",
      data: newUser.id
    };
  }

  async find(ctx) {
    const userId = ctx.params.id;
    const user = await this.service.getUserById(userId);
    if (user == null) {
      ctx.throw(404, "user not found");
    }
    ctx.body = { status: "ok", data: this.buildUserResponse(ctx, user) };
  }

  buildUserRequest(ctx) {
    if (ctx.path.includes(LEGACEY_PAYLOAD_PAY)) {
      return v1Adapter.buidlLeagaceyPayload(ctx);
    }
    return ctx.request.body;
  }

  buildUserResponse(ctx, user) {
    if (ctx.path.includes(LEGACEY_PAYLOAD_PAY)) {
      return v1Adapter.buildLegaceyRespons(user);
    }
    return user;
  }
}

module.exports = UserController;
