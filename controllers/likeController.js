class LikeController {
  constructor(service) {
    this.service = service;
  }

  async create(ctx) {
    const newLike = await this.service.create(ctx);
    ctx.body = {
      status: "created",
      data: newLike
    };
  }

  async find(ctx) {
    const like = await this.service.getByID(ctx);
    if (like == null) {
      return this._notFoundResponse(ctx);
    }
    ctx.body = {
      status: "success",
      data: like
    };
  }

  async findIncoming(ctx) {
    const userId = ctx.params.id;
    const type = ctx.params.type;
    const like = null;
    switch (type) {
      case "incoming":
        like = await this.service.getLikeRequestByID(userId);
      case "outgoing":
        like = await this.service.getSentLikesByID(userId);
    }
    if (like == null) {
      return this._notFoundResponse(ctx);
    }
    ctx.body = {
      status: "success",
      data: like
    };
  }

  _notFoundResponse(ctx) {
    ctx.status = 404;
    ctx.body = {
      err_msg: "Message not found"
    };
  }
}

module.exports = LikeController;
