const Like = require("../models").Like;

class LikeService {
  async create(ctx) {
    const { body } = ctx.request;
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

  async getById(ctx) {
    const likeId = ctx.params.id;
    return await Like.findOne({
      where: {
        id: likeId
      }
    });
  }
}

module.exports = LikeService;
