const Profile = require("../models").Profile;

class ProfileService {
  async create(body) {
    return await Profile.findOrCreate({ ...body });
  }

  async update(body, userId) {
    const profile = await Profile.findOne({
      where: {
        user_id: userId
      }
    });
    return await profile.update(body);
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
