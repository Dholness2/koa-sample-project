class ProfileController {
  constructor(service) {
    this.service = service;
  }

  async create(ctx) {
    const newProfile = await this.service.create(ctx);
    ctx.body = {
      status: "success",
      data: newProfile
    };
  }

  async show(ctx) {
    const profile = await this.service.getById(ctx);
    if (profile == null) {
      return this._notFoundResponse(ctx);
    }
    ctx.body = {
      status: "success",
      data: profile
    };
  }

  async update(ctx) {
    const newprofile = await this.service.update(ctx);
    if (profile == null) {
      return this._notFoundResponse(ctx);
    }
    ctx.body = {
      status: "Created",
      data: newProfile
    };
  }

  _notFoundResponse(ctx) {
    ctx.status = 404;
    ctx.body = {
      err_msg: "Message not found"
    };
  }

  _returnProfile(ctx, profile) {
    ctx.body = {
      profile: profile
    };
  }
}

module.exports = ProfileController;
