const Profile = require("../models").Profile;

class ProfileService {
  async create(body) {
    return await Profile.findOrCreate({ ...body });
  }

  async update(ctx) {
    const profile = await Profile.findOne({
      where: {
        user_id: userId
      }
    });
    return await profile.update(ctx.body);
  }

  async getById(profileId) {
    return await Profile.findOne({
      where: {
        id: profileId
      }
    });
  }
}

module.exports = ProfileService;
