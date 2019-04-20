const Profile = require("../models").Profile;

class ProfileService {
  async create(body) {
    return await Profile.findOrCreate({
      where: { id: body.UserId },
      defaults: { ...body }
    });
  }

  async update(body, userId) {
    return await Profile.update(
      {
        state: body.state,
        city: body.city,
        zip: body.zip,
        dateOfBirth: body.dateOfBirth
      },
      {
        returning: true,
        where: { UserId: userId }
      }
    );
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
