const KoaRouter = require("koa-router");
const ProfileService = require("../services/profileService");
const ProfileController = require("../controllers/profileController");

const profileService = new ProfileService();
const controller = new ProfileController(profileService);
const profileRouter = new KoaRouter();

profileRouter
  .post("/profiles", async ctx => {
    return await controller.create(ctx);
  })
  .get("/profiles/:id", async ctx => {
    return await controller.show(ctx);
  })
  .put("/profiles/:id", async ctx => {
    return await controller.update(ctx);
  });

module.exports = profileRouter;
