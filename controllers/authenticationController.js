class AuthenticationController {
  constructor(service) {
    this.service = service;
  }

  async create(ctx) {
    return await this.service.login(ctx);
  }

  async destroy(ctx) {
    return await this.service.logout(ctx);
  }
}

module.exports = AuthenticationController;
