class ProfileController {
  constructor(service) {
    this.service = service;
  }

  async create(ctx) {
    const { body } = ctx.request;
    const newProfile = await this.service.create(body);
    this._buildResponse(newProfile, ctx);
  }

  async show(ctx) {
    const profile = await this.service.getById(ctx);
    if (profile == null) {
      return this._notFoundResponse(ctx);
    }
    this._returnProfile(ctx, profile);
  }

  async update(ctx) {
    const newprofile = await this.service.update(ctx);
    if (newprofile == null) {
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
      status: "success",
      data: profile
    };
  }

  _buildResponse(newProfile, ctx) {
    if (newProfile[1] == false) {
      ctx.body = {
        status: "Conflict",
        message: "Account AlreadyExists"
      };
    } else {
      ctx.body = {
        status: "success",
        data: newProfile[0]
      };
    }
  }
}

module.exports = ProfileController;
