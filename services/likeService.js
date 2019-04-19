const Like = require("../models").Like;

class LikeService {
  async create(body) {
    return await Like.create({
      fromUser: body.fromUser,
      toUser: body.toUser
    });
  }

  async getLikeRequestByID(userId) {
    return await Like.findAll({
      where: {
        toUser: userId
      }
    });
  }

  async getSentLikesByID(userId) {
    return await Like.findAll({
      where: {
        fromUser: userId
      }
    });
  }

  async getById(likeId) {
    return await Like.findOne({
      where: {
        id: likeId
      }
    });
  }
}

module.exports = LikeService;
