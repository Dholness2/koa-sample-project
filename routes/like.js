const KoaRouter = require("koa-router");
const LikeService = require("../services/likeService");
const LikeController = require("../controllers/likeController");

const likeService = new LikeService();
const controller = new LikeController(likeService);
const likeRouter = new KoaRouter();

likeRouter
  .post("/likes", async ctx => {
    return await controller.create(ctx);
  })
  .get("/likes/:id", async ctx => {
    return await controller.find(ctx);
  })
  .get("/users/:id/likes", async ctx => {
    return await controller.findIncoming(ctx);
  });

module.exports = likeRouter;
