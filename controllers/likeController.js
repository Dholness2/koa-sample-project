class LikeController {
  constructor(service) {
    this.service = service;
  }

  async create(ctx) {
    const newLike = await this.service.create(ctx.body);
    ctx.body = {
      status: "created",
      data: newLike
    };
  }

  async find(ctx) {
    const like = await this.service.getById(ctx.params.id);
    if (like == null) {
      return this._notFoundResponse(ctx);
    }
    ctx.body = {
      status: "success",
      data: like
    };
  }

  async findIncoming(ctx) {
    const { id, type } = ctx.params;
    switch (type) {
      case "incoming":
        return this._foundResponse(
          ctx,
          await this.service.getLikeRequestByID(id)
        );
        break;
      case "outgoing":
        return this._foundResponse(
          ctx,
          await this.service.getSentLikesByID(id)
        );
        break;
      default:
        this._notFoundResponse(ctx);
    }
  }
  _foundResponse(ctx, like) {
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
