class UserController {
  constructor(service) {
    this.service = service;
  }

  async create(ctx) {
    const newUser = await this.service.create(ctx);
    ctx.body = {
      status: "success",
      data: newUser
    };
  }

  async find(ctx) {
    const message = await this.service.getUserById(ctx);
    if (message == null) {
      return this._notFoundResponse(ctx);
    }
    this._returnMessage(ctx, message);
  }

  _notFoundResponse(ctx) {
    ctx.status = 404;
    ctx.body = {
      err_msg: "Message not found"
    };
  }

  _returnMessage(ctx, message) {
    ctx.body = {
      message: message.message
    };
  }
}

module.exports = UserController;
